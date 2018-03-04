import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class History extends Component {
  render() {
    return (
      <div className="ui segment">
        {this.props.userPosts
          .map((post, index) => {
            return (
              <div key={index} className="twelve wide column">
                <img className="thumbnail" src={post.image} alt="" />
                <a className="ui large header">{post.title}</a>
                <div className="meta">
                  submitted {moment(post.createdAt).format('ddd, h:mmA')} ago by{' '}
                  <a>{post.username}</a> to <a>/{post.subreddit}</a>
                </div>
                <ul className="ui big horizontal list voters">
                  <li className="item">
                    <a>upvotes</a>
                  </li>
                  <li className="item">{post.votes}</li>
                </ul>
              </div>
            );
          })
          .reverse()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.userPosts
  };
};

export default connect(mapStateToProps)(History);
