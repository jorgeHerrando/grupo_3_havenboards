const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json"); //ruta a nuestra DB JSON
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); // pasamos de formato JSON a JS

const usersController = {
  login: (req, res) => {
    res.render("users/login", { title: "Havenboards - Log In" });
  },
  register: (req, res) => {
    res.render("users/register", { title: "Havenboards - Sign Up" });
  },
  admin: (req, res) => {
    res.render("users/userAdmin", { title: "Admin - Sign Up" });
  },
  createUser: (req, res) => {
    
    // crear nuevo id para el usuario creado
    let newId = users[users.length - 1].id + 1;

    // le damos los valores al nuevo usuario de cada uno de los campos del form
    let newUsers = {
      id: newId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      category: req.body.category,
      image: req.file.originalname,
    };

    // agregamos nuevo producto
    users.push(newUsers);

    // reescribimos la BD en formato JSON
    fs.writeFileSync(usersFilePath, JSON.stringify(users));

    res.redirect("/users/" + newId);
  },
};
module.exports = usersController;
