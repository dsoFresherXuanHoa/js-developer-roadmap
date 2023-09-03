const { Sequelize, DataTypes } = require("sequelize");

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
    const users = await Account.findAll({ raw: true });
    users.forEach((v, i, o) => console.log(v));

    const user = await Account.findByPk(1, { raw: true });
    console.log(user);
    
    const user = await Account.findOne({ raw: true });
    console.log(user);
    */
    const { count, rows } = await Account.findAndCountAll({ raw: true });
    console.log(count);
    rows.forEach((v, i, o) => console.log(v));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

process();
