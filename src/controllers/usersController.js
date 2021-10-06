const fs = require("fs");
const path = require("path");

const { validationResult, body } = require("express-validator");
const bcrypt = require("bcryptjs");

const db = require("../database/models");
const Op = db.Sequelize.Op;

// traemos modelo con métodos
//const User = require("../models/User");

const usersController = {
  login: (req, res) => {
    res.render("users/login");
  },

  //------------------------------------------------------------------------//
  //------------------------------------------------------------------------//
  //--------------------------- Process Login ------------------------------//
  //------------------------------------------------------------------------//
  //------------------------------------------------------------------------//

  processLogin: async (req, res) => {
    const resultValidation = validationResult(req);
    // Validacion de errores
    if (resultValidation.errors.length > 0) {
      return res.render("users/login", {
        errors: resultValidation.mapped(), //convierto el array errors en obj.literal
        oldData: req.body,
      });
    } else {
      let user;
      try {
        // Busco un email dentro de la base de datos que matchee con el que esta pasado por el formulario
        user = await db.User.findOne({
          include: ["image"],
          where: {
            email: req.body.email
          }
        });
      } catch (e) {
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
      if (user) {
        // Validamos si el password que ingresamos coincide con el de la base de datos
        let validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (validPassword) {
          delete user.password;

          req.session.userLogged = user;
          //console.log(user);

          // creamos cookie
          if (req.body.remember) {
            res.cookie("userEmail", req.body.email, {
              maxAge: 1000 * 60 * 60 * 24, //24 horas
            });
          }
          return res.redirect("/users/profile");
        }
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
    }
  },

  register: (req, res) => {
    res.render("users/register");
  },


  //------------------------------------------------------------------------//
  //------------------------------------------------------------------------//
  //---------------------------  Create User  ------------------------------//
  //------------------------------------------------------------------------//
  //------------------------------------------------------------------------//









  /*
    createUser2: async (req, res) => {
      const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
        return res.render("users/register", {
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      } else {
        let user;
        try {
          // Busco un email dentro de la base de datos que matchee con el que esta pasado por el formulario
          user = await db.User.findOne({
            where: {
              email: req.body.email
            }
          });
        } catch (e) {
  
  
          // si no se encuentra el email
          return res.render("users/register", {
            errors: {
              email: {
                msg: "Usuario no registrado",
              },
            },
            oldData: req.body,
          });
        }
      }
    },*/





  createUser: async (req, res) => {
    const resultValidation = validationResult(req);

    // si hay errores
    if (resultValidation.errors.length > 0) {
      return res.render("users/create", {
        errors: resultValidation.mapped(), //convierto el array errors en obj.literal
        oldData: req.body,
      });
    } else {


      let imagenEncontrada;
      if (req.file) {
        imagenEncontrada = await db.UserImage.create({
          name: req.file.filename,
        })
      } else {
        imagenEncontrada = await db.UserImage.findOne({
          where: {
            id: 1
          }
        })
      }
      let password = req.body.password;

      const newUser = await db.User.create({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(password, 10),
        image_id: imagenEncontrada.id,
        role_id: 1,
      });


      return res.redirect("/users/login/");
    }
    // .catch((e) => res.send(e));
  },










  profile: (req, res) => {
    res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail"); //destruye lo que hay en session y cookies
    return res.redirect("/");
  },

  delete: (req, res) => {
    res.render("users/userDelete", {
      user: req.session.userLogged,
    });
  },

  destroy: (req, res) => {
    User.delete(req.session.userLogged.id);
    res.redirect("/");
  },

  // admin: (req, res) => {
  //   res.render("users/userAdmin", { title: "Admin - Sign Up" });
  // },
};
module.exports = usersController;
