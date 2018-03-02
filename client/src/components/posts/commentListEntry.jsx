import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import axios from 'axios';
import { getComment, getPost, updateAuthUser, updateChildren } from './../../actions/index.jsx';
import CommentForm from './commentForm.jsx';
import CommentList from './commentList.jsx';

class CommentListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalVotes: this.props.comment.upvoteCache - this.props.comment.downvoteCache,
      showReply: false,
      children: [],
    };
  }

  onClick() {
    // e.preventDefault();
    this.setState({
      showReply: !this.state.showReply,
    });
    // console.log(this.props);
    this.props.getComment(this.props.comment);
    // console.log('comment list entry', this.props.comment);
  }

  // componentWillMount() {
  //   axios
  //     .get(`/comments/${this.props.comment.id}`)
  //     .then((res) => {
  //       this.props.updateChildren(res.data);
  //       // console.log(this.props.children);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  componentDidMount() {
    // console.log(this.props)
    // console.log(this.state);
    // console.log('list entry', this.props);
    // console.log(this.state);
    // auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.props.updateAuthUser(user.email);
    //     document.getElementById('logout').classList.remove('hide');
    //   } else {
    //     document.getElementById('logout').classList.add('hide');
    //   }
    // });
    axios
      .get(`/comments/${this.props.comment.id}`)
      .then((res) => {
        this.setState({
          children: res.data,
        });
        // this.props.updateChildren(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  upvote() {
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
    // const comment = this.props.comment;
    // console.log('Comment List Entry:', this.props);
    return (
      // <div className="comments">
      <div className="ui threaded comments">
        <div className="comments" />
        <div className="ui comment">
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
          <div>
            {' '}
            {this.state.children.length > 0 &&
              this.state.children.map(child => <CommentListEntry key={child.id} comment={child} />)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    children: state.children,
    gPost: state.gPost,
    authUser: state.authUser,
    gComment: getComment,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateChildren,
      getPost,
      updateAuthUser,
      getComment,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListEntry);
