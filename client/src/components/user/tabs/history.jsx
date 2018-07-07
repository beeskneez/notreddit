import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { getPost } from './../../../actions/index.jsx';

class History extends Component {
  goToDetails(post) {
    this.props.getPost(post);
    this.props.history.push(`/postDetails/${post.id}`);
  }

  render() {
    const HISTORY_LIST = this.props.userPosts.map((post, index) => (
      <HistoryListEntry
        key={index}
        post={post}
        onSubredditClick={this.props.onSubredditClick}
        goToDetails={this.goToDetails.bind(this)}
      />
    ));

    return <div className="ui segment">{HISTORY_LIST.reverse()}</div>;
  }
}

class HistoryListEntry extends Component {
  render() {
    const {
      image,
      title,
      createdAt,
      username,
      subreddit,
      votes
    } = this.props.post;

    return (
      <div className="twelve wide column">
        <img className="thumbnail" src={image} alt="" />
        <a onClick={() => this.props.goToDetails(this.props.post)}
          className="ui large header">
          {title}
        </a>
        <div className="meta">
          submitted {moment(createdAt).format('ddd, h:mmA')} ago by
          <a>{username}</a> to
          <a onClick={() => this.props.onSubredditClick(subreddit)}
            to={`/subreddit/${subreddit}`}>
            /{subreddit}
          </a>
        </div>
        <ul className="ui big horizontal list voters">
          <li className="item">
            <a>upvotes</a>
          </li>
          <li className="item">{votes}</li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPost }, dispatch);
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(History)
);
