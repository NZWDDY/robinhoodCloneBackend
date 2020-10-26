const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { authenticated } = require('./security-utils');

const router = express.Router();

const db = require('../../db/models');

const { Position } = db;


router.get('/', asyncHandler(async (req, res) => {
  const positions = await Position.findAll({
    order: [['createdAt', 'ASC']],
    attributes: ['id', 'stockSymbol', 'stockName', 'currentPrice',
    'buyPrice', 'shares'],
  });
  res.json({ positions });
}));



module.exports = router;
