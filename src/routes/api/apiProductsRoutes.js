// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const apiProductsController = require("../../controllers/api/apiProductsController");

// Listado de users
router.get("/", apiProductsController.list); //para listar todos los users

router.get("/:id", apiProductsController.detail); //para dar detalle de un user

module.exports = router;
