import { Alert, Snackbar } from "@mui/material";

const Notification = ({ notify, setNotify }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    } else {
      setNotify({ ...notify, isOpen: false });
    }
  };

  return (
    <Snackbar
      autoHideDuration={3000}
      open={notify.isOpen}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} sx={{ backgroundColor: "#f3b33d" }}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
