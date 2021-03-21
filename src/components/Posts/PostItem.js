import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";

function PostItem({ title, body }) {
  return (
    <Grid item xs={12}>
      <Card elevation={3}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
        <CardActions>
          <a href="/" className="">
            More...
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PostItem;
