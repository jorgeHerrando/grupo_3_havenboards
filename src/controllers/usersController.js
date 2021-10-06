const fs = require("fs");
const path = require("path");

const { validationResult, body } = require("express-validator");
const bcrypt = require("bcryptjs");

// // traemos modelo con métodos - JSON
// const User = require("../models/User");

// para trabajar con la DB
const db = require("../database/models");
const Op = db.Sequelize.Op;

const usersController = {
  login: (req, res) => {
    res.render("users/login");
  },

  processLogin: async (req, res) => {
    const resultValidation = validationResult(req);

    // validaciones express
    if (resultValidation.errors.length > 0) {
      return res.render("users/login", {
        errors: resultValidation.mapped(), //convierto el array errors en obj.literal
        oldData: req.body,
      });
    }

    // // existe el user? - JSON
    // let userToLogin = User.findByField("email", req.body.email);

    // existe el user?
    let userToLogin = await db.User.findOne({
      include: ["image", "role"],
      where: {
        email: req.body.email,
      },
    });
    // existe el user?
    if (userToLogin) {
      // el password coincide?
      let validPassword = bcrypt.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (validPassword) {
        // para no almacenar el password en session
        delete userToLogin.password;
        // se crea obj.literal session con prop userLogged y valor userToLogin
        req.session.userLogged = userToLogin;

        // creamos cookie
        if (req.body.remember) {
          res.cookie("userEmail", req.body.email, {
            maxAge: 1000 * 60 * 60 * 24, //24 horas
          });
        }
        return res.redirect("/users/profile");
      } else {
        // si contraseña inválida
        return res.render("users/login", {
          errors: {
            email: {
              msg: "Las credenciales no son válidas",
            },
          },
          oldData: req.body,
        });
      }
      // si no se encuentra el user
    } else {
      // si no se encuentra el email
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Usuario no registrado",
          },
        },
        oldData: req.body,
      });
    }
  },

  // form register
  register: (req, res) => {
    res.render("users/register");
  },

  // envío register
  createUser: async (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(), //convierto el array errors en obj.literal
        oldData: req.body,
      });
    }

    // Validación propia
    let userInDB = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // si ya existe..
    if (userInDB) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        }, //convierto el array errors en obj.literal
        oldData: req.body,
      });
    }

    // vemos si subió alguna imagen
    let avatar;
    // si la subió la creamos
    if (req.file) {
      avatar = await db.UserImage.create({
        name: req.file.filename,
      });
      // si no buscamos el default
    } else {
      avatar = await db.UserImage.findOne({
        where: {
          id: 1,
        },
      });
    }

    await db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      role_id: 1,
      image_id: avatar.id,
    });

    return res.redirect("/users/login");
  },

  // detalle usuario
  profile: (req, res) => {
    res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("userEmail"); //destruye lo que hay en session y cookies
    return res.redirect("/");
  },

  delete: (req, res) => {
    res.render("users/userDelete", {
      user: req.session.userLogged,
    });
  },

  destroy: async function (req, res) {
    const id = req.session.userLogged.id;

    // primero eliminamos asociaciones
    const userToDelete = await db.User.findOne({
      include: ["address", "image"],
      where: {
        id: id,
      },
    });

    // Address
    if (userToDelete.address) {
      await db.Address.destroy({
        where: {
          user_id: id,
        },
      });
    }

    // Avatar borrar si no es la default
    if (userToDelete.image.id != 1) {
      await db.UserImage.destroy({
        where: {
          id: userToDelete.image.id,
        },
      });
    }

    // eliminamos user
    await db.User.destroy({
      where: {
        id: id,
      },
    });

    // si no se queda logueado
    return res.redirect("/users/logout");
  },

  // admin: (req, res) => {
  //   res.render("users/userAdmin", { title: "Admin - Sign Up" });
  // },
};
module.exports = usersController;
