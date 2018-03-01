import React, { Component } from 'react';
import axios from 'axios';
import SubredditPostEntry from './subredditPostEntry.jsx';

class subredditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subredditPosts: []
    };
  }

  componentDidMount() {
    const subredditName = this.props.location.pathname.replace(/^\/\w+\//, '');
    axios
      .get('/posts', { params: { subredditName: subredditName } })
      .then(res => {
        this.setState({
          subredditPosts: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="ui grid">
        <div className="wide column" />
        <div className="twelve wide column" style={{ border: 'red solid 2px' }}>
          <h2 className="ui large header">
            {this.props.location.pathname.replace(/^\/\w+\//, '')}
          </h2>
          <ul>
            {this.state.subredditPosts.map((subredditPost, index) => {
              return (
                <SubredditPostEntry key={index} subredditPost={subredditPost} />
              );
            })}
          </ul>
        </div>
        <div className="wide column" />
      </div>
    );
  }
}

export default subredditPage;
