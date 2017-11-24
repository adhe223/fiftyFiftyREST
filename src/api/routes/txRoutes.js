module.exports = function (app) {
  const tx = require('../controllers/txController');

  app.route('/txs')
    .get(tx.getAllTxs)
    .post(tx.createTx);

  app.route('/txs/search-by-company')
    .get(tx.getTxByCompany);

  app.route('/txs/:txId')
    .get(tx.getTx)
    .put(tx.updateTx)
    .delete(tx.deleteTx);
};
