import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import moment from 'moment';
import {
  getPost,
  updateAuthUser,
  selectSubredditPage
} from './../../actions/index.jsx';
import { client } from './../../client';

class PostListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.post.votes
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.props.updateAuthUser(user.email);
        document.getElementById('logout').classList.remove('hide');
      } else {
        document.getElementById('logout').classList.add('hide');
      }
    });
  }

  setDetails() {
    this.props.getPost(this.props.post);
  }

  upvote() {
    if (this.props.authUser) {
      const votes = this.props.post.votes + 1;
      client.updateItem(`/post/${this.props.post.id}`, { votes }, data => {
        this.props.post.votes++;
        this.setState({ votes: data.votes });
      });
    }
  }

  downvote() {
    if (this.props.authUser) {
      const votes = this.props.post.votes - 1;
      client.updateItem(`/post/${this.props.post.id}`, { votes }, data => {
        this.props.post.votes--;
        this.setState({ votes: data.votes });
      });
    }
  }

  setTotalVotes(votes) {
    this.setState({ votes });
  }

  handleSubredditClick(subreddit) {
    this.props.selectSubredditPage(subreddit);
    this.props.history.push(`/subreddit/${subreddit}`);
  }

  render() {
    const { match, location, history } = this.props;
    const timestamp = moment(this.props.post.createdAt).format('ddd, h:mmA');

    return (
      <div className="twelve wide column">
        <img className="thumbnail" src={this.props.post.image} alt="" />
        <Link
          className="ui large header"
          to={`/postDetails/${this.props.post.id}`}
          onClick={() => this.setDetails()}
        >
          {this.props.post.title}
        </Link>
        <div className="meta">
          submitted {timestamp} by <a>{this.props.post.username}</a> to{' '}
          <a
            onClick={() => this.handleSubredditClick(this.props.post.subreddit)}
          >{`/${this.props.post.subreddit}`}</a>
        </div>
        <div>
          <ul className="ui big horizontal list voters">
            <li className="item">
              <a onClick={() => this.upvote()}>
                <i className="arrow up icon" />
                upvote
              </a>
            </li>
            <li className="item">{this.props.post.votes}</li>
            <li className="item">
              <a onClick={() => this.downvote()}>
                <i className="arrow down icon" />
                downvote
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gPost: state.gPost,
    authUser: state.authUser,
    selectedSubredditPage: state.selectedSubredditPage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getPost, updateAuthUser, selectSubredditPage },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostListEntry)
);
