let defaultState = [
  // {
  //   id: 1,
  //   username: "lilray",
  //   title: "TIFU by inviting my grandma to prom",
  //   body: "Every woman deserves to go to a prom, no matter how old you are.",
  //   thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/170330122746-nanny-senior-prom-trnd-exlarge-169.jpg",
  //   likeCache: 71,
  //   commentCache: 8,
  // },
  // {
  //   id: 2,
  //   username: "ryansan",
  //   title: "Best homemade cookies",
  //   body: "Aint no cookie like a homemade cookie",
  //   thumbnail: "https://en.wikipedia.org/wiki/Cookie#/media/File:2ChocolateChipCookies.jpg",
  //   likeCache: 52,
  //   commentCache: 150,
  // },
  // {
  //   id: 3,
  //   username: "tbray",
  //   title: "Instant coffee cures cancer",
  //   body: "This coffee is amazeballs",
  //   thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
  //   likeCache: 78,
  //   commentCache: 1,
  // }
];

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
