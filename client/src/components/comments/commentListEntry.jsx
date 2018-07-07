import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import {
  getComment,
  getPost,
  updateAuthUser,
  updateComments
} from './../../actions/index.jsx';
import CommentForm from './commentForm.jsx';
import { client } from './../../client';

class CommentListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalVotes:
        this.props.comment.upvoteCache - this.props.comment.downvoteCache,
      showReply: false,
      children: []
    };
    this.getData = this.getData.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentWillMount() {
    client.getOneItem(
      `/comments?key=id_parent&value=${this.props.comment.id}`,
      data =>
        this.setState({
          children: data
        })
    );
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      showReply: !this.state.showReply
    });
    this.props.getComment(this.props.comment);
  }

  hideForm() {
    this.setState({
      showReply: !this.state.showReply
    });
  }

  getData(data) {
    this.setState({
      children: data
    });
  }

  upvote() {
    if (this.props.authUser) {
      const votes = this.props.comment.votes + 1;
      client.updateItem(`/post/${this.props.comment.id}`, { votes }, data => {
        this.props.comment.votes++;
        this.setState({ votes: data.votes });
      });
    }
  }

  downvote() {
    if (this.props.authUser) {
      const votes = this.props.comment.votes - 1;
      client.updateItem(`/post/${this.props.comment.id}`, { votes }, data => {
        this.props.comment.votes--;
        this.setState({ votes: data.votes });
      });
    }
  }

  setTotalVotes(response) {
    this.setState({
      totalVotes: response.data.upvoteCache - response.data.downvoteCache
    });
  }

  deleteComment() {
    if (this.props.user === this.props.comment.username) {
      client.deleteItem(`/comment/${this.props.comment.id}`, () =>
        client.getOneItem(
          `/comments?key=id_parent&value=${this.props.comment.id_parent}`,
          data => {
            this.props.updateComments(data);
            this.props.getComment(null);
          }
        )
      );
    }
  }

  render() {
    const timestamp = moment(this.props.comment.createdAt).format('ddd, h:mmA');
    return (
      <div className="ui threaded comments">
        <div className="ui comment">
          <div className="content">
            <a className="author">{this.props.comment.username}</a>
            <div className="metadata">
              <span className="date">submitted {timestamp}</span>
            </div>
            <div className="text">{this.props.comment.body}</div>
            <div className="actions">
              <div>
                <a className="reply" onClick={e => this.onClick(e)} href="#">
                  Reply
                </a>
                {this.state.showReply && (
                  <CommentForm
                    sendData={this.getData}
                    hideForm={() => this.hideForm()}
                  />
                )}
                <a
                  className="delete comment"
                  onClick={() => this.deleteComment()}
                >
                  Delete
                </a>
              </div>
            </div>
            <ul className="ui small horizontal list voters">
              <li className="item">
                <a onClick={() => this.upvote()}>
                  <i className="arrow up icon" />
                  upvote
                </a>
              </li>
              <li className="item">{this.props.comment.votes}</li>
              <li className="item">
                <a onClick={() => this.downvote()}>
                  <i className="arrow down icon" />
                  downvote
                </a>
              </li>
            </ul>
            <div>
              {' '}
              {this.state.children.length > 0 &&
                this.state.children.map((child, index) => (
                  <CommentContainer key={index} comment={child} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gPost: state.gPost,
    authUser: state.authUser,
    gComment: state.gComment,
    comments: state.updateComments,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPost,
      updateAuthUser,
      getComment,
      updateComments
    },
    dispatch
  );
}

const CommentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListEntry);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListEntry);
