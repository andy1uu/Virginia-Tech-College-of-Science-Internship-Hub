import { Strategy } from "passport-cas";
import User from "../models/users.model.js";


const CasStrategy = new Strategy(
  {
    version: "CAS3.0",
    ssoBaseURL: "https://login.vt.edu/profile/cas",
    serverBaseURL: "https://vt-cos-internship-hub.vercel.app/api",
    validateURL: "/serviceValidate",
  },
  function (profile, done) {
    const login = profile.user;
    User.findOne({ username: login }, function (err, obj) {
      if (obj) {
        console.log("Found User: " + login);
        return done(null, obj);
      } else {
        console.log("Could Not Find User: " + login);
        var date = new Date();
        // Create a User
        const user = new User({
          username: login || "Untitled User",
          timeStamp: date.toLocaleString(),
        });
        // Save User
        user
          .save()
          .then((data) => {
            console.log("Created New User: " + login);
            console.log(data);
            return done(null, data);
          })
          .catch((err) => {
            console.log("Error Creating New User: " + err);
          });
      }
    });
  }
);

export default CasStrategy;