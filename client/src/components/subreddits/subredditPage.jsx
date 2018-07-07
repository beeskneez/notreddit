import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserSubscriptionList } from './../../actions/index.jsx';
import SubredditPostEntry from './subredditPostEntry.jsx';
import { client } from './../../client';

class SubredditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: this.props.selectedSubredditPage,
      subredditDescription: '',
      subredditPosts: [],
      subredditSubscriptions: ''
    };
  }

  componentDidMount() {
    this.getDescription();
    this.getPosts();
  }

  // get description
  getDescription() {
    client.getOneItem(`/subreddit/${this.state.subreddit}`, data =>
      this.setState({ description: data.description })
    );
  }

  // get posts
  getPosts() {
    const subredditName = this.state.subreddit;
    client.getCertainItems(`/posts/subreddit?key=subreddit&value=${subredditName}`, data => {
      this.setState({
        subredditPosts: data
      });
      this.getUserSubscriptions();
    });
  }

  // get user subscriptions
  getUserSubscriptions() {
    client.getCertainItems(`/user/${this.props.authUser}`, data =>
      this.setState({
        subredditSubscriptions: data.subredditSubscriptions,
        userId: data.id
      })
    );
  }

  subscribe() {
    client.updateItem(
      `/user/addSub/${this.state.userId}/${this.state.subreddit}`,
      null,
      data => {
        this.setState({
          subredditSubscriptions: data.subredditSubscriptions
        });
        this.props.getUserSubscriptionList(data.subredditSubscriptions);
      }
    );
  }

  unsubscribe() {
    client.updateItem(
      `/user/remSub/${this.state.userId}/${this.state.subreddit}`,
      null,
      data => {
        this.setState({
          subredditSubscriptions: data.subredditSubscriptions
        });
        this.props.getUserSubscriptionList(data.subredditSubscriptions);
      }
    );
  }

  render() {
    const subredditName = this.state.subreddit;

    return (
      <div className="page columns-9-1">
        <div className="group-1">
          <h2 className="ui large blue header">
            /r/{subredditName}
            <div className="sub header">{this.state.description}</div>
          </h2>
          <ul>
            {this.state.subredditPosts.map((subredditPost, index) => (
              <SubredditPostEntry key={index} subredditPost={subredditPost} />
            ))}
          </ul>
        </div>
        <div className="group-2">
          <h2 className="ui large header">
            {this.state.subredditSubscriptions
              ? this.state.subredditSubscriptions.split(', ').length
              : 0}{' '}
            subscriptions
          </h2>
          {this.state.subredditSubscriptions
            .split(', ')
            .includes(subredditName) ? (
            <button
              onClick={() => this.unsubscribe()}
              className="ui red button"
            >
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
  return {
    authUser: state.authUser,
    userSubscriptionList: state.userSubscriptionList,
    selectedSubreddit: state.selectedSubreddit,
    selectedSubredditPage: state.selectedSubredditPage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserSubscriptionList }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditPage);
