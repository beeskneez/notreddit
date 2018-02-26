// libs
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// firebase
import * as firebase from 'firebase';
import FirebaseConfig from './../../environment/config';
// components
import App from './components/app.jsx';
import allReducers from './reducers/index.jsx';

firebase.initializeApp(FirebaseConfig);
const store = createStore(allReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
