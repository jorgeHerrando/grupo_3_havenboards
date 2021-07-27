const productsController = {
  shop: (req, res) => {
    res.render("products/shop"); /*, title: 'Todos los productos');*/
  },
  productCart: (req, res) => {
    res.render("products/productCart");
  },
  productDetail: (req, res) => {
    res.render("products/productDetail");
  },
  productUp: (req, res) => {
    res.render("products/productUp");
  },
};
module.exports = productsController;
