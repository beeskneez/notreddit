import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from 'firebase';

export default class Nav extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="ui menu">
        <div className="ui container">
          <a href="#" className="header item">
            <img
              className="logo"
              src="https://vignette.wikia.nocookie.net/atlas-reactor/images/1/10/Reddit.png/revision/latest?cb=20170201145049"
            />{' '}
            NotReddit
          </a>
          <span className="empty-space" />
          <Link className="item" to="/">
            Main
          </Link>
          <Link className="item" to="/postForm">
            Create New Post
          </Link>
          <Link className="item" to="/login">
            Login
          </Link>
          <Link className="item" to="/signup">
            Signup
          </Link>
          <Link className="item" to="/login">
            Logout
          </Link>
        </div>
      </div>
    );
  }
}
