import React, { Component } from 'react';
import axios from 'axios';
import { auth } from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { signedIn, updateUser } from '../../actions/index.jsx';

class Signup extends Component {
  componentWillMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.signedIn(true);
      } else {
        this.props.signedIn(false);
      }
    });
  }

  signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = { username, email };
        axios
          .post('/signup', user)
          .then((res) => {
            this.props.updateUser(res.data.username);
            console.log('success sign up', res);
            this.props.history.push('/');
          })
          .catch(err => console.log(err));
      })
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
                  <label>username</label>
                  <input id="username" placeholder="enter new username" type="text" />
                </div>
                <div className="field">
                  <label>email</label>
                  <input id="email" placeholder="enter new email" type="text" />
                </div>
                <div className="field">
                  <label>password</label>
                  <input id="password" placeholder="enter new password" type="text" />
                </div>
              </div>
              <a onClick={() => this.signup()} className="ui submit button">
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active: state.active,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signedIn, updateUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
