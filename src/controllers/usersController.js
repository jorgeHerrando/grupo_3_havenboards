const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../data/users.json"); //ruta a nuestra DB JSON
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); // pasamos de formato JSON a JS

const usersController = {
  login: (req, res) => {
    res.render("users/login");
  },
  register: (req, res) => {
    res.render("users/register");
  },
  processLogin: (req, res) => {
    // if(!users) {
    //   users = [];
    // }
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email == req.body.email &&
        bcrypt.compareSync(req.body.password, users[i].password)
      ) {
        res.render("adminIndex");
      }
    }
    res.render("users/login", { title: "Havenboards - Log In" });
  },
  // admin: (req, res) => {
  //   res.render("users/userAdmin", { title: "Admin - Sign Up" });
  // },
  createUser: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(), //convierto el array errors en obj.literal
        oldData: req.body,
      });
    }

    // crear nuevo id para el usuario creado
    let newId = users[users.length - 1].id + 1;

    // le damos los valores al nuevo usuario de cada uno de los campos del form
    let newUser = {
      id: newId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email,
      category: req.body.category ? req.body.category : "user",
      image: req.file ? req.file.filename : "defaultAvatar.png", //si no sube le ponemos el avatar default
    };

    // agregamos nuevo usuario
    users.push(newUser);

    // reescribimos la BD en formato JSON
    fs.writeFileSync(usersFilePath, JSON.stringify(users));

    res.render("./users/login");
  },
};
module.exports = usersController;
