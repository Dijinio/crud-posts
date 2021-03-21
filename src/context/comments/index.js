import React, { useReducer, createContext } from "react";
import commentsReducer from "./reducer";
import createActions from "./createActions";

const initialState = [{ postId: "", id: "", email: "", name: "", body: "" }];

export const CommentsContext = createContext(initialState);

export const CommentsProvider = ({ children }) => {
  const [comments, dispatch] = useReducer(commentsReducer, initialState);

  const actions = createActions(dispatch);

  return (
    <CommentsContext.Provider value={{ comments, actions }}>
      {children}
    </CommentsContext.Provider>
  );
};
