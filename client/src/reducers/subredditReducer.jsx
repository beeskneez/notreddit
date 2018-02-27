export function ReducerCreateSubreddit(state = null, action) {
  switch (action.type) {
    case 'ADD_SUBREDDIT':
      return action.payload;
      break;
  }
  return state;
}
