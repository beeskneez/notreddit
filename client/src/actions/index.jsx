import axios from 'axios';

export function updatePosts(posts) {
  return {
    type: "REFRESH_FEED",
    payload: posts
  }
}
