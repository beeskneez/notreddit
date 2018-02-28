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

export function signedIn(boolean) {
  return {
    type: 'UPDATE_SIGNEDIN',
    payload: boolean,
  };
}

export function createSubreddit(subreddits) {
  return {
    type: 'ADD_SUBREDDITS',
    payload: subreddits,
  };
}

export function getSubreddits(subreddits) {
  return {
    type: 'GET_SUBREDDITS',
    payload: subreddits,
  };
}

export function updateUser(user) {
  return {
    type: 'SET_USER',
    payload: user,
  };
}
