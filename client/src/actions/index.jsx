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

<<<<<<< HEAD
export function updateAuthUser(user) {
  return {
    type: 'AUTH_USER',
    payload: user,
  };
}

export function signedIn(boolean) {
  return {
    type: 'UPDATE_SIGNEDIN',
    payload: boolean,
=======
export function createSubreddit(subreddit) {
  return {
    type: 'ADD_SUBREDDIT',
    payload: subreddit,
>>>>>>> (feat) Create subreddit component. Starting to work on models
  };
}
