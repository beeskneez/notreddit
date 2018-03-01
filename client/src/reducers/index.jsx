import { combineReducers } from 'redux';
import {
  ReducerPosts,
  ReducerCreatePost,
<<<<<<< HEAD
  ReducerGetPost
=======
  ReducerGetPost,
  ReducerComments,
<<<<<<< HEAD
>>>>>>> [feat] Comments rendering on page using map func. Refactoring each into comment component
=======
  ReducerCreateComment,
>>>>>>> [feat] New comment generating immediately on page
} from './postReducer.jsx';
import { ReducerUpdateAuthUser } from './authUserReducer.jsx';
import { ReducerSignIn } from './signInReducer.jsx';
import {
  ReducerCreateSubreddit,
  ReducerGetSubreddits,
  ReducerSelectedSubreddit,
<<<<<<< HEAD
  ReducerGetPostsFromSubreddit
=======
>>>>>>> [feat] Comments rendering on page using map func. Refactoring each into comment component
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
<<<<<<< HEAD
  postsFromSubreddit: ReducerGetPostsFromSubreddit,
  user: ReducerUser
=======
  user: ReducerUser,
  comments: ReducerComments,
<<<<<<< HEAD
>>>>>>> [feat] Comments rendering on page using map func. Refactoring each into comment component
=======
  comment: ReducerCreateComment,
>>>>>>> [feat] New comment generating immediately on page
});

export default allReducers;
