const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

let mensaje = () => {
  console.log("Servidor funcionando en puerto 3000");
};

app.listen(3000, mensaje());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/login.html"));
});

app.get("/shop", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/shop.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/productDetail.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/productCart.html"));
});
