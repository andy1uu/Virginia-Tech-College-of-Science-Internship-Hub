import AuthController from "../controllers/auth.controller.js";
import CasLogin from "../auth/auth.login.js";
import express from "express";

const AuthRouter = (app) => {
  const router = express.Router();
  // Login to VT CAS
  router.get("/login", CasLogin, AuthController.login);

  // Logout from VT CAS
  router.get("/logout", AuthController.logout);

  app.use("/api/auth", router);
};

export default AuthRouter;
