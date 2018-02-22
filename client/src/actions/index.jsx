import axios from 'axios';

export function updatePosts(posts) {
  console.log('logging from updateposts call', posts);
  return {
    type: "REFRESH_FEED",
    payload: posts
  }
}
