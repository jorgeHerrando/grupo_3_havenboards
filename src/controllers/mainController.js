const mainController = {
  index: (req, res) => {
    res.render("index", {
      title: "Havenboards",
    });
  },
  info: (req, res) => {
    res.render("main/info", { title: "Havenboards - Info" });
  },
};
module.exports = mainController;
