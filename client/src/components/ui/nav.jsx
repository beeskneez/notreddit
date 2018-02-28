import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { auth } from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAuthUser, updateUser } from './../../actions/index.jsx';

class Nav extends Component {
  constructor() {
    super();
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.updateAuthUser(null);
    this.props.updateUser(null);
    auth().signOut();
  }

  componentWillMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.updateAuthUser(user.email);
        axios
          .post('/login', { email: user.email })
          .then((res) => {
            this.props.updateUser(res.data.username);
          })
          .catch(err => console.log('err in login axios', err));
        document.getElementById('logout').classList.remove('hide');
      } else {
        document.getElementById('logout').classList.add('hide');
      }
    });
  }

  render() {
    return <div className="ui menu">
        <div className="ui container">
          <a href="#" className="header item">
            <img className="logo" src="https://vignette.wikia.nocookie.net/atlas-reactor/images/1/10/Reddit.png/revision/latest?cb=20170201145049" /> NotReddit
          </a>
          <a className="item">{this.props.user || 'not logged in'}</a>
          <span className="empty-space" />
          <Link className="item" to="/">
            Main
          </Link>
          <Link className="item" to="/subredditForm">
            Create New Subreddit
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
          {this.props.authUser ? <Link className="item" to="/account">
              Account
            </Link> : null}
          <Link id="logout" className="item hide" to="/login" onClick={this.signOut}>
            Logout
          </Link>
        </div>
      </div>;
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.authUser,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAuthUser, updateUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
