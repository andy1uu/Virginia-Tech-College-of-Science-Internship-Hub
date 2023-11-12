import React, { useEffect, useState } from "react";
import InternshipsService from "../../api/services/InternshipsService";
import SkillsService from "../../api/services/SkillsService";

import "../../styles/components/pages/Home.css";

const Home = () => {
  const [internships, setInternships] = useState([]);
  const [currentInternship, setCurrentInternship] = useState({});
  const [skills, setSkills] = useState([]);
  const [internshipSkills, setInternshipSkills] = useState({});

  const jobTypes = ["Internship", "Undergraduate Research"];
  const citizenshipTypes = ["US Citizen", "Permanent Resident", "Non-Citizen"];

  useEffect(() => {
    async function fetchData() {
      await InternshipsService.getInternships().then((response) => {
        const data = response.data;
        setInternships(data);
      });

      await internships.forEach((internship) => {
        SkillsService.getSkillsByJobId(internship.internshipID).then(
          (response) => {
            const data = response.data;
            internshipSkills[internship.internshipID] = data;
            setInternshipSkills(internshipSkills);
          }
        );

        setTimeout(5000);
      });

      await SkillsService.getSkills().then((response) => {
        const data = response.data;
        setSkills(data);
      });
    }
    fetchData();
  });

  const renderInternships = () => {
    console.log(internshipSkills);
    return internships.map((internship) => {
      return (
        <div
          className="Home-internshipContainer"
          onClick={() => setCurrentInternship(internship)}
          key={internship.internshipID}
        >
          <div className="Home-internshipTitle">
            {internship.internshipTitle}
          </div>
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
          <div className="Home-internshipSkills">
            {internshipSkills[internship.internshipID] &&
              internshipSkills[internship.internshipID].slice(0,3).map(
                (internshipSkill) => {
                  return (
                    <div
                      className="Home-internshipSkill"
                      key={internshipSkill.skillID}
                    >
                      {internshipSkill.skillName}
                    </div>
                  );
                }
              )}
          </div>
        </div>
      );
    });
  };

  return (
    <section className="Home">
      <div className="Home-container">
        <div className="Home-left">
          <div className="Home-filtersTitle">Filters</div>
          <div clasName="Home-jobTypesContainer">
            <div className="Home-jobTypesTitle">Job Type</div>
            <div className="Home-jobTypes">
              {jobTypes.map((jobType) => {
                return (
                  <div className="Home-jobType" key={jobType}>
                    {jobType}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="Home-citizenshipTypesTitle">Citizenship</div>
            <div className="Home-citizenshipTypes">
              {citizenshipTypes.map((citizenshipType) => {
                return (
                  <div className="Home-citizenshipType" key={citizenshipType}>
                    {citizenshipType}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="Home-skillsTitle">Skills</div>
            <div className="Home-skills">
              {skills.map((skill) => {
                return (
                  <div className="Home-skill" key={skill.skillId}>
                    {skill.skillName}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="Home-middle">{renderInternships()}</div>
        <div className="Home-right">
          <div className="Home-currInternshipTitle">
            {currentInternship.internshipTitle}
          </div>
          <div className="Home-currInternshipCompany">
            {currentInternship.internshipCompany}
          </div>

          <div className="Home-currInternshipLocation">
            {currentInternship.internshipLocation}
          </div>
          <div className="Home-currInternshipCitizenshipAndJobType">
            <div className="Home-currInternshipCitizenship">
              {currentInternship.internshipCitizenship}
            </div>
            <div className="Home-currInternshipJobType">
              {currentInternship.internshipJobType}
            </div>
          </div>
          <a
            className="Home-currInternshipApplyLink"
            href={currentInternship.internshipApplyLink}
          >
            Apply
          </a>
          <div className="Home-currInternshipDescriptionContainer">
            <div className="Home-currInternshipDescriptionTitle">
              Description
            </div>
            <div className="Home-currInternshipDescription">
              {currentInternship.internshipDescription}
            </div>
          </div>
          <div className="Home-currInternshipSkillsContainer">
            <div className="Home-currInternshipSkillsTitle">Skills</div>
            <div className="Home-currInternshipSkills">
              {internshipSkills[currentInternship.internshipID] &&
                internshipSkills[currentInternship.internshipID]
                  .slice(0, 3)
                  .map((internshipSkill) => {
                    return (
                      <div
                        className="Home-currInternshipSkill"
                        key={internshipSkill.skillID}
                      >
                        {internshipSkill.skillName}
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
