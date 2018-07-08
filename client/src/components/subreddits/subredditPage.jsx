import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { storeUserSubscriptionList } from './../../actions/index.jsx';
import SubredditPostEntry from './subredditPostEntry.jsx';
import { client } from './../../client';

class SubredditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: this.props.selectedSubredditPage,
      subredditDescription: '',
      subredditPosts: [],
      subredditSubscriptions: '',
      userId: null
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
    client.getCertainItems(
      `/posts/subreddit?key=subreddit&value=${subredditName}&postType=0`,
      data => {
        this.setState({
          subredditPosts: data
        });
        this.getUserSubscriptions();
      }
    );
  }

  // get user subscriptions
  getUserSubscriptions() {
    client.getCertainItems(`/user/${this.props.authUser}`, data => {
      this.setState({
        subredditSubscriptions: data.subredditSubscriptions
          .split(', ')
          .filter(Boolean),
        userId: data.id
      });
    });
  }

  subscribe() {
    this.props.userSubscriptionList.push(this.state.subreddit);
    client.updateItem(
      `/user`,
      {
        userId: this.state.userId,
        subredditSubscriptions: this.props.userSubscriptionList.join(', ')
      },
      data => {
        console.log(data);
        const subs = data.subredditSubscriptions.split(', ');
        this.setState({
          subredditSubscriptions: subs
        });
        this.props.storeUserSubscriptionList(subs);
      }
    );
  }

  unsubscribe() {
    const filtered = this.props.userSubscriptionList.filter(
      item => item !== this.state.subreddit
    );
    client.updateItem(
      `/user`,
      {
        userId: this.state.userId,
        subredditSubscriptions: filtered.join(', ')
      },
      data => {
        const subs = data.subredditSubscriptions.split(', ');
        this.setState({
          subredditSubscriptions: subs
        });
        this.props.storeUserSubscriptionList(subs);
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
              ? this.state.subredditSubscriptions.length
              : 0} &nbsp;
            subscriptions
          </h2>
          {this.state.subredditSubscriptions.includes(subredditName) ? (
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
  return bindActionCreators({ storeUserSubscriptionList }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditPage);
