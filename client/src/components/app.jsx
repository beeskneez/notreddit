import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PostList from './postList.jsx';
import Nav from './nav.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';
import PostForm from './postForm.jsx';

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
