import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

function CustomSnackbar({ snackOpen, setSnackOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Post successflly created
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CustomSnackbar;
