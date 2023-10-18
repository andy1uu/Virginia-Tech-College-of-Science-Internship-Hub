import sql from "../database.js";

// Constructor
const Student = function(student) {
  this.studentName = student.studentName;
};

// Create a new Student
Student.create = (newStudent, result) => {
  let query = "INSERT INTO STUDENTS SET ?";

  sql.query(query, newStudent, (error, response) => {
    if (error) {
      console.log("Error when creating a new Student: ", error);
      result(error, null);
      return;
    }

    console.log("Successfully Created New Student: ", response);
    result(null, response);
  });
};

// Get all Students
Student.getStudents = (result) => {
  let query = "SELECT * FROM STUDENTS";

  sql.query(query, (error, response) => {
    if (error) {
      console.log("Error when getting all the Students: ", error);
      result(error, null);
      return;
    }

    console.log("Successfully got all Students: ", response);
    result(null, response);
  });
};

// Get one Student by ID
Student.getStudentById = (studentId, result) => {
  let query = "SELECT * FROM STUDENTS WHERE studentId = ?";

  sql.query(query, studentId, (error, response) => {
    if (error) {
      console.log(
        "Error when getting the Student with the Id: ",
        studentId,
        " Error: ",
        error
      );
      result(error, null);
      return;
    }

    if (response.length) {
      console.log(
        "Successfully got Student with the Id:",
        studentId,
        " Response: ",
        response[0]
      );
      result(null, response[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

// Update one Student by ID
Student.updateStudentById = (studentId, newStudent, result) => {
  let query = "UPDATE STUDENTS SET studentName = ? WHERE studentId = ?";

  sql.query(query, [newStudent.studentName, studentId], (error, response) => {
    if (error) {
      console.log(
        "Error when updating the Student with the Id: ",
        studentId,
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
      "Successfully updated Student with the Id:",
      studentId,
      " Response: ",
      response
    );
    result(null, response);
  });
};

// Remove one Student by ID
Student.removeStudentById = (studentId, result) => {
  let query = "DELETE FROM STUDENTS WHERE studentId = ?";

  sql.query(query, studentId, (error, response) => {
    if (error) {
      console.log(
        "Error when deleting the Student with the Id: ",
        studentId,
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
      "Successfully deleted Student with the Id:",
      studentId,
      " Response: ",
      response
    );
    result(null, response);
  });
};

// Remove all Students
Student.removeStudents = (result) => {
  let query = "DELETE FROM SKILLS";

  sql.query(query, (error, response) => {
    if (error) {
      console.log("Error when deleting all Students: ", error);
      result(error, null);
      return;
    }

    console.log(
      "Successfully deleted all Students. Number of Students deleted: ",
      response.affectedRows
    );
    result(null, response);
  });
};

export default Student;
