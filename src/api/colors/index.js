const express = require('express');
const { Color } = require('../../db/models');
const router = express.Router();


router.get("/", async (req, res, next) => {
  try {
    const colors = await Color.findAll();
    // console.log("COLORS: ", colors)
    res.json(colors)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
