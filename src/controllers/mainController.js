const mainController = {
  index: (req, res) => {
    res.render("index");
  },
  info: (req, res) => {
    res.render("main/info");
  },
};
module.exports = mainController;
