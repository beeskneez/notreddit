import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { auth } from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAuthUser, updateUser } from './../../actions/index.jsx';

class Login extends Component {
  login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.updateAuthUser(user.email);
        axios
          .post('/login', { email: user.email })
          .then(res => {
            this.props.updateUser(res.data.username);
            this.getUserPosts();
            this.props.history.push('/');
          })
          .catch(err => console.log('err in login axios', err));
      })
      .catch(e => console.error(e.message));
  }

  getUserPosts() {
    // axios
    //   .get('/posts', { params: { user: this.props.authUser } })
    //   .then(res => {
    //     this.props.getUserPosts(res.data);
    //     console.log('!!!!!!!', this.props);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
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
                  <input
                    id="email"
                    placeholder="enter login email"
                    type="text"
                  />
                </div>
                <div className="field">
                  <label>password</label>
                  <input
                    id="password"
                    placeholder="enter login password"
                    type="password"
                  />
                </div>
              </div>
              <div className="field">
                <div
                  onClick={() => this.login()}
                  className="ui submit blue button"
                >
                  Submit
                </div>
              </div>
              <small>
                don't have an account? <Link to="/signup">Sign up</Link>
              </small>
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
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAuthUser, updateUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
