import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Search extends Component {
  search(e) {
    const query = document.getElementById('query').value;
    axios
      .post('/search', { search: query })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // hide inner on search and replace with postlist

  // put request to server with query and update
  render() {
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="ui huge form">
              <h2>Search</h2>
              <div className="two fields">
                <div className="field">
                  <label>Search post titles:</label>
                  <input id="query" placeholder="Your search here" type="text" />
                </div>
              </div>
              <div onClick={() => this.search()} className="ui submit button">
                Search
              </div>
              <div>
                <br />
                <small>
                  Back to notreddit? <Link to="/">Main feed</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    subreddits: state.subreddits,
  };
}

export default connect(mapStateToProps)(Search);
