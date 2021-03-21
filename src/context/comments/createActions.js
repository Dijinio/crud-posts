import * as api from "../../api";

const createActions = (dispatch) => {
  return {
    getComments: async (postId) => {
      try {
        const { data } = await api.fetchComments(postId);
        dispatch({ type: "GET_COMMENTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    },
    createComment: (comment) => {
      try {
        dispatch({ type: "CREATE_COMMENT", payload: comment });
      } catch (error) {}
    },
  };
};

export default createActions;
