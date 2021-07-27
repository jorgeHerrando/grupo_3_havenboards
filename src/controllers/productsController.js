const productsController = {
  shop: (req, res) => {
    res.render("products/shop", { title: "Havenboards - Tienda" });
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
