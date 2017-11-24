const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TransactionScheme = new Schema({
  id: Number,
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  person: { type: Schema.Types.ObjectId, required: true },
  settled: Boolean
});

module.exports = mongoose.model('Transaction', TransactionScheme);
