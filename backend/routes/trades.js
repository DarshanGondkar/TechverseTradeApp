// backend/routes/trades.js
const express = require('express');
const router = express.Router();
const Trade = require('../models/Trade');

// POST trade
router.post('/', async (req, res) => {
  try {
    const trade = new Trade(req.body);
    await trade.save();
    res.status(201).json(trade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all trades
router.get('/', async (req, res) => {
  try {
    const trades = await Trade.find().sort({ timestamp: -1 });
    res.json(trades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
