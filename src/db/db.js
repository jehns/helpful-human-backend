const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL,
  {
    logging: false,
    dialect: "postgres"
  }
)

module.exports = db;
