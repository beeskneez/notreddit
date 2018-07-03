import React from 'react';
import Main from './tabs/main.jsx';
import New from './tabs/new.jsx';
import History from './tabs/history.jsx';
import Subscriptions from './tabs/subscriptions.jsx';

const emailValidateMessage = (email, validate) => {
  return email === '' ? (
    ''
  ) : validate(email) ? (
    <div className="ui pointing green basic label">Looks good!</div>
  ) : (
    <div className="ui pointing red basic label">Valid email required</div>
  );
};

const passwordValidateMessage = password => {
  return password.length > 5 ? (
    ''
  ) : (
    <div className="ui pointing red basic label">
      Password must be at least 6 characters
    </div>
  );
};

const usernameValidateMessage = username => {
  return username ? (
    <div className="ui pointing green basic label">Great!</div>
  ) : (
    <div className="ui pointing red basic label">Username required</div>
  );
};


const ACCOUNT_ROUTES = [
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

export {
  emailValidateMessage,
  passwordValidateMessage,
  usernameValidateMessage,
  ACCOUNT_ROUTES
};
