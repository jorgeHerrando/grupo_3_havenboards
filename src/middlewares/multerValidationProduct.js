const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname + "../../../public/images/tall")); //ruta donde se guardarán los archivos subidos a los form
  },
  // esto lo hace por cada file. Para acceder a un array se hace desde req.fileS
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});
let upload = multer({ storage: storage });

module.exports = upload;
