const mongoose = require('mongoose');
const passwords = require('./passwords');

const mongoDB = `mongodb://zaber123:${passwords.db}@ds040877.mlab.com:40877/fiftyfifty`;
mongoose.connect(mongoDB, {
  useMongoClient: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
