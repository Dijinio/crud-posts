const commentsReducer = (state, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return action.payload;
    case "CREATE_COMMENT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentsReducer;
