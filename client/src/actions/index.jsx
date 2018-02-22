import axios from 'axios';
export function loadPosts() {
  axios.get("/posts")
    .then((response) => {updatePosts(response.data)})
    .catch(err => {console.log(err)})
}

export function updatePosts(posts) {
  console.log('logging from updateposts call', posts);
  return {
    type: "REFRESH_FEED",
    payload: posts
  }
}
