import React, { useEffect, useState } from "react";
import InternshipsService from "../../api/services/InternshipsService";
import "../../styles/components/pages/Home.css";

const Home = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    InternshipsService.getInternships().then((response) => {
      const data = response.data;
      setInternships(data);
    });
  });

  return (
    <section className="Home">
      <div className="Home-container">
        <div className="Home-left">Left</div>
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
