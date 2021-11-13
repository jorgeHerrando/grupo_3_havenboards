// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const apiProductsController = require("../../controllers/api/apiProductsController");

// TODOS LOS PRODUCTOS
router.get("/", apiProductsController.list);
// EL ÚLTIMO PRODUCT
router.get("/last", apiProductsController.lastProduct);

// CATEGORÍAS
router.get("/categories", apiProductsController.categories);
// SUBCATEGORÍAS
router.get("/subcategories", apiProductsController.subcategories);

// MARCAS
router.get("/brands", apiProductsController.brands);

// ORDERS
router.get("/orders", apiProductsController.orders);
// SALES
router.get("/sales", apiProductsController.sales);
// TOP 5
router.get("/topFive/:top?", apiProductsController.topFive);

// DETALLE PRODUCTO
router.get("/:id", apiProductsController.detail);

module.exports = router;
