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

    const iset = Account.build({ username: "iset", password: "iset" });
    await iset.save();
    
    const iset = await Account.create({ username: "iset", password: "iset" });
    console.log("Record has been saved!");

    const iset = await Account.create({ username: "iset", password: "iset" });
    iset.password = "";
    await iset.save();
    console.log("Record has been updated!");
    */

    const iset = await Account.create({ username: "iset", password: "iset" });
    console.log("Record has been saved!");
    await iset.destroy();
    console.log("Record has been deleted!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

process();
