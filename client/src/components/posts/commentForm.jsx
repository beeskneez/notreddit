import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { getPost, createPost, updateComments, createComment } from './../../actions/index.jsx';
import { Link } from 'react-router-dom';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.addNewComment = this.addNewComment.bind(this);
  }

  addNewComment() {
    if (this.props.authUser) {
      this.state.user_email = this.props.authUser;
      this.state.parentId = this.props.gPost.id;
      this.state.username = this.props.user;
      axios
        .post('/post', { post: this.state })
        .then((res) => {
          this.props.createComment(res.data);
          axios
            .get(`/comments/${this.state.parentId}`)
            .then((res) => {
              console.log(res.data);
              this.props.updateComments(res.data);
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.log('not logged in');
    }
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div class="ui form">
        <div class="field">
          <label>Comment</label>
          <textarea name="body" rows="2" onChange={e => this.onChange(e)} />
        </div>
        <div className="field">
          {this.props.authUser ? (
            <Link
              className="ui submit blue button"
              to={`/postDetails/${this.props.gPost.id}`}
              onClick={() => this.addNewComment()}
            >
              {' '}
              Submit{' '}
            </Link>
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPost,
      createPost,
      updateComments,
      createComment,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
