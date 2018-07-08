export function ReducerUser(state = null, action) {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    default:
      return state;
  }
}

export function ReducerStoreUserSubscriptionList(state = [], action) {
  switch (action.type) {
    case "USER_SUBSCRIPTION_LIST":
      return action.payload;
    default:
      return state;
  }
}
