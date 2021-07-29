// const products = [{}];
const datosPrecio = [
  "Precio 1",
  "Precio 2",
  "Precio 3",
  "Precio 4",
  "Precio 5",
  "Precio 6",
  "Precio 7",
  "Precio 8",
  "Precio 9",
  "Precio 10",
  "Precio 11",
  "Precio 12",
];
const datosTitulo = [
  "Título 1",
  "Título 2",
  "Título 3",
  "Título 4",
  "Título 5",
  "Título 6",
  "Título 7",
  "Título 8",
  "Título 9",
  "Título 10",
  "Título 11",
  "Título 12",
];
const categoria = ["Snowboard"];

const productsController = {
  shop: (req, res) => {
    res.render("products/shop", {
      title: "Havenboards - Tienda",
      precio: datosPrecio,
      titulo: datosTitulo,
      categoria: categoria,
    });
  },
  productCart: (req, res) => {
    res.render("products/productCart", {
      title: "Havenboards - Shopping Cart",
    });
  },
  productDetail: (req, res) => {
    res.render("products/productDetail", {
      title: "Havenboards - Product Detail",
    });
  },
  productUp: (req, res) => {
    res.render("products/productUp", {
      title: "Havenboards - Loading Product",
    });
  },
};
module.exports = productsController;
