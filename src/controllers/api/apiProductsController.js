// para trabajar con la DB
const db = require("../../database/models");

const Op = db.Sequelize.Op;

const apiProductsController = {
  // listar todos users
  list: async (req, res) => {
    try {
      // MUESTRA DE PRODUCTOS
      const products = await db.Product.findAll({
        include: [
          { association: "images", attributes: ["name"] },
          {
            association: "sizes",
            attributes: ["name"],
            // para que no traiga la tabla intermedia
            through: { attributes: [] },
          },
        ],
        attributes: ["id", "name", "description"],
        order: [["id", "ASC"]],
      });

      //   por cada producto
      products.forEach((product) => {
        let images_url = [];
        // por cada imagen pusheamos su url en la variable de arriba
        product.images.forEach((image) => {
          images_url.push(
            `http://localhost:3000/images/products/${image.name}`
          );
        });
        // creamos dataValue images_url
        product.dataValues.images_url = images_url;

        // creamos dataValue detail
        product.dataValues.detail = `http://localhost:3000/api/products/${product.id}`;
      });

      // MUESTRA COUNT PER CATEGORÍA

      //   llamamos a todas las categorías con sus productos
      const categories = await db.Category.findAll({
        include: ["products"],
        attributes: ["name"],
        order: [["id", "ASC"]],
      });
      //   guardaremos todo en un obj.literal
      let categoryCount = {};
      //   por cada categoría introduce key-value en categoryCount
      for (let category of categories) {
        categoryCount[category.name] = category.products.length;
      }

      //   mostramos todo
      res.status(200).json({
        count: products.length,
        countByCategory: categoryCount,
        products,
      });
    } catch (e) {
      res.status(500).json({
        meta: {
          status: "error",
        },
        error: "Products not found",
      });
    }
  },

  // detalle de un user
  detail: async (req, res) => {
    // recuperamos id
    const id = req.params.id;
    try {
      // traemos los sizes
      const sizes = await db.Size.findAll({
        attributes: ["id", "name"],
      });

      // traemos el producto y todas asociaciones necesarias
      const product = await db.Product.findOne({
        include: [
          { association: "brand", attributes: ["name"] },
          { association: "category", attributes: ["name"] },
          { association: "subcategory", attributes: ["name"] },
          { association: "images", attributes: ["name"] },
          {
            association: "sizes",
            attributes: ["name"],
            // para que no traiga la tabla intermedia
            through: { attributes: [] },
          },
          {
            association: "tags",
            attributes: ["name"],
            // para que no traiga la tabla intermedia
            through: { attributes: [] },
          },
          { association: "stocks", attributes: ["amount", "size_id"] },
        ],
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "category_id",
            "subcategory_id",
            "brand_id",
          ],
        },
        where: {
          id: id,
        },
      });

      // creamos nuevos values
      product.dataValues.brand = product.brand.name;
      product.dataValues.category = product.category.name;
      // solo si tiene subcategory
      product.dataValues.subcategory = product.subcategory
        ? product.subcategory.name
        : null;

      // por cada uno de los stocks asociados al producto que trae
      for (let stock of product.stocks) {
        stock.dataValues.amount = stock.amount;
        // por cada una de las tallas
        for (let size of sizes) {
          // si coincide con la del stock
          if (size.id == stock.dataValues.size_id) {
            stock.dataValues.size = size.name;
          }
        }
        // no mostramos el size_id
        stock.dataValues.size_id = undefined;
      }

      // por cada imagen de producto
      for (let image of product.images) {
        // le añadimos una url
        image.dataValues.url = `http://localhost:3000/images/products/${image.name}`;
      }
      // le mandamos el product con la info
      res.status(200).json({
        product,
      });
    } catch (e) {
      res.status(500).json({
        meta: {
          status: "error",
        },
        error: "User not found",
      });
    }
  },
};

module.exports = apiProductsController;
