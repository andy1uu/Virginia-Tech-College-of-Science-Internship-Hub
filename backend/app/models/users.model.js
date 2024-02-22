import sql from "../database.js";

// Constructor
const User = function (user) {
  this.userName = user.userName;
  this.userTimeStamp = user.userTimeStamp;
};

export default User;
