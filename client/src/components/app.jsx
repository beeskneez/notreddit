import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PostList from './posts/postList.jsx';
import Nav from './ui/nav.jsx';
import Login from './user/login.jsx';
import Signup from './user/signup.jsx';
import PostForm from './posts/postForm.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/postForm" component={PostForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
