const { Sequelize, Model, DataTypes } = require("sequelize");

const User = require("./User");
const Order = require("./Order");
const Category = require("./Category");
const Product = require("./Product");
const Admin = require("./Admin");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

User.initModel(sequelize);
Order.initModel(sequelize);
Category.initModel(sequelize);
Product.initModel(sequelize);
Admin.initModel(sequelize);

module.exports = {
  sequelize,
  User,
  Order,
  Category,
  Product,
  Admin,
};
