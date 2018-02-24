import { combineReducers } from 'redux';
import { ReducerPosts, ReducerCreatePost } from './postReducer.jsx';


const allReducers = combineReducers({
  posts: ReducerPosts,
  post: ReducerCreatePost
});

export default allReducers;