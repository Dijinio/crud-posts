import React from "react";
import { Container } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import PostForm from "./components/Posts/PostForm/PostForm";
import PostPage from "./components/PostPage/PostPage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="md">
        <Route exact path="/" component={Posts} />
        <Route exact path="/new_post" component={PostForm} />
        <Route exact path="/posts/:id" component={PostPage} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
