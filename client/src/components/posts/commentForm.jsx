import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';
// import { bindActionCreators } from 'redux';
// import { createPost, updatePosts } from './../../actions/index.jsx';
// import { Link, Redirect } from 'react-router-dom';

class CommentForm extends Component {
  // addNewComment() {

  // }

  render() {
    return (
      <div class="ui form">
        <div class="field">
          <label>Comment</label>
          <textarea rows="2" />
        </div>
        <div class="ui submit button">Submit</div>
      </div>
    );
  }
}

export default CommentForm;
