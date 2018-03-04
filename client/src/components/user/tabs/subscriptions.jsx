import React, { Component } from 'react';

export default class Subscriptions extends Component {
  constructor(props) {
    super(props);
    this.subscriptions = this.props.location.state.subredditSubscriptions;
  }

  render() {
    return (
      <div className="ui segment">
        <h2 className="ui header">subscriptions</h2>
        {this.subscriptions ? (
          this.subscriptions.split(', ').map((subscription, index) => {
            return (
              <h2 key={index} className="ui large blue header">
                /r/{subscription}
              </h2>
            );
          })
        ) : (
          <h2 className="ui large blue header">no subscriptions</h2>
        )}
      </div>
    );
  }
}
