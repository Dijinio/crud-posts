import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PostsProvider } from "./context/posts";

ReactDOM.render(
  <PostsProvider>
    <App />
  </PostsProvider>,
  document.getElementById("root")
);
