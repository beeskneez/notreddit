import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import { getPost, updateComments } from './../../actions/index.jsx';
// import PostListEntry from './postListEntry.jsx';

class CommentList extends Component {
  // componentWillMount() {
  //   auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log('User logged in: ', user.email);
  //     } else {
  //       console.log('User not logged in');
  //     }
  //   });
  // }

  componentDidMount() {
    const parentId = this.props.gPost.id;
    axios
      .get(`/comments/${parentId}`)
      .then((res) => {
        this.props.updateComments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) => <div key={index}>{comment.body}</div>)}
        {/* {this.props.comments.map((comment, index) => <PostListEntry post={post} key={index} />).reverse()} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    gPost: state.gPost,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost, updateComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
