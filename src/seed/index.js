const { ColorGroup, Color } = require('../db/models')
const { COLORS } = require('./COLOR_CONSTANTS')


module.exports = async () => {
  const Red = await ColorGroup.create({ name: 'Red', id: 1});
  const Orange = await ColorGroup.create({ name: 'Orange', id: 2});
  const Yellow = await ColorGroup.create({ name: 'Yellow', id: 3});
  const Green = await ColorGroup.create({ name: 'Green', id: 4});
  const Blue = await ColorGroup.create({ name: 'Blue', id: 5});
  const Purple = await ColorGroup.create({ name: 'Purple', id: 6});
  const Brown = await ColorGroup.create({ name: 'Brown', id: 7});
  const Gray = await ColorGroup.create({ name: 'Gray', id: 8});

  const colors = await Promise.all([
    ...COLORS.Red.map(color => {
      return Color.create({
        hex: color,
        colorGroupId: Red.dataValues.id
      })
    }),
    ...COLORS.Orange.map(color => {
      return Color.create({
        hex: color,
        colorGroupId: Orange.dataValues.id
      })
    }),
    ...COLORS.Yellow.map(color => {
      return Color.create({
        hex: color,
        colorGroupId: Yellow.dataValues.id
      })
    }),
    ...COLORS.Green.map(color => {
      return Color.create({
        hex: color,
        colorGroupId: Green.dataValues.id
      })
    }),
    ...COLORS.Blue.map(color => {
      return Color.create({
        hex: color,
        colorGroupId: Blue.dataValues.id
      })
    }),
    ...COLORS.Purple.map(color => {
      return Color.create({
        hex: color,
        colorGroupId: Purple.dataValues.id
      })
    }),
    ...COLORS.Brown.map(color => {
      return Color.create({
        hex: color,
        colorGroupId: Brown.dataValues.id
      })
    }),
    ...COLORS.Gray.map(color => {
      return Color.create({
        hex: color,
        colorGroupId: Gray.dataValues.id
      })
    }),
  ])

  console.log(`successfully seeded ${colors.length} colors`)

  return true
}
