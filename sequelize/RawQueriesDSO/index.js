const { Sequelize, DataTypes, QueryTypes } = require("sequelize");

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
    const [results, metadata] = await sequelize.query(
      "SELECT * FROM accounts WHERE id = :id",
      {
        raw: true,
        replacements: { id: 1 },
        type: QueryTypes.SELECT,
      }
    );
    console.log(results);
    console.log(metadata);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

process();
