import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      userPosts: []
    };
    this.getUserPosts = this.getUserPosts.bind(this);
  }

  componentDidMount() {
    console.log(this.props.authUser);
    this.getUserPosts();
  }

  getUserPosts() {
    axios
      .get('/posts', { params: { user: this.props.authUser } })
      .then(res => {
        this.setState({
          userPosts: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="twelve wide column">
        <p className="ui large header">
          History
        </p>
        <ul>
          {this.state.userPosts
            .map((post, index) => {
              return (
                <li key={index}>
                  {' '}
                  <img className="thumbnail" src={post.image} alt="" />{' '}
                  {post.title}
                </li>
              );
            })
            .reverse()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authUser: state.authUser };
}

export default connect(mapStateToProps)(Account);
