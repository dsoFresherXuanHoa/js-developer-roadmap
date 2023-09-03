const { Sequelize } = require("sequelize");

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

    await sequelize.close();
    console.log("Connection has been terminated!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

process();
