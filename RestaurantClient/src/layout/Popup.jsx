import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// const useStyles = makeStyles((theme) => ({
//   dialogWrapper: {
//     padding: theme.spacing(2),
//     position: "absolute",
//     top: theme.spacing(5),
//   },
// }));

const Popup = ({ title, children, openPopup, setOpenPopup }) => {
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      //classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle sx={{ paddingRight: "0px" }}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default Popup;
