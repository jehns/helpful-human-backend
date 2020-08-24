const express = require('express');
const sequelize = require('sequelize');
const { Color, ColorGroup } = require('../../db/models');
const paginate = require('../../utilities/paginate')
const router = express.Router();


router.get("/", async (req, res, next) => {
  try {
    if (!req.query.page || !req.query.pageSize) throw 'Must include page and page size';
    const pagination = paginate(Number(req.query.page), Number(req.query.pageSize))
    const colors = await Color.findAndCountAll({...pagination,
      attributes: ['id', 'hex', 'colorGroupId']
    });
    const colorGroup = await ColorGroup.findAll({attributes: ['id', 'name']});
    res.json({...colors, colorGroup})
  } catch (err) {
    next(err);
  }
});


router.get("/random", async (req, res, next) => {
  try {
    const randomColor = await Color.findOne({order: [[sequelize.fn('RANDOM')]]});
    const similarColors = await Color.findAll({where: { colorGroupId: randomColor.colorGroupId}});
    res.json({randomColor, similarColors})
  } catch (err) {
    next(err);
  }
});


router.get("/group", async (req, res, next) => {
  try {
    if (!req.query.groupId) throw 'Must include groupId';
    const colors = await Color.findAll({
      where: {
        colorGroupId: req.query.groupId
      }
    });
    res.json({colors})
  } catch (err) {
    next(err);
  }
});


module.exports = router;
