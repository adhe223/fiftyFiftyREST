const Transactions = require('../../db/models/Transaction');

const getAllTxs = (req, res) => {
  Transactions.find((err, txs) => {
    if (err) {
      const errLog = `Error retrieving txs: ${err}`;
      console.log(errLog);
      res.send(errLog);
    } else {
      res.send(txs);
    }
    res.end();
  });
};

const getCurrentTxs = (req, res) => {
  res.send('NOT IMPLEMENTED: Tx current GET');
};

const createTx = (req, res) => {
  const tx = {
    description: req.body.description,
    date: req.body.date,
    amount: req.body.amount,
    person: req.body.person,
    settled: req.body.settled
  };

  Transactions.insertOne(tx, (err) => {
    if (err) {
      console.log(`Error inserting tx: ${err}`);
    }
    console.log('Document inserted');
  });
};

module.exports = {
  getAllTxs,
  getCurrentTxs,
  createTx
};
