const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TransactionScheme = new Schema({
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  person: { type: Schema.Types.ObjectId, ref: 'Person', required: true },
  settled: { type: Boolean, default: false }
});

module.exports = mongoose.model('Transaction', TransactionScheme);
