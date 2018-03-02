import React, { Component } from 'react';

export default class History extends Component {
  componentDidMount() {
    this.posts = this.props.location.state.userPosts;
    console.log(this.posts);
    // console.log(this.props);
  }
  render() {
    return <div className="ui segment">History</div>;
  }
}
