import React, { useEffect, useState } from "react";
import InternshipsService from "../../api/services/InternshipsService";
import SkillsService from "../../api/services/SkillsService";

import "../../styles/components/pages/Home.css";

const Home = () => {
  const [internships, setInternships] = useState([]);
  const [skills, setSkills] = useState([]);

  const jobTypes = ["Internship", "Undergraduate Research"];
  const citizenshipTypes = ["US Citizen", "Permanent Resident", "Non-Citizen"];

  useEffect(() => {
    InternshipsService.getInternships().then((response) => {
      const data = response.data;
      setInternships(data);
    });

    SkillsService.getSkills().then((response) => {
      const data = response.data;
      setSkills(data);
    });
  }, []);

  return (
    <section className="Home">
      <div className="Home-container">
        <div className="Home-left">
          <div class="Home-filtersTitle">Filters</div>
          <div class="Home-jobTypesContainer">
            <div class="Home-jobTypesTitle">Job Type</div>
            <div class="Home-jobTypes">
              {jobTypes.map((jobType) => {
                return <div  key={jobType}>{jobType}</div>;
              })}
            </div>
          </div>
          <div>
            <div>Citizenship</div>
            <div>
              {citizenshipTypes.map((citizenshipType) => {
                return <div key={citizenshipType}>{citizenshipType}</div>;
              })}
            </div>
          </div>
          <div>
            <div>Skills</div>
            <div>
              {skills.map((skill) => {
                return <div key={skill.skillId}>{skill.skillName}</div>;
              })}
            </div>
          </div>
        </div>

        <div className="Home-middle">
          {internships.map((internship) => {
            return (
              <div key={internship.internshipID}>
                {internship.internshipTitle}
                {internship.internshipDescription}
                {internship.internshipCompany}
                {internship.internshipLocation}
                {internship.internshipStartDate}
                {internship.internshipApplyDeadline}
                {internship.internshipApplyLink}
                {internship.internshipCitizenship}
                {internship.internshipJobType}
              </div>
            );
          })}
        </div>
        <div className="Home-right">Right</div>
      </div>
    </section>
  );
};

export default Home;
