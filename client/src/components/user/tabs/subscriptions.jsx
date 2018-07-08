import React, { Component } from 'react';

export default class Subscriptions extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    if (!this.props.userSubscriptionList) {
      return <h2 className="ui large red header">no subscriptions</h2>;
    }

    return (
      <div className="ui segment">
        <h2 className="ui header">subscriptions</h2>
        {this.props.userSubscriptionList.map((subscription, index) => {
          return (
            <a
              key={index}
              onClick={() => this.props.onSubredditClick(subscription)}
            >
              <h2 className="ui large blue header">/r/{subscription}</h2>
            </a>
          );
        })}
      </div>
    );
  }
}
