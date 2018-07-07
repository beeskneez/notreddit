import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { getPost } from './../../actions/index.jsx';
import { client } from './../../client';

class SubredditPostEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalVotes: this.props.subredditPost.votes
    };
  }

  setDetails() {
    this.props.getPost(this.props.subredditPost);
  }

  upvote() {
    if (this.props.authUser) {
      client.updateItem(`/upvote/${this.props.subredditPost.id}`, null, () => {
        this.setTotalVotes();
      });
    }
  }

  downvote() {
    if (this.props.authUser) {
      client.updateItem(`/downvote/${this.props.subredditPost.id}`, null, () => {
        this.setTotalVotes();
      });
    }
  }

  setTotalVotes(votes) {
    client.getOneItem(`/post/${this.props.subredditPost.id}`, data =>
      this.setState({
        totalVotes: data.votes
      })
    );
  }

  render() {
    const timestamp = moment(this.props.subredditPost.createdAt).format(
      'ddd, h:mmA'
    );

    return (
      <div className="twelve wide column">
        <img
          className="thumbnail"
          src={this.props.subredditPost.image}
          alt=""
        />
        <Link
          onClick={() => this.setDetails()}
          to={`/postDetails/${this.props.subredditPost.id}`}
          className="ui large header"
        >
          {this.props.subredditPost.title}
        </Link>
        <div className="meta">
          submitted {timestamp} by <a>{this.props.subredditPost.username}</a>
        </div>
        <ul className="ui big horizontal list voters">
          <li className="item">
            <a onClick={() => this.upvote()}>
              <i className="arrow up icon" />
              upvote
            </a>
          </li>
          <li className="item">{this.state.totalVotes}</li>
          <li className="item">
            <a onClick={() => this.downvote()}>
              <i className="arrow down icon" />
              downvote
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gPost: state.gPost, authUser: state.authUser };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditPostEntry);
