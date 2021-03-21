import * as api from "../../api";

const createActions = (dispatch) => {
  return {
    getPosts: async () => {
      try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "GET_POSTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    },
    createPost: async (post) => {
      try {
        const { data } = await api.newPost(post);
        dispatch({ type: "ADD_NEW_POST", payload: data });
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default createActions;
