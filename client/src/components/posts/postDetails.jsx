import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import { getPost } from './../../actions/index.jsx';
import CommentForm from './commentForm.jsx';

class PostDetails extends Component {
  render() {
    return (
      <div className="twelve wide column inner">
        <a className="ui large header" href="">
          {this.props.gPost.title}
        </a>
        <br />
        <img src={this.props.gPost.image} alt="" />
        <div className="meta">
          submitted 3 hours ago by <a>{this.props.gPost.username}</a> to <a>/mildyinteresting</a>
        </div>
        <ul className="ui big horizontal list voters">
          <li className="item">
            <a href="">
              <i className="arrow up icon" />
              upvote
            </a>
          </li>
          <li className="item">
            <a href="">
              <i className="arrow down icon" />
              downvote
            </a>
          </li>
        </ul>
        <CommentForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gPost: state.gPost,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
