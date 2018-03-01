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

// Comment Reducers

export function ReducerComments(state = [], action) {
  switch (action.type) {
    case 'GET_COMMENTS':
      return action.payload;
    default:
      return state;
  }
}

export function ReducerCreateComment(state = null, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return action.payload;
    default:
      return state;
  }
}
