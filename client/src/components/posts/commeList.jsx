import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
// import { updatePosts } from './../../actions/index.jsx';
// import PostListEntry from './postListEntry.jsx';

class CommentList extends Component {
  componentWillMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User logged in: ', user.email);
      } else {
        console.log('User not logged in');
      }
    });
  }

  componentDidMount() {
    axios
      .get('/posts')
      .then((res) => {
        this.props.updatePosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    if (!this.props.posts.length) {
      return <h4>Loading posts...</h4>;
    }

    return (
      <ul>
        {this.props.posts.map((post, index) => <PostListEntry post={post} key={index} />).reverse()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
