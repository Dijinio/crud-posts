const postsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "ADD_NEW_POST":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default postsReducer;