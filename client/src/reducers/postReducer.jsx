export function ReducerPosts(state = [], action) {
  switch (action.type) {
    case 'REFRESH_FEED':
      return action.payload;
    default:
      return state;
  }
}

export function ReducerCreatePost(state = null, action) {
  switch (action.type) {
    case 'ADD_POST':
      return action.payload;
    default:
      return state;
  }
}

export function ReducerGetPost(state = null, action) {
  switch (action.type) {
    case 'GET_POST':
      return action.payload;
    default:
      return state;
  }
}

export function ReducerCreateSubreddit(state = null, action) {
  switch (action.type) {
    case 'ADD_SUBREDDIT':
      return action.payload;
      break;
  }
  return state;
}
