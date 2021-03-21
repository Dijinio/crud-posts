import React, { createContext, useReducer, useEffect } from "react";
import createActions from "./createActions";
import postsReducer from "./reducer";

const initialState = [{ userId: "", id: "", title: "", body: "" }];

export const PostsContext = createContext(initialState);

export const PostsProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postsReducer, initialState);

  const actions = createActions(dispatch);

  useEffect(() => {
    actions.getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, actions }}>
      {children}
    </PostsContext.Provider>
  );
};
