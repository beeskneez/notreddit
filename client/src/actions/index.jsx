import axios from 'axios';

export function updatePosts(posts) {
  return {
    type: "REFRESH_FEED",
    payload: posts
  }
}

export function createPost(post) {
  return {
    type: "ADD_POST",
    payload: post
  }
}
