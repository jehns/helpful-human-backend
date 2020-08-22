const Sequelize = require('sequelize');
const db = require('../db.js');

const ColorGroup = db.define('colorGroup', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


module.exports = ColorGroup;
