import { combineReducers } from 'redux';
import {
  ReducerPosts,
  ReducerCreatePost,
  ReducerGetPost,
  ReducerUpdateAuthUser,
} from './postReducer.jsx';

const allReducers = combineReducers({
  posts: ReducerPosts,
  post: ReducerCreatePost,
  gPost: ReducerGetPost,
  authUser: ReducerUpdateAuthUser,
});

export default allReducers;
