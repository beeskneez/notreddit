import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import {
  storeUserPosts,
  getUserSubscriptionList
} from './../../actions/index.jsx';

import Main from './tabs/main.jsx';
import New from './tabs/new.jsx';
import History from './tabs/history.jsx';
import Subscriptions from './tabs/subscriptions.jsx';

const routes = [
  {
    name: 'main',
    path: '/account/main',
    component: Main
  },
  {
    name: 'new posts',
    path: '/account/new',
    component: New
  },
  {
    name: 'history',
    path: '/account/history',
    component: History
  },
  {
    name: 'subscriptions',
    path: '/account/subscriptions',
    component: Subscriptions
  }
];

class Account extends Component {
  constructor() {
    super();
    this.state = {
      userPosts: [],
      selectedIndex: 0,
      subredditSubscriptions: ''
    };
    this.getUserPosts = this.getUserPosts.bind(this);
  }

  componentDidMount() {
    this.getUserPosts();
    this.getUserSubscriptions();
  }

  getUserPosts() {
    axios
      .get('/posts', { params: { user: this.props.authUser } })
      .then(res => {
        this.setState({
          userPosts: res.data
        });
        this.props.storeUserPosts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  getUserSubscriptions() {
    axios
      .get(`/user/${this.props.authUser}`)
      .then(res => {
        this.setState({
          subredditSubscriptions: res.data.subredditSubscriptions
        });
        this.props.getUserSubscriptionList(res.data.subredditSubscriptions);
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleClick(index) {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    return (
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            <div className="ui header">{this.props.user}</div>
            <hr />
            {routes.map((route, index) => {
              return (
                <Link
                  key={index}
                  to={{ pathname: route.path, state: this.state }}
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
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
            <Redirect from="/account" to="/account/main" />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.authUser,
    userPosts: state.userPosts,
    user: state.user,
    userSubscriptionList: state.userSubscriptionList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { storeUserPosts, getUserSubscriptionList },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
