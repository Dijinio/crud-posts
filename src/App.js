import { Container } from "@material-ui/core";
import React from "react";
import Posts from "./components/Posts/Posts";
import PostForm from "./components/Posts/PostForm/PostForm";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: "50px" }}>
        <Route exact path="/" component={Posts} />
        <Route exact path="/new_post" component={PostForm} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
