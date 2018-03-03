export function updatePosts(posts) {
  return {
    type: 'REFRESH_FEED',
    payload: posts
  };
}

export function createPost(post) {
  return {
    type: 'ADD_POST',
    payload: post
  };
}

export function getPost(post) {
  return {
    type: 'GET_POST',
    payload: post
  };
}

export function updateAuthUser(user) {
  return {
    type: 'AUTH_USER',
    payload: user
  };
}

export function signedIn(boolean) {
  return {
    type: 'UPDATE_SIGNEDIN',
    payload: boolean
  };
}

export function createSubreddit(subreddits) {
  return {
    type: 'ADD_SUBREDDITS',
    payload: subreddits
  };
}

export function getSubreddits(subreddits) {
  return {
    type: 'GET_SUBREDDITS',
    payload: subreddits
  };
}

export function updateUser(user) {
  return {
    type: 'SET_USER',
    payload: user
  };
}

export function selectSubreddit(subreddit) {
  return {
    type: 'SELECTED_SUBREDDIT',
    payload: subreddit
  };
}

export function updateComments(comments) {
  return {
    type: 'GET_COMMENTS',
    payload: comments
  };
}

export function getPostsFromSubreddit(posts) {
  return {
    type: 'GET_POSTS_FROM_SUBREDDIT',
    payload: posts
  };
}

export function createComment(gComment) {
  return {
    type: 'ADD_COMMENT',
    payload: gComment
  };
}

export function getComment(comment) {
  return {
    type: 'GET_COMMENT',
    payload: comment
  };
}

export function getChild(child) {
  return {
    type: 'GET_CHILD',
    payload: child
  };
}
