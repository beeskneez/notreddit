import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
// import { auth } from 'firebase';
import { getSubreddits } from './../../actions/index.jsx';

class SubredditList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.createSelectItems();
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
      <select>
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
