const productsController = {
  shop: (req, res) => {
    res.render("shop");
  },
  productCart: (req, res) => {
    res.render("productCart");
  },
  productDetail: (req, res) => {
    res.render("productDetail");
  },
};
module.exports = productsController;
