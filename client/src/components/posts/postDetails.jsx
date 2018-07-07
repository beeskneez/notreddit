import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getPost, updatePosts } from './../../actions/index.jsx';
import moment from 'moment';
import CommentForm from './../comments/commentForm.jsx';
import CommentList from './../comments/commentList.jsx';
import { client } from './../../client';

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelete: false,
      votes: this.props.gPost.votes
    };
  }

  componentDidMount() {
    if (this.props.user === this.props.gPost.username) {
      this.setState({
        showDelete: true
      });
    }
  }

  upvote() {
    let { id, votes } = this.props.gPost;
    votes += 1;
    client.updateItem(`/post/${id}`, { votes }, data => {
      this.props.getPost(data);
      this.setState({ votes: data.votes });
    });
  }

  downvote() {
    let { id, votes } = this.props.gPost;
    votes -= 1;
    client.updateItem(`/post/${id}`, { votes }, data => {
      this.props.getPost(data);
      this.setState({ votes: data.votes });
    });
  }

  onClick() {
    client.deleteItem(`/post/${this.props.gPost.id}`, () =>
      client.getAllItems('/posts', data => this.props.updatePosts(res2.data))
    );
  }

  render() {
    const {
      createdAt,
      title,
      body,
      image,
      username,
      subreddit,
      id,
      votes
    } = this.props.gPost;

    const timestamp = moment(createdAt).format('ddd, h:mmA');
    return (
      <div className="page post-details">
        <a className="ui large header" href="">
          {title}
        </a>
        <br /> <br />
        <div>{body}</div>
        <br />
        <img src={image} alt="" />
        <div className="meta">
          submitted {timestamp} by <a>{username}</a> to{' '}
          <Link to={`/subreddit/${subreddit}`}>{`/${subreddit}`}</Link>
        </div>
        {this.state.showDelete && (
          <Link onClick={() => this.onClick()} to="/">
            Delete Post
          </Link>
        )}
        <ul className="ui big horizontal list voters">
          <li className="item">
            <a onClick={() => this.upvote()}>
              <i className="arrow up icon" />
              upvote
            </a>
          </li>
          <li className="item">{this.state.votes}</li>
          <li className="item">
            <a
              onClick={() =>
                this.downvote()
              }
            >
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
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost, updatePosts }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
