const AuthController = () => {};

AuthController.login = (request, response) => {
  response.json({ username: response.locals.currentUser });
};

AuthController.logout = (request, response) => {
  request.session.destroy(function (err) {
    response.redirect("https://login.vt.edu/profile/cas/logout");
  });
};

export default AuthController;