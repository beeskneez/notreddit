import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'firebase';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getPost, updatePosts } from './../../actions/index.jsx';
import moment from 'moment';
import CommentForm from './commentForm.jsx';
import CommentList from './commentList.jsx';

class PostDetails extends Component {
  constructor() {
    super();
    this.state = {
      showDelete: false,
    };
  }
  componentDidMount() {
    console.log(this.props);
    if (this.props.user === this.props.gPost.username) {
      this.setState({
        showDelete: true,
      });
    }
  }

  onClick() {
    axios
      .delete(`/post/${this.props.gPost.id}`)
      .then((res) => {
        axios
          .get('/posts')
          .then((res2) => {
            this.props.updatePosts(res2.data);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const timestamp = moment(this.props.gPost.createdAt).format('ddd, h:mmA');
    return (
      <div className="twelve wide column inner">
        <a className="ui large header" href="">
          {this.props.gPost.title}
        </a>
        <br /> <br />
        <div>{this.props.gPost.body}</div>
        <br />
        <img src={this.props.gPost.image} alt="" />
        <div className="meta">
          submitted {timestamp} <a>{this.props.gPost.username}</a> to{' '}
          <a>{`/${this.props.gPost.subreddit}`}</a>
        </div>
        {this.state.showDelete && (
          <Link onClick={() => this.onClick()} to="/">
            Delete Post
          </Link>
        )}
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
        <CommentList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gPost: state.gPost,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost, updatePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
