import React, { useContext, useEffect, useState } from "react";
import { Divider, Paper, Typography } from "@material-ui/core";
import { PostsContext } from "../../context/posts";
import { CommentsContext } from "../../context/comments";
import Comments from "./Comments";

function PostPage({ match }) {
  const { posts } = useContext(PostsContext);
  const {
    comments,
    actions: { getComments },
  } = useContext(CommentsContext);
  const [post, setPost] = useState({ title: "", body: "" });

  useEffect(() => {
    const getPost = () => {
      const postId = parseInt(match?.params?.id);
      const foundPost = posts.find((p) => p.id === postId);
      if (foundPost) {
        setPost(foundPost);
        getComments(postId);
      }
    };

    getPost();
  }, [match, posts]);

  return (
    <Paper
      style={{
        padding: "100px 20px 50px 20px",
      }}
    >
      <Typography variant="h5" align="center" style={{ marginBottom: "30px" }}>
        {post.title}
      </Typography>
      <Typography variant="body1">{post.body}</Typography>
      <Divider variant="middle" style={{ margin: "20px 0" }} />
      <Comments comments={comments} />
    </Paper>
  );
}

export default PostPage;
