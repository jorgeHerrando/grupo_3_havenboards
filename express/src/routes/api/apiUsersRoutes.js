// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const apiUsersController = require("../../controllers/api/apiUsersController");

// LISTADO DE USERS
router.get("/", apiUsersController.list);

// PROCESAR LOGIN
router.post("/login", apiUsersController.processLogin);

// USER DETAILS
router.get("/:id", apiUsersController.detail);

module.exports = router;
