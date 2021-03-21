import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PostsProvider } from "./context/posts";
import { CommentsProvider } from "./context/comments";

ReactDOM.render(
  <PostsProvider>
    <CommentsProvider>
      <App />
    </CommentsProvider>
  </PostsProvider>,
  document.getElementById("root")
);
