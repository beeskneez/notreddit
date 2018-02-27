import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAuthUser } from './../../actions/index.jsx';

class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  // componentDidMount() {}

  login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.updateAuthUser(user.email);
        this.props.history.push('/');
      })
      .catch(e => console.error(e.message));
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

function mapStateToProps(state) {
  return {
    authUser: state.authUser,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAuthUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
