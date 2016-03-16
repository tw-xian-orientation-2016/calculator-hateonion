"use strict";
let express = require('express');
let router = express.Router();


router.get('/', (req, res) => {
  res.sendfile('./public/html/caculator.html');
});

module.exports = router;
