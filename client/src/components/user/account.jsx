import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import History from './tabs/history.jsx';
import Subscriptions from './tabs/subscriptions.jsx';

const routes = [
  {
    name: 'main',
    path: '/account'
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
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  getUserSubscriptions() {
    axios
      .get(`/user/${this.props.authUser}`)
      .then(res => {
        this.setState({});
        console.log('!!!!', res.data);
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
            {routes.map((route, index) => {
              return (
                <Link
                  key={index}
                  to={{ pathname: route.path, state: this.state }}
                  onClick={() => this.handleClick(index)}
                  className={
                    this.state.selectedIndex === index ? 'active item' : 'item'
                  }
                >
                  {route.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="twelve wide stretched column">
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authUser: state.authUser };
}

export default connect(mapStateToProps)(Account);
