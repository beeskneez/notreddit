import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { updatePosts } from './../../actions/index.jsx';
import PostListEntry from './postListEntry.jsx';

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get('/posts')
      .then(res => {
        this.setState({ posts: res.data });
        this.props.updatePosts(res.data.reverse());
      })
      .catch(err => {
        console.error(err);
      });
  }

  renderTop() {
    const top = this.props.posts;
    top.sort((a, b) => b.votes - a.votes);
    this.setState({ posts: top });
  }

  renderBot() {
    const bot = this.props.posts;
    bot.sort((a, b) => a.votes - b.votes);
    this.setState({ posts: bot });
  }

  renderLatest() {
    const late = this.props.posts;
    late.sort((a, b) => b.id - a.id);
    this.setState({ posts: late });
  }

  render() {
    if (!this.props.posts.length) {
      return <h4>Loading posts...</h4>;
    }

    return (
      <div className="page post-list">
        <div className="post-group">
          <ul>
            {this.state.posts.map((post, index) => (
              <PostListEntry post={post} key={index} />
            ))}
          </ul>
        </div>
        <div className="button-group">
          <div className="ui vertical buttons">
            <button
              className="ui button primary"
              onClick={() => this.renderTop()}
            >
              Top
            </button>
            <button
              className="ui button primary"
              onClick={() => this.renderBot()}
            >
              Worst
            </button>
            <button
              className="ui button primary"
              onClick={() => this.renderLatest()}
            >
              Latest
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePosts }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
