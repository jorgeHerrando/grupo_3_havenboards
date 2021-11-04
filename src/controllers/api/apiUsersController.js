// para trabajar con la DB
const db = require("../../database/models");

const Op = db.Sequelize.Op;

const apiUsersController = {
  // listar todos users
  list: async (req, res) => {
    try {
      const users = await db.User.findAll({
        attributes: ["id", "firstName", "lastName", "email"],
        order: [["id", "ASC"]],
      });

      users.forEach((user) => {
        return (user.dataValues.detail = `http://localhost:3000/api/users/${user.id}`);
      });

      // otra forma de hacerlo
      // users.forEach((user) => {
      //   return user.setDataValue(
      //     "detail",
      //     `http://localhost:3000/api/users/${user.id}`
      //   );
      // });

      res.status(200).json({
        count: users.length,
        users,
      });
    } catch (e) {
      res.status(500).json({
        meta: {
          status: "error",
        },
        error: "Users not found",
      });
    }
  },

  // detalle de un user
  detail: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await db.User.findOne({
        include: ["image"],
        attributes: { exclude: ["password", "role_id", "image_id"] },
        where: {
          id: id,
        },
      });

      // sobreescribimos el valor de image en la muestra al cliente
      user.dataValues.image = `/images/users/${user.image.name}`;
      // user.setDataValue("image", `/images/users/${user.image.name}`);

      // le mandamos el user con la info
      res.status(200).json({
        user,
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

module.exports = apiUsersController;
