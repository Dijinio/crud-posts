import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          className={classes.navLink}
          variant="h5"
          color="inherit"
          component={Link}
          to="/"
          style={{ flexGrow: "1" }}
        >
          Posts App
        </Typography>
        <Typography
          className={classes.navLink}
          variant="button"
          component={Link}
          to="/new_post"
          color="inherit"
        >
          Create new post
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
