const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.shop);
router.get("/productCart", productsController.productCart);
router.get("/productDetail", productsController.productDetail);
router.get("/productUp", productsController.productUp);

module.exports = router;
