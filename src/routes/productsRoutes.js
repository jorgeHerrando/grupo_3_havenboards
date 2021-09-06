// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Validations ************
const upload = require("../middlewares/multerValidationProduct");
const validations = require("../middlewares/createProductValidation");

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.shop);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create); //manda vista del form a través del método create del controlador
router.post(
  "/",
  upload.array("image", 6),
  validations,
  productsController.store
);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/:id/edit", productsController.productEditView); // manda el form de edición con toda la data del producto a editar
router.put("/:id", upload.array("image"), productsController.productEditUpload);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

/*** IR AL CARRITO ***/
router.get("/productCart", productsController.productCart);

module.exports = router;
