import React, { Component } from 'react';
import axios from 'axios';
import PostListEntry from '../posts/postListEntry.jsx';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  search() {
    const query = document.getElementById('query').value;
    axios
      .post('/search', { search: query })
      .then((res) => {
        this.setState({ results: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const results = this.state.results.length ? (
      <div>
        <h5>Results:</h5>
        <div className="ui grid">
          <div className="wide column" />
          <div className="twelve wide column">
            <ul>
              {this.state.results.map((post, index) => <PostListEntry post={post} key={index} />)}
            </ul>
          </div>
          <div className="wide column" />
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

export default Search;
