import React, { Component } from 'react';

export default class Subscriptions extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <div className="ui segment">Subscriptions</div>;
  }
}
