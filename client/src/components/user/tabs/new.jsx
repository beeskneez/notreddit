import React, { Component } from 'react';
import NewListEntry from './newListEntry.jsx';
import { client } from './../../../client';
export default class New extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPostsFromSubscriptions();
  }

  getPostsFromSubscriptions() {
    let subscriptions = this.props.userSubscriptionList.split(', ');
    if (subscriptions[0]) {
      subscriptions.forEach(sub => {
        client.getCertainItems(
          `/posts/subreddit?key=subreddit&value=${sub}`,
          data =>
            data.forEach(post =>
              this.setState({ posts: this.state.posts.concat([post]) })
            )
        );
      });
    }
  }

  render() {
    const sortedPosts = this.state.posts.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return (
      <div className="ui segment">
        <h2 className="ui header">newest posts in your subscriptions</h2>
        {sortedPosts.map((post, index) => {
          return (
            <NewListEntry
              key={index}
              post={post}
              history={this.props.history}
              onSubredditClick={this.props.onSubredditClick}
            />
          );
        })}
      </div>
    );
  }
}
