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
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un email")
    .bail()
    .isEmail()
    .withMessage("Tiene que tener formato de email"),
  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir un password")
    .bail()
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    })
    .withMessage(
      "La contraseña debe tener al menos 6 dígitos, incluir una mayúscula, una minúscula, y un número"
    ),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (file) {
      // throw new Error("Tienes que subir una imagen");
      // } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }
    return true;
  }),
  // body("category")
  //   .optional()
  //   .notEmpty()
  //   .withMessage("Tienes que escribir una categoría"),
];

module.exports = validations;
