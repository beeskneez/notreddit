import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost } from './../../actions/index.jsx';

class PostListEntry extends Component {
  constructor() {
    super();
    this.goToDetails = this.goToDetails.bind(this);
  }

  componentDidMount() {
    console.log('from post list entry->', this.props.post);
  }

  goToDetails() {
    this.props.getPost(this.props.post);
  }

  render() {
    return (
      <div className="twelve wide column">
        <img className="thumbnail" src={this.props.post.image} alt="" />
        <Link
          className="ui large header"
          to={`/postDetails/${this.props.post.id}`}
          onClick={() => this.goToDetails()}
        >
          {this.props.post.title}
        </Link>
        <div className="meta">
          submitted 3 hours ago by <a>{this.props.post.username}</a> to <a>/midlyinteresting</a>
        </div>
        <ul className="ui big horizontal list voters">
          <li className="item">
            <a href="">
              <i className="arrow up icon" />
              upvote
            </a>
          </li>
          <li className="item">{this.props.post.upvoteCache}</li>
          <li className="item">
            <a href="">
              <i className="arrow down icon" />
              downvote
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gPost: state.gPost };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListEntry);
// export default PostListEntry;
