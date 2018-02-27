import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { createSubreddit } from './../../actions/index.jsx';
import { Link, Redirect } from 'react-router-dom';

class SubredditForm extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
    // this.addNewPost = this.addNewPost.bind(this);
  }

  // onChange(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // addNewPost() {
  //   axios
  //     .post('/post', { post: this.state })
  //     .then((res) => {
  //       this.props.createPost(res.data);
  //       axios
  //         .get('/posts')
  //         .then((res) => {
  //           this.props.updatePosts(res.data);
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // onChange(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="ui huge form">
              <h2>Create New Subreddit</h2>
              <div className="field">
                <label>name</label>
                <input
                  name="name"
                  placeholder="enter subreddit name"
                  type="text"
                  // onChange={e => this.onChange(e)}
                />
              </div>
              <div className="field">
                <label>description</label>
                <textarea
                  name="description"
                  placeholder="enter subreddit description"
                  type="text"
                  // onChange={e => this.onChange(e)}
                />
              </div>
            </div>
            <Link className="ui submit button" onClick={this.addNewPost} to="/">
              Submit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    subreddit: state.subreddit,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createSubreddit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditForm);
