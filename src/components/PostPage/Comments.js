import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import CommentsForm from "./CommentsForm";

function Comments({ comments }) {
  return (
    <>
      <Typography variant="body1">{`${comments.length} comments`}</Typography>
      <CommentsForm />
      <Grid container spacing={3}>
        {comments.map((comment, i) => (
          <Grid item xs={12} key={i}>
            <Typography variant="body2" color="primary">
              {comment.email}
            </Typography>
            <Typography variant="body1">{comment.body}</Typography>
            <Divider variant="middle" style={{ margin: "10px 0" }} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Comments;
