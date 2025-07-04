// backend/models/Trade.js
const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  stockSymbol: String,
  price: Number,
  volume: Number,
  timestamp: Date
});

module.exports = mongoose.model('Trade', tradeSchema);
