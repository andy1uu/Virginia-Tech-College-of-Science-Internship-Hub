import sql from "../database.js";

// Constructor
const Internship = function(internship) {
  this.internshipName = internship.internshipName;
};

// Create a new Internship
Internship.create = (newInternship, result) => {
  let query = "INSERT INTO INTERNSHIPS SET ?";

  sql.query(query, newInternship, (error, response) => {
    if (error) {
      console.log("Error when creating a new Internship: ", error);
      result(error, null);
      return;
    }

    console.log("Successfully Created New Internship: ", response);
    result(null, response);
  });
};

// Get all Internships
Internship.getInternships = (result) => {
  let query = "SELECT * FROM INTERNSHIPS";

  sql.query(query, (error, response) => {
    if (error) {
      console.log("Error when getting all the Internships: ", error);
      result(error, null);
      return;
    }

    console.log("Successfully got all Internships: ", response);
    result(null, response);
  });
};

// Get one Internship by ID
Internship.getInternshipById = (internshipId, result) => {
  let query = "SELECT * FROM INTERNSHIPS WHERE internshipId = ?";

  sql.query(query, internshipId, (error, response) => {
    if (error) {
      console.log(
        "Error when getting the Internship with the Id: ",
        internshipId,
        " Error: ",
        error
      );
      result(error, null);
      return;
    }

    if (response.length) {
      console.log(
        "Successfully got Internship with the Id:",
        internshipId,
        " Response: ",
        response[0]
      );
      result(null, response[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

// Update one Internship by ID
Internship.updateInternshipById = (internshipId, newInternship, result) => {
  let query = "UPDATE INTERNSHIPS SET internshipName = ? WHERE internshipId = ?";

  sql.query(query, [newInternship.internshipName, internshipId], (error, response) => {
    if (error) {
      console.log(
        "Error when updating the Internship with the Id: ",
        internshipId,
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
      "Successfully updated Internship with the Id:",
      internshipId,
      " Response: ",
      response
    );
    result(null, response);
  });
};

// Remove one Internship by ID
Internship.removeInternshipById = (internshipId, result) => {
  let query = "DELETE FROM INTERNSHIPS WHERE internshipId = ?";

  sql.query(query, internshipId, (error, response) => {
    if (error) {
      console.log(
        "Error when deleting the Internship with the Id: ",
        internshipId,
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
      "Successfully deleted Internship with the Id:",
      internshipId,
      " Response: ",
      response
    );
    result(null, response);
  });
};

// Remove all Internships
Internship.removeInternships = (result) => {
  let query = "DELETE FROM INTERNSHIPS";

  sql.query(query, (error, response) => {
    if (error) {
      console.log("Error when deleting all Internships: ", error);
      result(error, null);
      return;
    }

    console.log(
      "Successfully deleted all Internships. Number of Internships deleted: ",
      response.affectedRows
    );
    result(null, response);
  });
};

export default Internship;
