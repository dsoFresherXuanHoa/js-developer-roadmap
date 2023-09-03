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
        tableName: "account",
        timestamps: false,
      }
    );

    /**
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");

    await Account.drop();
    console.log("Record has been deleted!");
    */

    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

process();
