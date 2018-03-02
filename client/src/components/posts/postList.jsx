import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import { updatePosts } from './../../actions/index.jsx';
import PostListEntry from './postListEntry.jsx';

class PostList extends Component {
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

  renderTop() {
    // create action to sort state.posts by a.upvoteCache - b.upvoteCache
    console.log('in da func');
    this.props.updatePosts(this.props.posts.sort((a, b) => a.upvoteCache - b.upvoteCache));
  }

  render() {
    if (!this.props.posts.length) {
      return <h4>Loading posts...</h4>;
    }

    return (
      <div className="ui grid">
        <div className="wide column" />
        <div className="twelve wide column">
          <button onClick={() => this.renderTop()}>Top</button>
          <ul>
            {this.props.posts
              .map((post, index) => <PostListEntry post={post} key={index} />)
              .reverse()}
          </ul>
        </div>
        <div className="wide column" />
      </div>
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
