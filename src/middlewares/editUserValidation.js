const path = require("path");
const { body } = require("express-validator");

const validations = [
  body("firstName")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 1, max: 20 })
    .withMessage("El nombre tiene que tener entre 1 y 20 caracteres"),
  body("lastName")
    .notEmpty()
    .withMessage("Tienes que escribir un apellido")
    .bail()
    .isLength({ min: 1, max: 20 })
    .withMessage("El apellido tiene que tener entre 1 y 20 caracteres"),
  body("streetName").optional(),
  body("number")
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage("Debes escribir un número"),
  body("apartment").optional(),
  body("province").optional(),
  body("city").optional(),
  body("postalCode")
    .optional({ checkFalsy: true })
    .bail()
    .isNumeric()
    .withMessage("Debes escribir un número"),
  body("country").optional(),
];

module.exports = validations;
