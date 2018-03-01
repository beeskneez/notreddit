export function ReducerCreateSubreddit(state = null, action) {
  switch (action.type) {
    case 'ADD_SUBREDDIT':
      return action.payload;
      break;
  }
  return state;
}

export function ReducerGetSubreddits(state = [], action) {
  switch (action.type) {
    case 'GET_SUBREDDITS':
      return action.payload;
      break;
  }
  return state;
}

// selected subreddit in postForm
export function ReducerSelectedSubreddit(state = null, action) {
  switch (action.type) {
    case 'SELECTED_SUBREDDIT':
      return action.payload;
      break;
  }
  return state;
}

export function ReducerGetPostsFromSubreddit(state = [], action) {
    switch (action.type) {
      case 'GET_POSTS_FROM_SUBREDDIT':
        return action.payload;
        break;
    }
    return state;
}
