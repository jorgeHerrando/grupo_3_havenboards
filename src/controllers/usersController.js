const usersController = {
  login: (req, res) => {
    res.render("users/login", { title: "Havenboards - Log In" });
  },
  register: (req, res) => {
    res.render("users/register", { title: "Havenboards - Sign Up" });
  },
};
module.exports = usersController;
