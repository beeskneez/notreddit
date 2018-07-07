import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getComment, getPost, updateComments } from './../../actions/index.jsx';
import CommentListEntry from './commentListEntry.jsx';
import { client } from './../../client';

class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const parentId = this.props.gPost.id;
    client.getOneItem(`/comments?key=id_parent&value=${parentId}`, data =>
      this.props.updateComments(data)
    );
  }

  render() {
    return (
      <div>
        <br />
        {this.props.comments
          .map((comment, index) => (
            <CommentListEntry comment={comment} key={index} />
          ))
          .reverse()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    gPost: state.gPost,
    user: state.user,
    gComment: state.gComment
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getComment, getPost, updateComments }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
