import React, { Component } from 'react';

export default class Nav extends Component {
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
          <div className="header item borderless">
            <h1 className="ui header">NotReddit</h1>
          </div>
        </div>
      </div>
    );
  }
}
