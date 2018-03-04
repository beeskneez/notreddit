import { combineReducers } from 'redux';
import {
  ReducerPosts,
  ReducerCreatePost,
  ReducerGetPost,
  ReducerComments,
  ReducerCreateComment,
  ReducerGetComment,
  ReducerGetChild,
  ReducerStoreUserPosts,
} from './postReducer.jsx';
import { ReducerUpdateAuthUser } from './authUserReducer.jsx';
import { ReducerSignIn } from './signInReducer.jsx';
import {
  ReducerCreateSubreddit,
  ReducerGetSubreddits,
  ReducerSelectedSubreddit,
  ReducerGetPostsFromSubreddit,
} from './subredditReducer.jsx';
import { ReducerUser, ReducerUserSubscriptionList } from './userReducer.jsx';

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
  child: ReducerGetChild,
  userPosts: ReducerStoreUserPosts,
  userSubscriptionList: ReducerUserSubscriptionList,
});

export default allReducers;
