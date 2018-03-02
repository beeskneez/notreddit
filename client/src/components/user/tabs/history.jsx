import React, { Component } from 'react';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.posts = this.props.location.state.userPosts;
  }

  componentDidMount() {
    console.log(this.posts);
    // console.log(this.props);
  }

  render() {
    return (
      <div className="ui segment">
        {this.posts.map((post, index) => {
          return (
            <div key={index} className="twelve wide column">
              <img className="thumbnail" src={post.image} alt="" />
              <a className="ui large header">{post.title}</a>
              <div className="meta">
                submitted 3 hours ago by <a>{post.username}</a> to
              </div>
              <ul className="ui big horizontal list voters">
                <li className="item">
                  <a>
                    <i className="arrow up icon" />
                    upvote
                  </a>
                </li>
                <li className="item">
                  {post.upvoteCache - post.downvoteCache}
                </li>
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
