import { combineReducers } from 'redux';
import {
  ReducerPosts,
  ReducerCreatePost,
  ReducerGetPost,
  ReducerComments,
  ReducerCreateComment,
  ReducerGetComment,
  ReducerChildren,
} from './postReducer.jsx';
import { ReducerUpdateAuthUser } from './authUserReducer.jsx';
import { ReducerSignIn } from './signInReducer.jsx';
import {
  ReducerCreateSubreddit,
  ReducerGetSubreddits,
  ReducerSelectedSubreddit,
  ReducerGetPostsFromSubreddit,
} from './subredditReducer.jsx';
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
  postsFromSubreddit: ReducerGetPostsFromSubreddit,
  user: ReducerUser,
  comments: ReducerComments,
  comment: ReducerCreateComment,
  gComment: ReducerGetComment,
  children: ReducerChildren,
});

export default allReducers;
