import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dropdownSelectSubreddit } from './../../actions/index.jsx';
import { getSubreddits } from './../../actions/index.jsx';
import { client } from './../../client.js';

class SubredditList extends Component {
  componentDidMount() {
    client.getAllItems('subreddits', data => this.props.getSubreddits(data));
  }

  handleChange(e) {
    this.props.dropdownSelectSubreddit(e.target.value);
  }

  render() {
    return (
      <select onChange={e => this.handleChange(e)} className="ui dropdown">
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
    selectedSubreddit: state.selectedSubreddit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { dropdownSelectSubreddit, getSubreddits },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditList);
