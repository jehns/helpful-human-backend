const express = require('express');
const sequelize = require('sequelize');
const { Color } = require('../../db/models');
const paginate = require('../../utilities/paginate')
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    if (!req.query.page || !req.query.pageSize) throw 'Must include page and page size';
    const pagination = paginate(Number(req.query.page), Number(req.query.pageSize))
    const colors = await Color.findAll(pagination);
    res.json(colors)
  } catch (err) {
    next(err);
  }
});

router.get("/random", async (req, res, next) => {
  try {
    const randomColor = await Color.findOne({order: [ [sequelize.fn('RANDOM')] ]});
    res.json(randomColor)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
