import sql from "../database.js";

// Constructor
const Skill = function (skill) {
  this.skillName = skill.skillName;
};

// Create a new Skill
Skill.create = (newSkill, result) => {
  let query = "INSERT INTO SKILLS SET ?";

  sql.query(query, newSkill, (error, response) => {
    if (error) {
      console.log("Error when creating a new Skill: ", error);
      result(error, null);
      return;
    }

    console.log("Successfully Created New Skill: ", response);
    result(null, response);
  });
};

// Get all Skills
Skill.getSkills = (result) => {
  let query = "SELECT * FROM SKILLS ORDER BY RAND() LIMIT 100";

  sql.query(query, (error, response) => {
    if (error) {
      console.log("Error when getting all the Skills: ", error);
      result(error, null);
      return;
    }

    console.log("Successfully got all Skills: ", response);
    result(null, response);
  });
};

// Get some Skills by Name Query
Skill.getSkillByNameQuery = (skillNameQuery, result) => {
  let query = "SELECT * FROM SKILLS WHERE skillName LIKE '%" + skillNameQuery +"%'";

  sql.query(query, skillNameQuery, (error, response) => {
    if (error) {
      console.log(
        "Error when getting Skills with the Name Query ",
        skillNameQuery,
        " Error: ",
        error
      );
      result(error, null);
      return;
    }

    if (response.length) {
      console.log(
        "Successfully got Skills with a similar name query to: ",
        skillNameQuery,
        " Response: ",
        response
      );
      result(null, response);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

// Get one Skill by ID
Skill.getSkillById = (skillId, result) => {
  let query = "SELECT * FROM SKILLS WHERE skillId = ?";

  sql.query(query, skillId, (error, response) => {
    if (error) {
      console.log(
        "Error when getting the Skill with the Id: ",
        skillId,
        " Error: ",
        error
      );
      result(error, null);
      return;
    }

    if (response.length) {
      console.log(
        "Successfully got Skill with the Id:",
        skillId,
        " Response: ",
        response[0]
      );
      result(null, response[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

// Update one Skill by ID
Skill.updateSkillById = (skillId, newSkill, result) => {
  let query = "UPDATE SKILLS SET skillName = ? WHERE skillId = ?";

  sql.query(query, [newSkill.skillName, skillId], (error, response) => {
    if (error) {
      console.log(
        "Error when updating the Skill with the Id: ",
        skillId,
        " Error: ",
        error
      );
      result(error, null);
      return;
    }

    if (response.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log(
      "Successfully updated Skill with the Id:",
      skillId,
      " Response: ",
      response
    );
    result(null, response);
  });
};

// Remove one Skill by ID
Skill.removeSkillById = (skillId, result) => {
  let query = "DELETE FROM SKILLS WHERE skillId = ?";

  sql.query(query, skillId, (error, response) => {
    if (error) {
      console.log(
        "Error when deleting the Skill with the Id: ",
        skillId,
        " Error: ",
        error
      );
      result(error, null);
      return;
    }

    if (response.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log(
      "Successfully deleted Skill with the Id:",
      skillId,
      " Response: ",
      response
    );
    result(null, response);
  });
};

// Remove all Skills
Skill.removeSkills = (result) => {
  let query = "DELETE FROM SKILLS";

  sql.query(query, (error, response) => {
    if (error) {
      console.log("Error when deleting all Skills: ", error);
      result(error, null);
      return;
    }

    console.log(
      "Successfully deleted all Skills. Number of Skills deleted: ",
      response.affectedRows
    );
    result(null, response);
  });
};

// Get all Skills by Job ID
Skill.getSkillsByJobId = (jobId, result) => {
  let query =
    "SELECT * FROM SKILLS INNER JOIN JOBSKILLS ON SKILLS.skillID = JOBSKILLS.skillID WHERE jobID = ?";

  sql.query(query, jobId, (error, response) => {
    if (error) {
      console.log(
        "Error when getting the Skills with the Internship Id: ",
        jobId,
        " Error: ",
        error
      );
      result(error, null);
      return;
    }

    if (response.length) {
      console.log(
        "Successfully got Skills with the Internship Id:",
        jobId,
        " Response: ",
        response
      );
      result(null, response);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

export default Skill;
