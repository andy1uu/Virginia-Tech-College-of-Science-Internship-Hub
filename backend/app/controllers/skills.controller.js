import Skill from "../models/skills.model.js";

const SkillController = () => {
};
// Create a new Skill
SkillController.create = (request, response) => {
  // Validate the Request
  if (!request.body) {
    response.status(400).send({ message: "Request content can not be empty!" });
  }

  // Create a new Skill
  const newSkill = new Skill({ skillName: request.body.skillName });

  // Preform the Create Operation on the DataBase
  Skill.create(newSkill, (error, data) => {
    if (error) {
      response
        .status(500)
        .send({ message: error.message || "Error when creating a new Skill" });
    } else {
      response.send(data);
    }
  });
};

// Get all Skills
SkillController.getSkills = (request, response) => {
  Skill.getSkills((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || "Error when getting all Skills",
      });
    } else {
      response.send(data);
    }
  });
};

// Get one Skill by ID
SkillController.getSkillById = (request, response) => {
  const skillId = request.params.skillId;

  Skill.getSkillById(skillId, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        response.status(404).send({
          message: "Skill not found with Id: " + skillId,
        });
      } else {
        response.status(500).send({
          message:
            error.message ||
            "Error when getting the Skill with the Id: " + skillId,
        });
      }
    } else {
      response.send(data);
    }
  });
};

// Update one Skill by ID
SkillController.updateSkillById = (request, response) => {
  // Validate the Request
  if (!request.body) {
    response.status(400).send({ message: "Request content can not be empty!" });
  }

  const skillId = request.params.skillId;

  const updatedSkill = new Skill({ skillName: request.body.skillName });

  Skill.updateSkillById(skillId, updatedSkill, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        response.status(404).send({
          message: "Skill not found with Id: " + skillId,
        });
      } else {
        response.status(500).send({
          message:
            error.message ||
            "Error when updating the Skill with the Id: " + skillId,
        });
      }
    } else {
      response.send(data);
    }
  });
};

// Remove one Skill by ID
SkillController.removeSkillById = (request, response) => {
  const skillId = request.params.skillId;

  Skill.removeSkillById(skillId, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        response.status(404).send({
          message: "Skill not found with Id: " + skillId,
        });
      } else {
        response.status(500).send({
          message:
            error.message ||
            "Error when deleting the Skill with the Id: " + skillId,
        });
      }
    } else {
      response.send({
        message:
          "Skill with the skillId: " + skillId + " was deleted successfully.",
      });
    }
  });
};

// Remove all Skills
SkillController.removeSkills = (request, response) => {
  Skill.removeSkills((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || "Error when deleting all the Skills",
      });
    } else {
      response.send({
        message: "All skills were deleted successfully.",
      });
    }
  });
};

// Get one Skill by ID
SkillController.getSkillsByJobId = (request, response) => {
  console.log(request.params);
  const jobId = request.params.jobId;

  Skill.getSkillsByJobId(jobId, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        response.status(404).send({
          message: "Skills not found with Job Id: " + jobId,
        });
      } else {
        response.status(500).send({
          message:
            error.message ||
            "Error when getting the Skills with the Job Id: " + jobId,
        });
      }
    } else {
      response.send(data);
    }
  });
};

export default SkillController;