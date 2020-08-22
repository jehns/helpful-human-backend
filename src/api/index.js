const express = require('express');

const router = express.Router();

router.use("/colors", require("./colors"));


module.exports = router;
