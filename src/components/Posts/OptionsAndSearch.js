import React from "react";
import {
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function OptionsAndSearch({ postsPerPage, setPostsPerPage, setSearchPhrase }) {
  return (
    <Grid
      container
      justify="space-between"
      alignItems="flex-end"
      style={{ margin: "20px 0" }}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="caption">Posts per page</Typography>
        <Select
          value={postsPerPage}
          onChange={(e) => setPostsPerPage(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          type="search"
          placeholder="Search posts by title..."
          fullWidth
          onChange={(e) => setSearchPhrase(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}

export default OptionsAndSearch;
