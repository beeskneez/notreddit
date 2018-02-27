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
import PostForm from './posts/postForm.jsx';
import PostDetails from './posts/postDetails.jsx';

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/subredditForm" component={SubredditForm} />
        <Route path="/postForm" component={PostForm} />
        <Route path={'/postDetails'} component={PostDetails} />
        <Route exact path="/" component={PostList} />
      </Switch>
    </div>
  </BrowserRouter>
);

function mapStateToProps(state) {
  return {
    gPost: state.gPost,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
