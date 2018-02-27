import { combineReducers } from 'redux';
<<<<<<< HEAD
import { ReducerPosts, ReducerCreatePost, ReducerGetPost } from './postReducer.jsx';
import { ReducerUpdateAuthUser } from './authUserReducer.jsx';
import { ReducerSignIn } from './signInReducer.jsx';
=======
import {
  ReducerPosts,
  ReducerCreatePost,
  ReducerGetPost,
  ReducerCreateSubreddit,
  ReducerGetSubreddits,
} from './postReducer.jsx';
>>>>>>> (feat) Create subreddit component. Starting to work on models

const allReducers = combineReducers({
  posts: ReducerPosts,
  post: ReducerCreatePost,
  gPost: ReducerGetPost,
<<<<<<< HEAD
  authUser: ReducerUpdateAuthUser,
  active: ReducerSignIn,
=======
  subreddit: ReducerCreateSubreddit,
<<<<<<< HEAD
>>>>>>> (feat) Create subreddit component. Starting to work on models
=======
  subreddits: ReducerGetSubreddits,
>>>>>>> (feat) Creat SubredditList dropdown component for users to pick Subreddit when creating a post
});

export default allReducers;
