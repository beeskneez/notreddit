import axios from 'axios';

export function updatePosts(posts) {
  return {
    type: 'REFRESH_FEED',
    payload: posts,
  };
}

export function createPost(post) {
  return {
    type: 'ADD_POST',
    payload: post,
  };
}

export function getPost(post) {
  return {
    type: 'GET_POST',
    payload: post,
  };
}

export function updateAuthUser(user) {
  return {
    type: 'AUTH_USER',
    payload: user,
  };
}
