const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PersonScheme = new Schema({
  id: Number,
  name: { type: String, required: true }
});

module.exports = mongoose.model('Person', PersonScheme);
