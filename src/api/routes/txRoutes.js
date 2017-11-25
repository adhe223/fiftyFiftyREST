module.exports = function (app) {
  const tx = require('../controllers/txController');

  app.route('/txs')
    .get(tx.getAllTxs)
    .post(tx.createTx);

  app.route('/txs/current')
    .get(tx.getCurrentTxs);
};
