// libs
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// firebase
import * as firebase from 'firebase';
import { config } from '../../environment/config.js';
// components
import App from './components/app.jsx';
import allReducers from './reducers/index.jsx';

firebase.initializeApp(config);
const store = createStore(allReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
