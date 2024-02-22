import * as React from "react";
import PropTypes from "prop-types";
import {
  Button,
  MenuItem,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as dayjs from "dayjs";
import { AddressAutofill } from "@mapbox/search-js-react";
import InternshipsService from "../../api/services/InternshipsService";

const EditInternship = (props) => {
  const jobTypes = props.jobTypes;
  const citizenshipTypes = props.citizenshipTypes;

  const [open, setOpen] = React.useState(false);
  const [internshipTitle, setInternshipTitle] = React.useState("");
  const [internshipCompany, setInternshipCompany] = React.useState("");
  const [internshipApplyLink, setInternshipApplyLink] = React.useState("");
  const [internshipDescription, setInternshipDescription] = React.useState("");
  const [internshipCitizenshipType, setInternshipCitizenshipType] =
    React.useState(citizenshipTypes[0].id);
  const [internshipJobType, setInternshipJobType] = React.useState(
    jobTypes[0].id
  );
  const [internshipLocation, setInternshipLocation] = React.useState("");
  const [internshipApplyDeadline, setInternshipApplyDeadline] = React.useState(
    dayjs().add(14, "day")
  );
  const [internshipSkills, setInternshipSkills] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("I closed it");
  };

  const handleSubmit = () => {
    setOpen(false);
    console.log("I submitted it");
    console.log(internshipTitle);
    console.log(internshipCompany);
    console.log(internshipApplyLink);
    console.log(internshipDescription);
    console.log(internshipCitizenshipType);
    console.log(internshipJobType);
    console.log(internshipLocation);
    console.log(internshipApplyDeadline.$d);
    InternshipsService.create({
      internshipTitle: internshipTitle,
      internshipDescription: internshipDescription,
      internshipCompany: internshipCompany,
      internshipApplyLink: internshipApplyLink,
      internshipCitizenship: internshipCitizenshipType,
      internshipJobType: internshipJobType,
      internshipLocation: internshipLocation,
      internshipApplyDeadline: internshipApplyDeadline.$d,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Grid>
      <Button
        sx={{ borderRadius: 5 }}
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        Add Opportunity
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle
          color="primary"
          sx={{ fontSize: 24, fontWeight: 600, mx: "auto" }}
        >
          Add A New Opportunity
        </DialogTitle>
        <DialogContent>
          {/* Left: Title, Company, Apply Link, Description */}
          {/* Right: Title, Company, Apply Link, Description */}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ p: 2, width: "50%" }}
          >
            <Grid item xs={6}>
              <Grid item>
                {/* make titles synonmous with any type of opportunitiy */}
                <DialogContentText>Title</DialogContentText>
                <TextField
                  margin="normal"
                  size="normal"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 55,
                    },
                  }}
                  id="title"
                  label="Title"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setInternshipTitle(e.target.value)}
                />
              </Grid>
              <Grid item>
                <DialogContentText>Company</DialogContentText>
                <TextField
                  margin="normal"
                  size="normal"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 55,
                    },
                  }}
                  id="company"
                  label="Company"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setInternshipCompany(e.target.value)}
                />
              </Grid>
              <Grid item>
                <DialogContentText>Apply Link</DialogContentText>
                <TextField
                  margin="normal"
                  size="normal"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 55,
                    },
                  }}
                  id="applyLink"
                  label="Apply Link"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setInternshipApplyLink(e.target.value)}
                />
              </Grid>
              <Grid item>
                <DialogContentText>Description</DialogContentText>
                <TextField
                  margin="normal"
                  size="normal"
                  id="description"
                  label="Description"
                  type="text"
                  fullWidth
                  multiline
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      minHeight: 130,
                    },
                  }}
                  onChange={(e) => setInternshipDescription(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid item>
                <DialogContentText>Citizenship Type</DialogContentText>
                <TextField
                  id="citizenshipType"
                  select
                  size="normal"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 55,
                    },
                  }}
                  label="Citizenship Type"
                  defaultValue={citizenshipTypes[0].id}
                  margin="normal"
                  fullWidth
                  onChange={(e) => setInternshipCitizenshipType(e.target.value)}
                >
                  {citizenshipTypes.map((citizenshipType) => (
                    <MenuItem
                      key={citizenshipType.id}
                      value={citizenshipType.id}
                    >
                      {citizenshipType.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item>
                <DialogContentText>Job Type</DialogContentText>
                <TextField
                  id="jobType"
                  size="normal"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 55,
                    },
                  }}
                  select
                  label="Job Type"
                  defaultValue={jobTypes[0].id}
                  margin="normal"
                  fullWidth
                  onChange={(e) => setInternshipJobType(e.target.value)}
                >
                  {jobTypes.map((jobType) => (
                    <MenuItem key={jobType.id} value={jobType.id}>
                      {jobType.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item>
                <DialogContentText>Apply Deadline</DialogContentText>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    defaultValue={internshipApplyDeadline}
                    label="Apply Deadline"
                    sx={{
                      "& .MuiInputBase-root": {
                        height: 55,
                      },
                    }}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        margin: "normal",
                        size: "normal",
                      },
                    }}
                    onChange={(newDate) => setInternshipApplyDeadline(newDate)}
                  ></DatePicker>
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <DialogContentText>Location</DialogContentText>
                <form>
                  <AddressAutofill
                    accessToken={
                      "pk.eyJ1IjoiYW5keWx1dSIsImEiOiJjbGdjeXNkZG4wMmt3M2xsaHJkOGMyMzBkIn0.ZWriv323SJ9YutidC-LfFA"
                    }
                    options={{
                      language: "en",
                      country: "US",
                      proximity: "ip",
                    }}
                  >
                    <TextField
                      placeholder="Please type in a city..."
                      label="Location"
                      margin="normal"
                      size="normal"
                      fullWidth
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 55,
                        },
                      }}
                      inputProps={{
                        autoComplete: "address-line1",
                      }}
                      onChange={(e) => setInternshipLocation(e.target.value)}
                    />
                    <TextField
                      placeholder="City"
                      margin="dense"
                      size="small"
                      fullWidth
                      inputProps={{
                        autoComplete: "address-level2",
                      }}
                    />
                    <TextField
                      placeholder="State"
                      margin="dense"
                      size="small"
                      fullWidth
                      inputProps={{
                        autoComplete: "address-level1",
                      }}
                    />
                  </AddressAutofill>
                </form>
              </Grid>
              <Grid item>
                <DialogContentText>Skills</DialogContentText>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Add New Opportunity</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

EditInternship.props = {
  jobTypes: PropTypes.array,
  citizenshipTypes: PropTypes.array,
};

export default EditInternship;
