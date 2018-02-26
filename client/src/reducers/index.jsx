import { combineReducers } from 'redux';
import { ReducerPosts, ReducerCreatePost, ReducerGetPost } from './postReducer.jsx';

const allReducers = combineReducers({
  posts: ReducerPosts,
  post: ReducerCreatePost,
  gPost: ReducerGetPost,
});

export default allReducers;
