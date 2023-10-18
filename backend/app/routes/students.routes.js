import StudentController from "../controllers/students.controller.js";
import express from "express";
const StudentRouter = (app) => {
  const router = express.Router();

  // Create a new Student
  router.post("/", StudentController.create);

  // Get all Students
  router.get("/", StudentController.getStudents);

  // Get one Student by ID
  router.get("/:studentId", StudentController.getStudentById);

  // Update one Student by ID
  router.put("/:studentId", StudentController.updateStudentById);

  // Remove one Student by ID
  router.delete("/:studentId", StudentController.removeStudentById);

  // Remove all Students
  router.delete("/", StudentController.removeStudents);

  app.use("/api/students", router);
};

export default StudentRouter;