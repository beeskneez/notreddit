import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import SubredditPostEntry from './subredditPostEntry.jsx';

class SubredditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: this.props.location.pathname.replace(/^\/\w+\//, ''),
      subredditPosts: [],
      subredditSubscriptions: '',
    };
  }

  componentDidMount() {
    const subredditName = this.state.subreddit;

    axios
      .get('/posts', { params: { subredditName } })
      .then((res) => {
        this.setState({
          subredditPosts: res.data,
        });
        axios
          .get(`/user/${this.props.authUser}`)
          .then((res2) => {
            this.setState({
              subredditSubscriptions: res2.data.subredditSubscriptions,
              userId: res2.data.id,
            });
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  subscribe() {
    axios
      .put(`/user/addSub/${this.state.userId}/${this.state.subreddit}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          subredditSubscriptions: res.data.subredditSubscriptions,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  unsubscribe() {
    axios
      .put(`/user/remSub/${this.state.userId}/${this.state.subreddit}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          subredditSubscriptions: res.data.subredditSubscriptions,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const subredditName = this.props.location.pathname.replace(/^\/\w+\//, '');

    return (
      <div className="ui grid">
        <div className="two wide column" />
        <div className="eight wide column">
          <h2 className="ui large blue header">/r/{subredditName}</h2>
          <ul>
            {this.state.subredditPosts.map((subredditPost, index) => (
              <SubredditPostEntry key={index} subredditPost={subredditPost} />
            ))}
          </ul>
        </div>
        <div className="six wide column">
          <h2 className="ui large header">
            {this.state.subredditSubscriptions
              ? this.state.subredditSubscriptions.split(', ').length
              : 0}{' '}
            subscriptions
          </h2>
          {this.state.subredditSubscriptions.split(', ').includes(subredditName) ? (
            <button onClick={() => this.unsubscribe()} className="ui red button">
              unsubscribe from {subredditName}
            </button>
          ) : (
            <button onClick={() => this.subscribe()} className="ui blue button">
              subscribe to {subredditName}
            </button>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authUser: state.authUser };
}

export default connect(mapStateToProps)(SubredditPage);