import SkillController from "../controllers/skills.controller.js";
import express from "express";
const SkillRouter = (app) => {
  const router = express.Router();

  // Create a new Skill
  router.post("/", SkillController.create);

  // Get all Skills
  router.get("/", SkillController.getSkills);

  // Get one Skill by ID
  router.get("/:skillId", SkillController.getSkillById);

  // Update one Skill by ID
  router.put("/:skillId", SkillController.updateSkillById);

  // Remove one Skill by ID
  router.delete("/:skillId", SkillController.removeSkillById);

  // Remove all Skills
  router.delete("/", SkillController.removeSkills);

  app.use("/api/skills", router);
};

export default SkillRouter;