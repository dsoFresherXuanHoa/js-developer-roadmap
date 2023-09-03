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

    const Employee = sequelize.define(
      "Employee",
      {
        name: DataTypes.STRING,
      },
      {
        tableName: "employees",
        timestamps: false,
      }
    );

    const Device = sequelize.define(
      "Device",
      {
        imei: DataTypes.STRING,
      },
      {
        tableName: "devices",
        timestamps: false,
      }
    );

    const Person = sequelize.define(
      "Person",
      {
        name: DataTypes.STRING,
      },
      {
        tableName: "people",
        timestamps: false,
      }
    );

    Employee.hasOne(Account, { foreignKey: "employee_id" });
    Account.belongsTo(Employee, { foreignKey: "employee_id" });

    Account.hasMany(Device, { foreignKey: "account_id" });
    Device.belongsTo(Account, { foreignKey: "account_id" });

    Person.belongsToMany(Device, {
      through: "person_devices",
      uniqueKey: "device_id",
    });
    Device.belongsToMany(Person, {
      through: "person_devices",
      uniqueKey: "person_id",
    });

    await sequelize.sync({ force: true });
    /**
     */
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

process();
