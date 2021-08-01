const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const mainRouter = require("./src/routes/main");
const usersRouter = require("./src/routes/users");
const productsRouter = require("./src/routes/products");

app.use(express.static("public"));

// express accede directamente a views a la hora de renderizar si está en la raíz del proyecto. Si no (está dentro de 'src'), hay que darle la ruta con el siguiente comando
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

let mensaje = () => {
  console.log("Servidor funcionando en puerto 3000");
};

app.listen(3000, mensaje());
