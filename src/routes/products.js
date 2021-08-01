const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.shop);
router.get("/productCart", productsController.productCart);
router.get("/productDetail", productsController.productDetail);

router.get("/productUp", productsController.productUpView);
router.post("/productUp", productsController.productUpUpload);
router.get("/productEdit", productsController.productEditView);
router.post("/productEdit", productsController.productEditUpload);

module.exports = router;
