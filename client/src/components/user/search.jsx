import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostListEntry from '../posts/postListEntry.jsx';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  search(e) {
    const query = document.getElementById('query').value;
    axios
      .post('/search', { search: query })
      .then((res) => {
        this.setState({ results: res.data });
        console.log(this.state.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // hide inner on search and replace with postlist

  // put request to server with query and update
  render() {
    const results = this.state.results.length ? (
      <div>
        <h5>Results:</h5>
        <div className="ui grid">
          <div classname="wide column" />
          <div className="twelve wide column">
            <ul>
              {this.state.results.map((post, index) => <PostListEntry post={post} key={index} />)}
            </ul>
          </div>
          <div class="wide column" />
        </div>
      </div>
    ) : (
      <div />
    );
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="ui huge form">
              <div className="two fields">
                <div className="field">
                  <label>Search post titles:</label>
                  <input id="query" placeholder="Your search here" type="text" />
                  <a onClick={() => this.search()} className="ui submit button">
                    Search
                  </a>
                </div>
              </div>
              <div />
              <div />
              {results}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    subreddits: state.subreddits,
  };
}

export default connect(mapStateToProps)(Search);
