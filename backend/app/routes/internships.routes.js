import InternshipController from "../controllers/internships.controller.js";
import express from "express";
const InternshipRouter = (app) => {
  const router = express.Router();

  // Create a new Internship
  router.post("/", InternshipController.create);

  // Get all Internships
  router.get("/", InternshipController.getInternships);

  // Get one Internship by ID
  router.get("/:internshipId", InternshipController.getInternshipById);

  // Update one Internship by ID
  router.put("/:internshipId", InternshipController.updateInternshipById);

  // Remove one Internship by ID
  router.delete("/:internshipId", InternshipController.removeInternshipById);

  // Remove all Internships
  router.delete("/", InternshipController.removeInternships);

  app.use("/api/internships", router);
};

export default InternshipRouter;