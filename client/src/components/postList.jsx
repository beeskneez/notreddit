import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../actions/index.jsx';

class PostList extends Component {
  
componentDidMount() {
  // this.props.loadPosts('hh')
  // axios.get
}

  render() {
    if (!this.props.posts.length) {
      return (<h4>Loading posts...</h4>)
    }
    
    return(
      <li>{this.props.posts[0].username}</li>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostList);