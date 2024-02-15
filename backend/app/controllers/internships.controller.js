import Internship from "../models/internships.model.js";

const InternshipController = () => {};
// Create a new Internship
InternshipController.create = (request, response) => {
  // Validate the Request
  if (!request.body) {
    response.status(400).send({ message: "Request content can not be empty!" });
  }

  console.log(request.body);

  // Create a new Internship
  const newInternship = new Internship({
    internshipTitle: request.body.internshipTitle,
    internshipDescription: request.body.internshipDescription,
    internshipCompany: request.body.internshipCompany,
    internshipLocation: request.body.internshipLocation,
    internshipApplyDeadline: request.body.internshipApplyDeadline,
    internshipApplyLink: request.body.internshipApplyLink,
    internshipCitizenship: request.body.internshipCitizenship,
    internshipJobType: request.body.internshipJobType,
  });

  // Preform the Create Operation on the DataBase
  Internship.create(newInternship, (error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || "Error when creating a new Internship",
      });
    } else {
      response.send(data);
    }
  });
};

// Get all Internships
InternshipController.getInternships = (request, response) => {
  Internship.getInternships((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || "Error when getting all Internships",
      });
    } else {
      response.send(data);
    }
  });
};

// Get one Internship by ID
InternshipController.getInternshipById = (request, response) => {
  const internshipId = request.params.internshipId;

  Internship.getInternshipById(internshipId, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        response.status(404).send({
          message: "Internship not found with Id: " + internshipId,
        });
      } else {
        response.status(500).send({
          message:
            error.message ||
            "Error when getting the Internship with the Id: " + internshipId,
        });
      }
    } else {
      response.send(data);
    }
  });
};

// Update one Internship by ID
InternshipController.updateInternshipById = (request, response) => {
  // Validate the Request
  if (!request.body) {
    response.status(400).send({ message: "Request content can not be empty!" });
  }

  console.log(request.body);

  const internshipId = request.params.internshipId;

  const updatedInternship = new Internship({
    internshipName: request.body.internshipName,
  });

  Internship.updateInternshipById(
    internshipId,
    updatedInternship,
    (error, data) => {
      if (error) {
        if (error.kind === "not_found") {
          response.status(404).send({
            message: "Internship not found with Id: " + internshipId,
          });
        } else {
          response.status(500).send({
            message:
              error.message ||
              "Error when updating the Internship with the Id: " + internshipId,
          });
        }
      } else {
        response.send(data);
      }
    }
  );
};

// Remove one Internship by ID
InternshipController.removeInternshipById = (request, response) => {
  const internshipId = request.params.internshipId;

  Internship.removeInternshipById(internshipId, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        response.status(404).send({
          message: "Internship not found with Id: " + internshipId,
        });
      } else {
        response.status(500).send({
          message:
            error.message ||
            "Error when deleting the Internship with the Id: " + internshipId,
        });
      }
    } else {
      response.send({
        message:
          "Internship with the internshipId: " +
          internshipId +
          " was deleted successfully.",
      });
    }
  });
};

// Remove all Internships
InternshipController.removeInternships = (request, response) => {
  Internship.removeInternships((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || "Error when deleting all the Internships",
      });
    } else {
      response.send({
        message: "All internships were deleted successfully.",
      });
    }
  });
};

export default InternshipController;
