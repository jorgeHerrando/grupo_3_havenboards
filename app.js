const express = require("express");
const app = express();
const path = require("path");

const rutasMain = require("./src/routes/main");
const rutasUsers = require("./src/routes/users");
const rutasProducts = require("./src/routes/products");

app.use(express.static("public"));


app.set("view engine", "ejs");

// express accede directamente a views a la hora de renderizar si está en la raíz del proyecto. Si no (está dentro de 'src'), hay que darle la ruta con el siguiente comando
app.set("views", path.join(__dirname, "src/views"));

//app.use(express.static(path.join(__dirname, 'src/public')));

app.use("/", rutasMain);
app.use("/users", rutasUsers);
app.use("/products", rutasProducts);

let mensaje = () => {
  console.log("Servidor funcionando en puerto 3000");
};

app.listen(3000, mensaje());

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname + "/src/views/index.html"));
// });

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/src/views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/src/views/login.html"));
});

app.get("/shop", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/src/views/shop.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/src/views/productDetail.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/src/views/productCart.html"));
});
