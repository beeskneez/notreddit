import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import { getPost } from './../../../actions/index.jsx';

class New extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    this.getPostsFromSubscriptions();
  }

  getPostsFromSubscriptions() {
    let subscriptions = this.props.userSubscriptionList.split(', ');
    subscriptions.forEach(sub => {
      axios
        .get('/posts', { params: { subredditName: sub } })
        .then(res =>
          res.data.forEach(post =>
            this.setState({ posts: this.state.posts.concat([post]) })
          )
        )
        .catch(err => console.error(err));
    });
  }

  goToDetails(post) {
    this.props.getPost(post);
    this.props.history.push(`/postDetails/${post.id}`);
  }

  render() {
    const sortedPosts = this.state.posts.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return (
      <div className="ui segment">
        <h2 className="ui header">newest posts in your subscriptions</h2>
        {sortedPosts.map((post, index) => {
          return (
            <div key={index} className="twelve wide column">
              <img className="thumbnail" src={post.image} alt="" />
              <a
                onClick={() => this.goToDetails(post)}
                className="ui large header"
              >
                {post.title}
              </a>
              <div className="meta">
                submitted {moment(post.createdAt).format('ddd, h:mmA')} ago by{' '}
                <a>{post.username}</a> to{' '}
                <Link to={`/subreddit/${post.subreddit}`}>
                  /{post.subreddit}
                </Link>
              </div>
              <ul className="ui big horizontal list voters">
                <li className="item">
                  <a>
                    <i className="arrow up icon" />
                    upvote
                  </a>
                </li>
                <li className="item">{post.votes}</li>
                <li className="item">
                  <a>
                    <i className="arrow down icon" />
                    downvote
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userSubscriptionList: state.userSubscriptionList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(New);
