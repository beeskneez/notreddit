import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import {
  selectSubredditPage,
  storeUserSubscriptionList
} from './../../actions/index.jsx';
import { client } from './../../client';
import { ACCOUNT_ROUTES } from './helpers';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      userPosts: [],
      userSubscriptionList: ''
    };
    this.handleSubredditClick = this.handleSubredditClick.bind(this);
  }

  componentDidMount() {
    this.getUserPosts();
    this.getUserSubscriptions();
  }

  getUserPosts() {
    const queryStr = `/posts/user?key=username&value=${this.props.user}&postType=0`;
    client.getCertainItems(queryStr, data =>
      this.setState({ userPosts: data })
    );
  }

  getUserSubscriptions() {
    client.getOneItem(`/user/${this.props.authUser}`, data => {
      const subs = data.subredditSubscriptions.split(', ').filter(Boolean);
      this.props.storeUserSubscriptionList(subs);
      this.setState({ userSubscriptionList: subs });
    });
  }

  handleClick(index) {
    this.setState({
      selectedIndex: index
    });
  }

  handleSubredditClick(subreddit) {
    this.props.selectSubredditPage(subreddit);
    this.props.history.push(`/subreddit/${subreddit}`);
  }

  render() {
    return (
      <div className="page account ">
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui vertical fluid tabular menu">
              <div className="ui header">{this.props.user}</div>
              <hr />
              {ACCOUNT_ROUTES.map((route, index) => {
                return (
                  <Link
                    key={index}
                    to={route.path}
                    onClick={() => this.handleClick(index)}
                    className={
                      this.state.selectedIndex === index
                        ? 'active blue item'
                        : 'item'
                    }
                  >
                    {route.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="twelve wide stretched column">
            <Switch>
              {ACCOUNT_ROUTES.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    render={() => (
                      <route.component
                        onSubredditClick={this.handleSubredditClick}
                        userSubscriptionList={this.state.userSubscriptionList}
                        userPosts={this.state.userPosts}
                      />
                    )}
                  />
                );
              })}
              <Redirect from="/account" to="/account/main" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { selectSubredditPage, storeUserSubscriptionList },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
