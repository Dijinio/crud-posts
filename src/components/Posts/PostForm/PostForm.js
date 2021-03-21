import React, { useContext, useState } from "react";
import { PostsContext } from "../../../context/posts";
import {
  Button,
  Container,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import CustomSnackbar from "../../Snackbar/CustomSnackbar";

const initialState = { title: "", body: "" };

function PostForm() {
  const {
    actions: { createPost },
  } = useContext(PostsContext);

  const [formData, setFormData] = useState(initialState);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost(formData);
    setSnackOpen(true);
    setFormData(initialState);
  };

  return (
    <Container maxWidth="sm">
      <CustomSnackbar snackOpen={snackOpen} setSnackOpen={setSnackOpen} />
      <Typography variant="h5" align="center" style={{ marginBottom: "30px" }}>
        Create new post
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              type="text"
              label="Title"
              name="title"
              fullWidth
              autoFocus
              autoComplete="off"
              variant="outlined"
              size="small"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Post body</Typography>
            <TextareaAutosize
              name="body"
              aria-label="empty textarea"
              rowsMin={3}
              style={{ width: "100%", fontSize: "1.3rem" }}
              value={formData.body}
              onChange={handleChange}
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ margin: "20px 30px" }}
          >
            Submit Post
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default PostForm;
