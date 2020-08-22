const Sequelize = require('sequelize');

console.log("DB INFO: ", process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, process.env.POSTGRES_HOST)
const db = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD || "",
  {
    host: process.env.POSTGRES_HOST,
    logging: false,
    dialect: "postgres"
  }
)

module.exports = db;
