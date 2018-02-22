import React from 'react';
import {loadPosts} from '../actions/index.jsx';
import PostList from './postList.jsx';

const App = () => {
  loadPosts();

  return (
    <div>
      <h1>List</h1>
      <PostList />
    </div>
  )
}

export default App;