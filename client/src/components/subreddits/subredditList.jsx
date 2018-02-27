import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class SubredditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  createSelectItems() {
    let items = [];
    axios.get('/subreddits').then((res) => {
      items = res.data.map(subreddit => subreddit);
      this.setState({
        list: items,
      });
    });
  }

  componentDidMount() {
    this.createSelectItems();
  }

  render() {
    return (
      <select>
        {this.state.list.map((subreddit, index) => (
          <option key={index} value={subreddit.name}>
            {subreddit.name}
          </option>
        ))}
      </select>
    );
  }
}

export default SubredditList;
