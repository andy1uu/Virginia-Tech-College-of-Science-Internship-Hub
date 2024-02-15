import * as React from "react";
import {
  Grid,
  IconButton,
  DialogActions,
  DialogTitle,
  Dialog,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import InternshipsService from "../../api/services/InternshipsService";

const DeleteInternship = (props) => {
  const internshipID = props.internshipID;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log(internshipID);
    InternshipsService.removeInternshipById(internshipID);
    setOpen(false);
  };

  return (
    <Grid item xs={1}>
      <IconButton onClick={handleOpen} sx={{ py: 0, mx: 1 }}>
        <ClearIcon fontSize="large" color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle
          color="primary"
          sx={{ fontSize: 24, fontWeight: 600, mx: "auto" }}
        >
          Are you sure you want to delete this internship?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDelete}>Delete Internship</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default DeleteInternship;
