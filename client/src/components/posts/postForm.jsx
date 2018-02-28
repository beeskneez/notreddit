import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { createPost, updatePosts } from './../../actions/index.jsx';
import { Link } from 'react-router-dom';
import SubredditList from '../subreddits/subredditList.jsx';

class PostForm extends Component {
<<<<<<< HEAD
=======
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
  }

<<<<<<< HEAD
  componentDidMount() {
    console.log(this.props.user);
  }

>>>>>>> Saving stuff
  addNewPost() {
=======
>>>>>>> Saving stuff
<<<<<<< HEAD
=======
  componentDidMount() {
    console.log(this.props.authUser);
  }

>>>>>>> Saving stuff
  addNewPost() {
    if (this.props.authUser) {
      this.state.user_email = this.props.authUser;
      this.state.subreddit = this.props.selectedSubreddit;
      this.state.username = this.props.user;
      axios
        .post('/post', { post: this.state })
        .then((res) => {
          this.props.createPost(res.data);
          axios
            .get('/posts')
            .then((res) => {
              console.log(res.data);
              this.props.updatePosts(res.data);
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
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="ui big form">
              <h2>Create New Post</h2>
              <div className="field">
                <label>title</label>
                <input
                  name="title"
                  placeholder="enter post title"
                  type="text"
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="field">
                <label>body</label>
                <textarea
                  name="body"
                  placeholder="enter post body"
                  type="text"
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="field">
                <label>image URL</label>
                <input
                  name="image"
                  placeholder="enter image URL"
                  type="text"
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="field">
                <label>subreddit</label>
                <SubredditList />
              </div>
              <div className="field">
                {this.props.authUser ? (
                  <Link className="ui submit button" onClick={() => this.addNewPost()} to="/">
                    {' '}
                    Submit{' '}
                  </Link>
                ) : (
                  'Must be logged in to submit!'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post,
    authUser: state.authUser,
<<<<<<< HEAD
<<<<<<< HEAD
    selectedSubreddit: state.selectedSubreddit,
<<<<<<< HEAD
    user: state.user,
=======
    // user: state.user,
=======
=======
>>>>>>> [feat] Adding comments to post details page
>>>>>>> Accepting changes from master
<<<<<<< HEAD
>>>>>>> Accepting changes from master
=======
=======
>>>>>>> Saving stuff
>>>>>>> Saving stuff
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost, updatePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
