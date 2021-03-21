import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function PostItem({ id, title, body }) {
  return (
    <Grid item xs={12}>
      <Card elevation={3}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
        <CardActions>
          <Typography
            variant="button"
            color="primary"
            component={Link}
            to={`/posts/${id}`}
            style={{ textDecoration: "none" }}
          >
            Read more...
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PostItem;
