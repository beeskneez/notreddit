import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { bindActionCreators } from "redux";
import { updatePosts } from "../actions/index.jsx";
import PostDetails from "./postDetails.jsx";

class PostList extends Component {
  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        this.props.updatePosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    if (!this.props.posts.length) {
      return <h4>Loading posts...</h4>;
    }

    return (
      <ul>
        {this.props.posts
          .map((post, index) => {
            return <PostDetails post={post} key={index} />;
          })
          .reverse()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
