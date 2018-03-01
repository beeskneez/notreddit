import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import axios from 'axios';
import { getComment, getPost, updateAuthUser } from './../../actions/index.jsx';
import CommentForm from './commentForm.jsx';

class CommentListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalVotes: this.props.comment.upvoteCache - this.props.comment.downvoteCache,
      showReply: false,
    };
  }

  onClick() {
    // e.preventDefault();
    this.setState({
      showReply: !this.state.showReply,
    });
    // console.log(this.props);
    this.props.getComment(this.props.comment);
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.updateAuthUser(user.email);
        document.getElementById('logout').classList.remove('hide');
      } else {
        document.getElementById('logout').classList.add('hide');
      }
    });
  }

  upvote() {
    console.log(this.props.comment);
    if (this.props.authUser) {
      axios
        .put(`/upvote/${this.props.comment.id}`)
        .then((res) => {
          axios
            .get(`/post/${this.props.comment.id}`)
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
        .put(`/downvote/${this.props.comment.id}`)
        .then((res) => {
          axios
            .get(`/post/${this.props.comment.id}`)
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
      // <div className="comments">
      <div className="comment">
        <div className="content">
          <a className="author">{this.props.comment.username}</a>
          <div className="metadata">
            <span className="date">Today at TODO: update time</span>
          </div>
          <div className="text">{this.props.comment.body}</div>
          <div className="actions">
            <a className="reply" onClick={() => this.onClick()} href="#">
              Reply
            </a>
            {this.state.showReply && <CommentForm />}
            <a className="hideit">Hide</a>
            <a className="delete comment">Delete</a>
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
      </div>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return { gPost: state.gPost, authUser: state.authUser, gComment: getComment };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost, updateAuthUser, getComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListEntry);
