import { combineReducers } from 'redux';
import { ReducerPosts, ReducerCreatePost, ReducerGetPost } from './postReducer.jsx';
import { ReducerUpdateAuthUser } from './authUserReducer.jsx';
import { ReducerSignIn } from './signInReducer.jsx';
import { ReducerCreateSubreddit, ReducerGetSubreddits, ReducerSelectedSubreddit } from './subredditReducer.jsx';
import { ReducerUser } from './userReducer.jsx';

const allReducers = combineReducers({
  posts: ReducerPosts,
  post: ReducerCreatePost,
  gPost: ReducerGetPost,
  authUser: ReducerUpdateAuthUser,
  active: ReducerSignIn,
  subreddit: ReducerCreateSubreddit,
  subreddits: ReducerGetSubreddits,
  selectedSubreddit: ReducerSelectedSubreddit,
  user: ReducerUser,
});

export default allReducers;
