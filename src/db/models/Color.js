const Sequelize = require('sequelize')
const db = require('../db.js')

const Color = db.define('color', {
  hex: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


module.exports = Color
