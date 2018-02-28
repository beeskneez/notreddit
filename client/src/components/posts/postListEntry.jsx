import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import axios from 'axios';

import { getPost, updateAuthUser } from './../../actions/index.jsx';

class PostListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalVotes: this.props.post.upvoteCache - this.props.post.downvoteCache,
    };
  }

  componentDidMount() {
<<<<<<< HEAD
=======
    console.log('LIST ENTRY', this.props);
    this.setState({
      upvotes: this.props.post.upvoteCache,
      downvotes: this.props.post.downvoteCache,
    });
>>>>>>> [feat] Comment input being passed to server
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.updateAuthUser(user.email);
        document.getElementById('logout').classList.remove('hide');
      } else {
        document.getElementById('logout').classList.add('hide');
      }
    });
  }

  goToDetails() {
    this.props.getPost(this.props.post);
  }

  goToSubreddit(e) {
    console.log('yasss', e.target.value);
  }

  upvote() {
    if (this.props.authUser) {
      axios
        .put(`/upvote/${this.props.post.id}`)
        .then((res) => {
          axios
            .get(`/post/${this.props.post.id}`)
            .then(res2 => this.setTotalVotes(res2))
            .catch(err => console.error(err));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  downvote() {
    if (this.props.authUser) {
      axios
        .put(`/downvote/${this.props.post.id}`)
        .then((res) => {
          axios
            .get(`/post/${this.props.post.id}`)
            .then(res2 => this.setTotalVotes(res2))
            .catch(err => console.error(err));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  setTotalVotes(response) {
    this.setState({
      totalVotes: response.data.upvoteCache - response.data.downvoteCache,
    });
  }

  render() {
    return (
      <div className="twelve wide column">
        <img className="thumbnail" src={this.props.post.image} alt="" />
        <Link
          className="ui large header"
          to={`/postDetails/${this.props.post.id}`}
          onClick={() => this.goToDetails()}
        >
          {this.props.post.title}
        </Link>
        <div className="meta">
          submitted 3 hours ago by <a>{this.props.post.username}</a> to{' '}
          <a onClick={e => this.goToSubreddit()}>{`/${this.props.post.subreddit}`}</a>
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
  return bindActionCreators({ getPost, updateAuthUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListEntry);
