const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  "sequelize_dev",
  "root",
  "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

const process = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const Account = sequelize.define(
      "Account",
      {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: "accounts",
        timestamps: false,
      }
    );

    /**
     */

    const users = await Account.findAll({
      attributes: [
        ["username", "usr"],
        "password",
        // [sequelize.fn("COUNT", sequelize.col("password")), "count"],
      ],
      where: {
        id: {
          [Op.gte]: 0,
        },
      },
      order: [["username", "ASC"]],
      group: "password",
      limit: 2,
      offset: 1,
    });
    users.forEach((v, i, o) => console.log(v.dataValues));

    console.log(`Has ${await Account.count()} record!`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

process();
