import passport from "passport";
const CasLogin = (request, response, next) => {
  passport.authenticate("cas", function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      request.session.messages = info.message;
      return response.redirect("/check");
    }

    request.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      request.session.messages = "";
      return response.redirect("/");
    });
  })(request, response, next);
};

export default CasLogin;
