const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');

const usersController = require("../controllers/usersController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname + "../../../public/images/tall")); //ruta donde se guardarán los archivos subidos a los form
    },
    // esto lo hace por cada file. Para acceder a un array se hace desde req.fileS
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

let upload = multer({ storage: storage });

router.post("/", upload.single('image'), usersController.createUser);
router.get("/userAdmin", usersController.admin);
router.get("/login", usersController.login);
router.get("/register", usersController.register);




module.exports = router;
