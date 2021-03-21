import React, { useState, useContext } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { CommentsContext } from "../../context/comments";

const initialData = { email: "", body: "" };

function CommentsForm() {
  const {
    actions: { createComment },
  } = useContext(CommentsContext);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createComment(formData);
    setFormData(initialData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={1}
        style={{
          padding: "0 20px 20px 20px",
          margin: "30px 0",
          border: "1px solid #b5b5b5",
          borderRadius: "3px",
        }}
      >
        <Grid item xs={12}>
          <TextField
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            name="body"
            label="Comment"
            required
            fullWidth
            value={formData.body}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Comment
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={() => setFormData(initialData)}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CommentsForm;
