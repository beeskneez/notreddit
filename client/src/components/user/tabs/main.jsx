import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    let totalVotes = 0;
    this.props.userPosts.forEach(post => {
      totalVotes += post.votes;
    });

    return (
      <div className="ui segment">
        <h2 className="ui header">
          your total votes: <a>{totalVotes}</a>
        </h2>
      </div>
    );
  }
}
