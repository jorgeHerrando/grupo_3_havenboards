const path = require("path");
const { body } = require("express-validator");

// const categories = [
//   "Snowboard",
//   "Skateboard",
//   "Surf",
//   "Wakeboard",
//   "Accessory",
// ];
// const subcategories = [
//   "",
//   "Helmet",
//   "Gloves",
//   "Protection",
//   "Fin",
//   "Wax",
//   "Glasses",
// ];
// const brands = [
//   "Quicksilver",
//   "Billabong",
//   "Roxy",
//   "Patagonia",
//   "Hurley",
//   "Burton",
// ];
// const sizes = ["", "S", "M", "L"];

const validations = [
  body("name")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Tiene que tener al menos 5 caracteres"),
  body("description")
    .notEmpty()
    .withMessage("Tienes que escribir una descripción para el producto")
    .bail()
    .isLength({ min: 20 })
    .withMessage("Tiene que tener al menos 20 caracteres"),
  body("category")
    .notEmpty()
    .withMessage("Tienes que seleccionar una categoría"),
  // .bail()
  // .isIn(categories) //por si cambian el valor en el browser
  // .withMessage("La categoría no corresponde con ningún valor válido"),
  body("subcategory").optional(),
  // .isIn(subcategories) //por si cambian el valor en el browser
  // .withMessage("Valor no aceptado"),
  body("brand").notEmpty().withMessage("Tienes que seleccionar una marca"),
  // .bail()
  // .isIn(brands) //por si cambian el valor en el browser
  // .withMessage("La marca no corresponde con ningún valor válido"),
  body("price")
    .notEmpty()
    .withMessage("Tienes que marcar un precio")
    .bail()
    .isNumeric()
    .withMessage("Tienes que escribir un valor numérico"),
  body("discount")
    .notEmpty()
    .withMessage("Tienes que marcar un descuento. Si no lo tiene, introduce 0")
    .bail()
    .isNumeric()
    .withMessage("Tienes que escribir un valor numérico"),
  body("sale").notEmpty().withMessage("Tienes que marcar si está en promoción"),
  body("size").notEmpty().withMessage("Tienes que marcar un talle."),
  // .isIn(sizes).withMessage("Valor no aceptado"), //por si cambian el valor en el browser
  body("stock")
    .notEmpty()
    .withMessage("Tienes que poner un stock para el producto creado"),
  body("tag")
    .notEmpty()
    .withMessage("Tienes que poner al menos un tag para el producto creado"),
  body("image").custom((value, { req }) => {
    let file = req.files;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

    if (file.length < 1) {
      //probe mil cosas y es la única que funciona
      throw new Error("Tienes que subir al menos una imagen");
    } else {
      // si hay imagenes, chequea cada una de ellas
      for (const onefile of file) {
        let fileExtension = path.extname(onefile.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(
            `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
              ", "
            )}`
          );
        }
      }
    }
    return true;
  }),
];

module.exports = validations;
