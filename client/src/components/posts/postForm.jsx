import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { createPost, updatePosts } from './../../actions/index.jsx';
import { Link, Redirect } from 'react-router-dom';
import SubredditList from '../subreddits/subredditList.jsx';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
  }

  addNewPost() {
<<<<<<< HEAD
    if (this.props.authUser) {
      this.state.user_email = this.props.authUser;
      axios
        .post('/post', { post: this.state })
        .then(res => {
          this.props.createPost(res.data);
          axios
            .get('/posts')
            .then(res => {
              this.props.updatePosts(res.data);
            })
            .catch(err => {
              console.error(err);
            });
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      console.log('not logged in');
    }
=======
    axios
      .post('/post', { post: this.state })
      .then((res) => {
        this.props.createPost(res.data);
        axios
          .get('/posts')
          .then((res) => {
            this.props.updatePosts(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
>>>>>>> (feat) working on store passing props
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
<<<<<<< HEAD
    return <div className="outer">
=======
    console.log('our props', this.props.authUser);
    return (
      <div className="outer">
>>>>>>> (feat) working on store passing props
        <div className="middle">
          <div className="inner">
            <div className="ui huge form">
              <h2>Create New Post</h2>
              <div className="field">
                <label>title</label>
                <input name="title" placeholder="enter post title" type="text" onChange={e => this.onChange(e)} />
              </div>
              <div className="field">
                <label>body</label>
                <textarea name="body" placeholder="enter post body" type="text" onChange={e => this.onChange(e)} />
              </div>
              <div className="field">
                <label>image URL</label>
                <input name="image" placeholder="enter image URL" type="text" onChange={e => this.onChange(e)} />
              </div>
            </div>
            <div>
              <SubredditList onChange={e => this.onChange(e)} />
            </div>
            {this.props.authUser 
              ? <Link className="ui submit button" onClick={this.addNewPost} to="/"> Submit </Link> : 'Must be logged in to submit!'}
          </div>
        </div>
      </div>;
  }
}
// }

function mapStateToProps(state) {
  return {
    post: state.post,
<<<<<<< HEAD
    authUser: state.authUser
=======
    authUser: state.authUser,
>>>>>>> (feat) working on store passing props
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost, updatePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
