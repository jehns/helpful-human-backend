const express = require('express');
const { Color } = require('../../db/models');
const router = express.Router();
const paginate = require('../../utilities/paginate')

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

module.exports = router;
