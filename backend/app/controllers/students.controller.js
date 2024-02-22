import Student from "../models/students.model.js";

const StudentController = () => {};
// Create a new Student
StudentController.create = (request, response) => {
  // Validate the Request
  if (!request.body) {
    response.status(400).send({ message: "Request content can not be empty!" });
  }

  // Create a new Student
  const newStudent = new Student({ studentName: request.body.studentName });

  // Preform the Create Operation on the DataBase
  Student.create(newStudent, (error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || "Error when creating a new Student",
      });
    } else {
      response.send(data);
    }
  });
};

// Get all Students
StudentController.getStudents = (request, response) => {
  Student.getStudents((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || "Error when getting all Students",
      });
    } else {
      response.send(data);
    }
  });
};

// Get one Student by ID
StudentController.getStudentById = (request, response) => {
  const studentId = request.params.studentId;

  Student.getStudentById(studentId, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        response.status(404).send({
          message: "Student not found with Id: " + studentId,
        });
      } else {
        response.status(500).send({
          message:
            error.message ||
            "Error when getting the Student with the Id: " + studentId,
        });
      }
    } else {
      response.send(data);
    }
  });
};

// Update one Student by ID
StudentController.updateStudentById = (request, response) => {
  // Validate the Request
  if (!request.body) {
    response.status(400).send({ message: "Request content can not be empty!" });
  }

  console.log(request.body);

  const studentId = request.params.studentId;

  const updatedStudent = new Student({ studentName: request.body.studentName });

  Student.updateStudentById(studentId, updatedStudent, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        response.status(404).send({
          message: "Student not found with Id: " + studentId,
        });
      } else {
        response.status(500).send({
          message:
            error.message ||
            "Error when updating the Student with the Id: " + studentId,
        });
      }
    } else {
      response.send(data);
    }
  });
};

// Remove one Student by ID
StudentController.removeStudentById = (request, response) => {
  const studentId = request.params.studentId;

  Student.removeStudentById(studentId, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        response.status(404).send({
          message: "Student not found with Id: " + studentId,
        });
      } else {
        response.status(500).send({
          message:
            error.message ||
            "Error when deleting the Student with the Id: " + studentId,
        });
      }
    } else {
      response.send({
        message:
          "Student with the studentId: " +
          studentId +
          " was deleted successfully.",
      });
    }
  });
};

// Remove all Students
StudentController.removeStudents = (request, response) => {
  Student.removeStudents((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || "Error when deleting all the Students",
      });
    } else {
      response.send({
        message: "All students were deleted successfully.",
      });
    }
  });
};

export default StudentController;
