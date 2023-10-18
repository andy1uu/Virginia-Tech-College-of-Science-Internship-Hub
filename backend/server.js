import express from "express";
import cors from "cors";
import SkillRouter from "./app/routes/skills.routes.js";
import StudentRouter from "./app/routes/students.routes.js";
import InternshipRouter from "./app/routes/internships.routes.js";

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (request, response) => {
  response.json({
    message:
      "Welcome to the backend for the VT COS Internship Hub application.",
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

SkillRouter(app);
StudentRouter(app);
InternshipRouter(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
