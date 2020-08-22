const ColorGroup = require('./ColorGroup');
const Color = require('./Color');

// relationships
Color.belongsTo(ColorGroup);


module.exports = {
  Color,
  ColorGroup
};
