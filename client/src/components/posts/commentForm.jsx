import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { createComment, getPost, createPost } from './../../actions/index.jsx';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.addNewComment = this.addNewComment.bind(this);
  }
  componentDidMount() {
    // this.props.getPost(this.props.post);
    console.log('PROPS', this.props.gPost.id);
    console.log('STATE', this.state);
  }
  addNewComment() {
    // console.log(this);
    // check if post is a type 1 or type 0?

    if (this.props.authUser) {
      this.state.user_email = this.props.authUser;
      this.state.postId = this.props.gPost.id;
      this.state.username = this.props.user;
      // this.state.post = this.props.selectedPost;
      axios
        .post('/comment', { post: this.state })
        // .then((res) => {
        //   this.props.createC(res.data);
        //   axios
        //     .get('/comments')
        //     .then((res) => {
        //       console.log(res.data);
        //       this.props.updatePosts(res.data);
        //     })
        //     .catch((err) => {
        //       console.error(err);
        //     });
        // })
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
        <div class="ui submit button" onClick={this.addNewComment}>
          Submit
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
    // selectedSubreddit: state.selectedSubreddit,
    // user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createComment, getPost, createPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
