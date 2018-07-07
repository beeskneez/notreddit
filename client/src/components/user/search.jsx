import React, { Component, Fragment } from 'react';
import PostListEntry from '../posts/postListEntry.jsx';
import { client } from './../../client';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      value: ''
    };
  }

  search() {
    client.createItem('/search', { search: this.state.value }, data =>
      this.setState({ results: data })
    );
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const RESULTS = this.state.results.length ? (
      <Fragment>
        <h5>Results:</h5>
        <ul>
          {this.state.results.map((post, index) => (
            <PostListEntry post={post} key={index} />
          ))}
        </ul>
      </Fragment>
    ) : (
      <div />
    );
    return (
      <div className="page not-reddit-form">
        <div className="ui big form">
          <div className="two fields">
            <div className="field">
              <div className="ui action input">
                <input
                  value={this.state.value}
                  onChange={e => this.handleChange(e)}
                  placeholder="Search all or part of a title..."
                  type="text"
                />
                <a
                  onClick={() => this.search()}
                  className="ui submit button primary"
                >
                  Search
                </a>
              </div>
            </div>
          </div>
          {RESULTS}
        </div>
      </div>
    );
  }
}

export default Search;
