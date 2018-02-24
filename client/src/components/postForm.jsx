import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { bindActionCreators } from "redux";
import { createPost, updatePosts } from "../actions/index.jsx";
import { Link, Redirect } from "react-router-dom";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  addNewPost() {
    axios
      .post("/post", { post: this.state })
      .then(res => {
        console.log(this.props);
        this.props.createPost(res.data);
        axios
          .get("/posts")
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
  }

  render() {
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="ui huge form">
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
// }

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createPost: createPost, updatePosts: updatePosts },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
