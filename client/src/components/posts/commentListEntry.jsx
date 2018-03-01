import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import axios from 'axios';

import { getPost, updateAuthUser } from './../../actions/index.jsx';

class CommentListEntry extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   totalVotes: this.props.post.upvoteCache - this.props.post.downvoteCache,
    // };
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

  // upvote() {
  //   if (this.props.authUser) {
  //     axios
  //       .put(`/upvote/${this.props.post.id}`)
  //       .then((res) => {
  //         axios
  //           .get(`/post/${this.props.post.id}`)
  //           .then(res2 => this.setTotalVotes(res2))
  //           .catch(err => console.error(err));
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // }

  // downvote() {
  //   if (this.props.authUser) {
  //     axios
  //       .put(`/downvote/${this.props.post.id}`)
  //       .then((res) => {
  //         axios
  //           .get(`/post/${this.props.post.id}`)
  //           .then(res2 => this.setTotalVotes(res2))
  //           .catch(err => console.error(err));
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // }

  // setTotalVotes(response) {
  //   this.setState({
  //     totalVotes: response.data.upvoteCache - response.data.downvoteCache,
  //   });
  // }

  render() {
    return (
      <div className="ui threaded comments">
        <div className="comment">
          <div className="content">
            <a className="author">{this.props.comment.username}</a>
            <div className="metadata">
              <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">{this.props.comment.body}</div>
            <div className="actions">
              <a className="reply">Reply</a>
              <a className="hideit">Hide</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authUser: state.authUser };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAuthUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListEntry);
