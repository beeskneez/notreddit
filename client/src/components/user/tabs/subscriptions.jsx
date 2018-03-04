import React, { Component } from 'react';
import { connect } from 'react-redux';

class Subscriptions extends Component {
  render() {
    return (
      <div className="ui segment">
        <h2 className="ui header">subscriptions</h2>
        {this.props.userSubscriptionList ? (
          this.props.userSubscriptionList
            .split(', ')
            .map((subscription, index) => {
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

const mapStateToProps = state => {
  return {
    userSubscriptionList: state.userSubscriptionList
  };
};

export default connect(mapStateToProps)(Subscriptions);
