import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Search extends Component {
  render() {
    return <h1>Search</h1>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    subreddits: state.subreddits,
  };
}

export default connect(mapStateToProps)(Search);
