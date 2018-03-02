import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost } from './../actions/index.jsx';

import Nav from './ui/nav.jsx';
import Login from './user/login.jsx';
import Signup from './user/signup.jsx';
import PostList from './posts/postList.jsx';
import SubredditForm from './subreddits/subredditForm.jsx';
import SubredditPage from './subreddits/subredditPage.jsx';
import PostForm from './posts/postForm.jsx';
import PostDetails from './posts/postDetails.jsx';

import Account from './user/account.jsx';
import Search from './user/search.jsx';
import History from './user/tabs/history.jsx';
import Subscriptions from './user/tabs/subscriptions.jsx';

const routes = [
  { path: '/', component: PostList },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/subredditForm', component: SubredditForm },
  { path: '/subreddit', component: SubredditPage },
  { path: '/postForm', component: PostForm },
  { path: '/postDetails', component: PostDetails },
  { path: '/account', component: Account },
  { path: '/search', component: Search }
];

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route key={index} path={route.path} component={route.component} />
          );
        })}
      </Switch>
    </div>
  </BrowserRouter>
);

function mapStateToProps(state) {
  return {
    gPost: state.gPost
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
