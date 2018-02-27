import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
// import { auth } from 'firebase';
import { getSubreddits } from './../../actions/index.jsx';

class SubredditList extends Component {
  componentDidMount() {
    axios
      .get('/subreddits')
      .then((res) => {
        this.props.getSubreddits(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <select className="ui dropdown">
        <option value="" disabled selected hidden>
          Select Subreddit
        </option>
        {this.props.subreddits.map((subreddit, index) => (
          <option key={index} value={subreddit.name}>
            {subreddit.name}
          </option>
        ))}
      </select>
    );
  }
}

function mapStateToProps(state) {
  return {
    subreddits: state.subreddits,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSubreddits }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditList);
