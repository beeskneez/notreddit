import React, { Component } from 'react';
import { auth } from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { signedIn } from '../../actions/index.jsx';

class Signup extends Component {
  constructor() {
    super();
    this.signup = this.signup.bind(this);
  }

  componentWillMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.signedIn(true);
        console.log('User logged in, ', user.email);
      } else {
        this.props.signedIn(false);
        console.log('User not logged in');
      }
    });
  }

  signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
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
              <Link onClick={this.signup} className="ui submit button" to="/">
                Submit
              </Link>
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
    authUser: state.authUser,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signedIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
