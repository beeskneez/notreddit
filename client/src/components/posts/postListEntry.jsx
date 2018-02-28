import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import axios from 'axios';

import { getPost, updateAuthUser } from './../../actions/index.jsx';

class PostListEntry extends Component {
  constructor() {
    super();
    this.state = {
      upvotes: 0,
      downvotes: 0,
    };
    this.goToDetails = this.goToDetails.bind(this);
    this.goToSubreddit = this.goToSubreddit.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      upvotes: this.props.post.upvoteCache,
      downvotes: this.props.post.downvoteCache,
    });
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
    axios
      .put(`/upvote/${this.props.post.id}`)
      .then((res) => {
        this.setState({
          upvotes: res.data.upvoteCache,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  downvote() {
    axios
      .put(`/downvote/${this.props.post.id}`)
      .then((res) => {
        this.setState({
          downvotes: res.data.downvoteCache,
        });
      })
      .catch((err) => {
        console.error(err);
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
            <a onClick={() => (this.props.authUser ? this.upvote() : null)}>
              <i className="arrow up icon" />
              upvote
            </a>
          </li>
          <li className="item">{this.state.upvotes - this.state.downvotes}</li>
          <li className="item">
            <a onClick={() => (this.props.authUser ? this.downvote() : null)}>
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
