import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { client } from './../../../client';
import { getPost } from './../../../actions/index.jsx';

class NewListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.post.votes
    };
  }

  goToDetails(post) {
    this.props.getPost(post);
    this.props.history.push(`/postDetails/${post.id}`);
  }

  upvote(id) {
    client.updateItem(`/upvote/${id}`, null, data => {
      this.renderVotes(id);
    });
  }

  downvote(id) {
    client.updateItem(`/downvote/${id}`, null, data => {
      this.renderVotes(id);
    });
  }

  renderVotes(id) {
    client.getOneItem(`/post/${id}`, data => {
      this.setState({ votes: data.votes });
    });
  }

  render() {
    return (
      <div className="twelve wide column">
        <img className="thumbnail" src={this.props.post.image} alt="" />
        <a
          onClick={() => this.goToDetails(this.props.post)}
          className="ui large header"
        >
          {this.props.post.title}
        </a>
        <div className="meta">
          submitted {moment(this.props.post.createdAt).format('ddd, h:mmA')} ago
          by <a>{this.props.post.username}</a> to{' '}
          <Link to={`/subreddit/${this.props.post.subreddit}`}>
            /{this.props.post.subreddit}
          </Link>
        </div>
        <ul className="ui big horizontal list voters">
          <li className="item">
            <a onClick={() => this.upvote(this.props.post.id)}>
              <i className="arrow up icon" />
              upvote
            </a>
          </li>
          <li className="item">{this.state.votes}</li>
          <li className="item">
            <a onClick={() => this.downvote(this.props.post.id)}>
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

export default connect(
  null,
  mapDispatchToProps
)(NewListEntry);
