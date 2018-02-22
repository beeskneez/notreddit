import React, { Component } from 'react';

class PostDetails extends Component {
  render() {
    return (
      <div className="twelve wide column">
        <img className="thumbnail" src={this.props.post.thumbnail} alt="" />
        <a className="ui large header" href="">
          {this.props.post.title}
        </a>
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

export default PostDetails;
