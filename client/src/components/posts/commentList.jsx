import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import { getPost, updatePosts } from './../../actions/index.jsx';
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
    // console.log('whaddup');
    const parentId = this.props.gPost.id;
    axios.get(`/posts/${parentId}`).then((res) => {
      console.log('made it');
    });
    // .catch((err) => {
    //   console.error(err);
    // });
    console.log('HEY', this.props.gPost.id);
  }

  render() {
    return (
      <div>
        Sup
        {/* {this.props.posts.map((post, index) => <PostListEntry post={post} key={index} />).reverse()} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    gPost: state.gPost,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost, updatePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
