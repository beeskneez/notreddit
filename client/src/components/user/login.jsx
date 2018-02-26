import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from 'firebase';

export default class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(e => console.error(e.message));
    // auth.EmailAuthProvider();
  }

  render() {
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="ui huge form">
              <h2>Login</h2>
              <div className="two fields">
                <div className="field">
                  <label>email</label>
                  <input id="email" placeholder="enter login email" type="text" />
                </div>
                <div className="field">
                  <label>password</label>
                  <input id="password" placeholder="enter login password" type="text" />
                </div>
              </div>
              <div onClick={() => this.login()} className="ui submit button">
                Submit
              </div>
              <div>
                <small>
                  don't have an account? <Link to="/signup">Sign up</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
