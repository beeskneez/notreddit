import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { client } from './../../../client';
import { getPost } from './../../../actions/index.jsx';

class NewListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: props.post.votes
    };
  }

  goToDetails(post) {
    this.props.getPost(post);
    this.props.history.push(`/postDetails/${post.id}`);
  }

  upvote() {
    const votes = this.state.votes + 1;
    client.updateItem(`/post/${this.props.post.id}`, { votes }, data =>
      this.setState({ votes: data.votes })
    );
  }

  downvote() {
    const votes = this.state.votes - 1;
    client.updateItem(`/post/${this.props.post.id}`, { votes }, data =>
      this.setState({ votes: data.votes })
    );
  }

  render() {
    const { image, username, subreddit, title, createdAt } = this.props.post;
    return (
      <div className="twelve wide column">
        <img className="thumbnail" src={image} alt="" />
        <a
          onClick={() => this.goToDetails(this.props.post)}
          className="ui large header"
        >
          {title}
        </a>
        <div className="meta">
          submitted {moment(createdAt).format('ddd, h:mmA')} ago by
          <a>{username}</a> to
          <a onClick={() => this.props.onSubredditClick(subreddit)}>
            /{subreddit}
          </a>
        </div>
        <ul className="ui big horizontal list voters">
          <li className="item">
            <a onClick={() => this.upvote()}>
              <i className="arrow up icon" />
              upvote
            </a>
          </li>
          <li className="item">{this.state.votes}</li>
          <li className="item">
            <a onClick={() => this.downvote()}>
              <i className="arrow down icon" />
              downvote
            </a>
          </li>
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
  )(NewListEntry)
);
