import React, { Component } from 'react';
import NewListEntry from './newListEntry.jsx';
import { client } from './../../../client';
require('babel-core/register');
require('babel-polyfill');
export default class New extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getSubscriptionPosts();
  }

  async getSubscriptionPosts() {
    let subs = this.props.userSubscriptionList;
    // mapped array of Promises then resolve all at once to retain context
    if (subs[0]) {
      const result = await Promise.all(
        subs.map(async sub => await this.mappedPosts(sub))
      );
      this.setState({
        posts: result.reduce((prev, curr) => prev.concat(curr))
      });
    }
  }

  mappedPosts(sub) {
    return new Promise(resolve => {
      client.getCertainItems(
        `/posts?key=subreddit&value=${sub}&postType=0`,
        data => {
          const mapped = data.map(post => post);
          resolve(mapped);
        }
      );
    });
  }

  render() {
    const sortedPosts = this.state.posts.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return (
      <div className="ui segment">
        <h2 className="ui header">newest posts in your subscriptions</h2>
        {sortedPosts.map((post, index) => (
          <NewListEntry
            key={index}
            post={post}
            history={this.props.history}
            onSubredditClick={this.props.onSubredditClick}
          />
        ))}
      </div>
    );
  }
}
