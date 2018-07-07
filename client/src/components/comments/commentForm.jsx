import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getComment,
  updateComments,
  createComment
} from './../../actions/index.jsx';
import { client } from './../../client';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.addNewComment = this.addNewComment.bind(this);
  }

  addNewComment(e) {
    e.preventDefault();
    if (this.props.authUser) {
      this.state.user_email = this.props.authUser;
      this.state.parentId   = this.props.gPost.id;
      this.state.comment    = 0 || this.props.gComment;
      this.state.username   = this.props.user;

      client.createItem('/post', { post: this.state }, data => {
        this.props.createComment(data);
        if (!this.state.comment) {
          client.getOneItem(`/comments?key=id_parent&value=${this.props.gPost.id}`, data2 => {
            this.props.updateComments(data2);
          });
        } else {
          client.getOneItem(`/comments?key=id_parent&value=${this.props.gComment.id}`, data2 => {
            this.props.sendData(data2);
            this.props.hideForm();
            this.props.getComment(null);
          });
        }
      });
    } else {
      console.log('not logged in');
    }
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label>Comment</label>
          <textarea name="body" rows="2" onChange={e => this.onChange(e)} />
        </div>
        <div className="field">
          {this.props.authUser ? (
            <button
              className="ui submit blue button"
              onClick={e => this.addNewComment(e)}
            >
              Submit
            </button>
          ) : (
            <button className="ui disabled button">
              <i className="ban red icon" />must be logged in
            </button>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comment: state.comment,
    authUser: state.authUser,
    gPost: state.gPost,
    user: state.user,
    comments: state.comments,
    gComment: state.gComment
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateComments,
      createComment,
      getComment
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
