const initialState = {
  isAuthenticated: false
};

export function ReducerPosts(state = [], action) {
  switch (action.type) {
    case "REFRESH_FEED":
      return action.payload;
      break;
  }
  return state;
}

export function ReducerCreatePost(state = null, action) {
  switch (action.type) {
    case "ADD_POST":
      return action.payload;
      break;
  }
  return state;
}

// object.assign({}, state, {
//   posts: action.payload
// })
