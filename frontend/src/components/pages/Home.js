import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Chip,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import InternshipsService from "../../api/services/InternshipsService";
import SkillsService from "../../api/services/SkillsService";
import AddInternship from "./AddInternship";
import DeleteInternship from "./DeleteInternship";
import "../../styles/components/pages/Home.css";

const Home = () => {
  const [internships, setInternships] = useState([]);

  const [currentInternship, setCurrentInternship] = useState({});
  const [skills, setSkills] = useState([]);
  const [skillSearchQuery, setSkillSearchQuery] = useState("");
  const [currentSearchTerms, setCurrentSearchTerms] = useState("");
  const [citizenshipType, setCitizenshipType] = useState("usCitizen");
  const [jobType, setJobType] = useState({
    internship: false,
    undergraduateResearch: false,
  });

  const { internship, undergraduateResearch } = jobType;

  const handleChange = (event) => {
    setJobType({
      ...jobType,
      [event.target.name]: event.target.checked,
    });
  };

  const jobTypes = [
    {
      id: "internship",
      label: "Internship",
    },
    {
      id: "undergraduateResearch",
      label: "Undergraduate Research",
    },
  ];

  const citizenshipTypes = [
    {
      id: "usCitizen",
      label: "US Citizen",
    },
    {
      id: "permanentResident",
      label: "Permanent Resident",
    },
    {
      id: "nonCitizen",
      label: "Non-Citizen",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      await InternshipsService.getInternships().then((response) => {
        const data = response.data;
        console.log(data);
        setInternships(data);
      });

      await SkillsService.getSkills().then((response) => {
        const data = response.data;
        setSkills(data);
      });
    }
    fetchData();
  }, []);

  const handleSkillSearch = (skillNameQuery) => {
    async function fetchData() {
      await SkillsService.getSkillByNameQuery(skillNameQuery).then(
        (response) => {
          const data = response.data;
          setSkills(data);
        }
      );
    }
    if (skillNameQuery) {
      fetchData();
    }
  };

  const renderInternships = () => {
    const filteredInternships = currentSearchTerms
      ? internships.filter(({ internshipTitle }) =>
          internshipTitle
            .toLowerCase()
            .includes(currentSearchTerms.toLowerCase())
        )
      : internships;

    return filteredInternships.map((internship) => {
      return (
        <div
          className="Home-internshipContainer"
          onClick={() => setCurrentInternship(internship)}
          key={internship.internshipID}
        >
          <Grid container spacing={1}>
            <Grid item xs={11} className="Home-internshipTitle">
              {internship.internshipTitle}
            </Grid>
            <DeleteInternship internshipID={internship.internshipID} />
          </Grid>
          <div className="Home-internshipCompany">
            {internship.internshipCompany}
          </div>
          <div className="Home-internshipLocation">
            {internship.internshipLocation}
          </div>
          <div className="Home-internshipCitizenshipAndJobType">
            <div className="Home-internshipCitizenship">
              {internship.internshipCitizenship}
            </div>
            <div className="Home-internshipJobType">
              {internship.internshipJobType}
            </div>
          </div>
          <div className="Home-internshipSkills"></div>
        </div>
      );
    });
  };

  return (
    <Grid className="Home">
      <Grid container sx={{ mb: 2, mx: 0.5 }} className="Home-topContainer">
        <Autocomplete
          options={internships.map((option) => option.internshipTitle)}
          value={currentSearchTerms}
          onChange={(event, newValue) => {
            setCurrentSearchTerms(newValue);
          }}
          isOptionEqualToValue={(option, value) =>
            option.internshipTitle === value.internshipTitle
          }
          sx={{
            mr: 1,
            flexGrow: 1,
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Search for your next opportunity!"
              size="small"
              color="secondary"
              sx={{
                "& .MuiInputLabel-root": { color: "#861F41" },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "#E5751F" },
                  borderRadius: 5,
                },
              }}
            />
          )}
        ></Autocomplete>
        <AddInternship
          jobTypes={jobTypes}
          citizenshipTypes={citizenshipTypes}
        />
      </Grid>

      <Grid container direction="column" className="Home-bottomContainer">
        <Grid className="Home-left">
          <div className="Home-filtersTitle">Filters</div>
          <Grid container direction="column">
            <div className="Home-citizenshipTypesTitle">Citizenship</div>
            <FormControlLabel
              control={
                <Checkbox checked={internship} onChange={handleChange} />
              }
              label={jobTypes[0].label}
              name="internship"
              labelPlacement="start"
              sx={{ justifyContent: "space-between" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={undergraduateResearch}
                  onChange={handleChange}
                  name="undergraduateResearch"
                />
              }
              label={jobTypes[1].label}
              labelPlacement="start"
              sx={{ justifyContent: "space-between" }}
            />
          </Grid>

          <Grid container direction="column">
            <div className="Home-citizenshipTypesTitle">Citizenship</div>
            <RadioGroup
              value={citizenshipType}
              onChange={(event) => setCitizenshipType(event.target.value)}
            >
              {citizenshipTypes.map((citizenType) => {
                return (
                  <FormControlLabel
                    key={citizenType.id}
                    value={citizenType.id}
                    control={
                      <Radio
                        checkedIcon={<CheckBoxIcon />}
                        icon={<CheckBoxOutlineBlankIcon />}
                      />
                    }
                    label={citizenType.label}
                    labelPlacement="start"
                    sx={{ justifyContent: "space-between" }}
                  />
                );
              })}
            </RadioGroup>
          </Grid>
          <Grid className="Home-skillsContainer">
            <div className="Home-skillsTitle">Skills</div>
            <Autocomplete
              id="tags-outlined"
              options={skills}
              getOptionLabel={(option) => option.skillName}
              isOptionEqualToValue={(option, value) =>
                option.skillName === value.skillName
              }
              filterSelectedOptions
              onChange={(event) => {
                console.log(event);
                setSkillSearchQuery(event.target.innerHTML);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Skills"
                  placeholder="Skills"
                  onChange={(event) => handleSkillSearch(event.target.value)}
                />
              )}
              sx={{
                "& .MuiFormControl-root": {
                  height: "100%",
                  overflowY: "auto",
                },
              }}
            />
            {skillSearchQuery}
          </Grid>
        </Grid>

        <div className="Home-middle">{renderInternships()}</div>
        <Grid className="Home-right">
          {currentInternship.internshipTitle && (
            <div className="Home-currInternshipContainer">
              <div className="Home-currInternshipTitle">
                {currentInternship.internshipTitle}
              </div>
              <div className="Home-currInternshipInfoContainer">
                <div className="Home-currInternshipInfoLeft">
                  <div className="Home-currInternshipLocation">
                    {currentInternship.internshipLocation}
                  </div>
                  <div className="Home-currInternshipCompany">
                    {currentInternship.internshipCompany}
                  </div>
                  <div className="Home-currInternshipCitizenshipAndJobType">
                    <div className="Home-currInternshipCitizenship">
                      {currentInternship.internshipCitizenship}
                    </div>
                    <div className="Home-currInternshipJobType">
                      {currentInternship.internshipJobType}
                    </div>
                  </div>
                </div>

                <div className="Home-currInternshipInfoRight">
                  {new Date(
                    currentInternship.internshipApplyDeadline
                  ).toLocaleDateString()}
                </div>
              </div>
              <a
                className="Home-currInternshipApplyLink"
                href={currentInternship.internshipApplyLink}
              >
                Apply
              </a>
              <div className="Home-currInternshipSkillsContainer">
                <div className="Home-currInternshipSkillsTitle">Skills</div>
              </div>
              <div className="Home-currInternshipDescriptionContainer">
                <div className="Home-currInternshipDescriptionTitle">
                  Description
                </div>
                <div className="Home-currInternshipDescription">
                  {currentInternship.internshipDescription}
                </div>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
