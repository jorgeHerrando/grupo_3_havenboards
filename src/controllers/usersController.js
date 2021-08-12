const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json"); //ruta a nuestra DB JSON
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); // pasamos de formato JSON a JS

const usersController = {
  login: (req, res) => {
    res.render("users/login", { title: "Havenboards - Log In" });
  },
  register: (req, res) => {
    res.render("users/adminRegister", { title: "Havenboards - Sign Up" });
  },
<<<<<<< HEAD
  // admin: (req, res) => {
  //   res.render("users/userAdmin", { title: "Admin - Sign Up" });
  // },
  createUser: (req, res) => {
=======
  admin: (req, res) => {
    res.render("users/userAdmin", { title: "Admin - Sign Up" });
  },
  createUser: (req, res) => {
    
>>>>>>> 55220b17f82fc6c789cd91ae05c2f5f697c6d4b9
    // crear nuevo id para el usuario creado
    let newId = users[users.length - 1].id + 1;

    // le damos los valores al nuevo usuario de cada uno de los campos del form
<<<<<<< HEAD
    let newUser = {
      id: newId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
=======
    let newUsers = {
      id: newId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
>>>>>>> 55220b17f82fc6c789cd91ae05c2f5f697c6d4b9
      category: req.body.category,
      image: req.file.originalname,
    };

<<<<<<< HEAD
    // agregamos nuevo usuario
    users.push(newUser);
=======
    // agregamos nuevo producto
    users.push(newUsers);
>>>>>>> 55220b17f82fc6c789cd91ae05c2f5f697c6d4b9

    // reescribimos la BD en formato JSON
    fs.writeFileSync(usersFilePath, JSON.stringify(users));

<<<<<<< HEAD
    res.redirect("/users/login");
=======
    res.redirect("/users/" + newId);
>>>>>>> 55220b17f82fc6c789cd91ae05c2f5f697c6d4b9
  },
};
module.exports = usersController;
