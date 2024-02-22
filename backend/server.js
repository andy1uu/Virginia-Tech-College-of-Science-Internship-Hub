import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import CasStrategy from "./app/auth/auth.cas.js";
import SkillRouter from "./app/routes/skills.routes.js";
import StudentRouter from "./app/routes/students.routes.js";
import InternshipRouter from "./app/routes/internships.routes.js";
import AuthRouter from "./app/routes/auth.routes.js";

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(
  session({
    secret: "this is totally secret",
    resave: false,
    saveUninitialized: false,
  })
);

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

// CAS
app.use(passport.initialize());
app.use(passport.session());
passport.use(CasStrategy);
passport.serializeUser(function (user, done) {
  done(null, user.username);
});
passport.deserializeUser(function (username, done) {
  done(null, {
    username,
  });
});

// Set Current User
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

AuthRouter(app);
SkillRouter(app);
StudentRouter(app);
InternshipRouter(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
