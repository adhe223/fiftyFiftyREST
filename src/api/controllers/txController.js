const Transactions = require('../../db/models/Transaction');

const getAllTxs = (req, res) => {
  Transactions.find()
    .populate('person')
    .exec((err, txs) => {
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
  Transactions.find({ settled: false })
    .populate('person')
    .exec((err, currentTxs) => {
      if (err) {
        const errLog = `Error retrieving current txs: ${err}`;
        console.log(errLog);
        res.send(errLog);
      } else {
        res.send(currentTxs);
      }
      res.end();
    });
};

const createTx = (req, res) => {
  const tx = new Transactions({
    description: req.body.description,
    date: req.body.date,
    amount: req.body.amount,
    person: req.body.personId,
    settled: req.body.settled
  });

  tx.save(tx, err => {
    if (err) {
      const errLog = `Error inserting tx: ${err}`;
      console.log(errLog);
      res.send(errLog);
    } else {
      console.log('Document inserted');
    }
    res.end();
  });
};

module.exports = {
  getAllTxs,
  getCurrentTxs,
  createTx
};
