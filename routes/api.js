"use strict";
let express = require('express');
let router = express.Router();


router.post('/add', (req, res) => {
  let result = parseInt(req.body.num1) + parseInt(req.body.num2);
  res.json(result);
});

router.post('/minus', (req, res) => {
  let result = parseInt(req.body.num1) - parseInt(req.body.num2);
  res.json(result);
});

router.post('/multiply', (req, res) => {
  let result = parseInt(req.body.num1) * parseInt(req.body.num2);
  res.json(result);
});

router.post('/division', (req, res) => {
  let result = parseInt(req.body.num1) / parseInt(req.body.num2);
  res.json(result);
});

router.post('/percentage', (req, res) => {
  let result = parseInt(req.body.num1) / 100.00;
  res.json(result);
});

router.post('/negative', (req, res) => {
  let result = -parseInt(req.body.num1);
  res.json(result);
});

module.exports = router;
