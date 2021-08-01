const usersController = {
  login: (req, res) => {
    res.render("users/login", { title: "Havenboards - Log In" });
  },
  register: (req, res) => {
    res.render("users/register", { title: "Havenboards - Sign Up" });
  },
  createUser: (req, res) => {
    console.log(req.body);
    res.redirect("/users/login");
  },
};
module.exports = usersController;
