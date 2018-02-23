import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="ui huge form">
              <h2>Login</h2>
              <div className="two fields">
                <div className="field">
                  <label>username</label>
                  <input placeholder="enter login username" type="text" />
                </div>
                <div className="field">
                  <label>password</label>
                  <input placeholder="enter login password" type="text" />
                </div>
              </div>
              <div className="ui submit button">Submit</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
