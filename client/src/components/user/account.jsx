import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import {
  storeUserPosts,
  getUserSubscriptionList
} from './../../actions/index.jsx';

import { client } from './../../client';
import { ACCOUNT_ROUTES } from './helpers';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      subredditSubscriptions: ''
    };
  }

  componentDidMount() {
    this.getUserSubscriptions();
  }

  getUserSubscriptions() {
    client.getOneItem(`/user/${this.props.authUser}`, data =>
      this.props.getUserSubscriptionList(data.subredditSubscriptions)
    );
  }

  handleClick(index) {
    this.setState({
      selectedIndex: index
    });
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
                    component={route.component}
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
    userPosts: state.userPosts,
    user: state.user,
    userSubscriptionList: state.userSubscriptionList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { storeUserPosts, getUserSubscriptionList },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
