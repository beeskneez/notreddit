import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let totalVotes = 0;
    this.props.userPosts.forEach(post => {
      totalVotes += post.votes;
    });

    return (
      <div className="ui segment">
        <h2 className="ui header">
          your total votes: <a>{totalVotes}</a>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser,
    userPosts: state.userPosts
  };
};

export default connect(mapStateToProps, null)(Main);
