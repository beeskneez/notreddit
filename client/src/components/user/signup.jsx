import React, { Component } from 'react';
import { auth } from 'firebase';

export default class Signup extends Component {
  constructor() {
    super();
    this.signup = this.signup.bind(this);
  }

  componentDidMount() {}

  signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(e => console.error(e.message));
  }

  render() {
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="ui huge form">
              <h2>Signup</h2>
              <div className="two fields">
                <div className="field">
                  <label>email</label>
                  <input id="email" placeholder="enter new email" type="text" />
                </div>
                <div className="field">
                  <label>password</label>
                  <input id="password" placeholder="enter new password" type="text" />
                </div>
              </div>
              <div onClick={() => this.signup()} className="ui submit button">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
