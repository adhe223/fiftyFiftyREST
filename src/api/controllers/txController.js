const db = require('../../db');

const getAllTxs = (req, res) => {
  db.query('SELECT * FROM tx', (err, result, fields) => {
    if (err) {
      return res.send(err.message);
    }

    return res.json(result);
  });
};

const getTxByCompany = (req, res) => {
  db.query(
    'SELECT * FROM tx WHERE INSTR(companyName,?)>0',
    [req.query.searchTerm],
    (err, result, fields
    ) => {
      if (err) {
        return res.send(err.message);
      }

      return res.json(result);
    });
};

const createTx = (req, res) => {
  const tx = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    streetAddress: req.body.streetAddress,
    streetAddress2: req.body.streetAddress2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    phoneNumber: req.body.phoneNumber,
  };

  db.query('INSERT INTO tx SET ?', tx, (err, result) => {
    if (err) {
      return res.send(err.message);
    } else {
      console.log('Inserted ' + result.affectedRows + ' row(s)');
    }
    return res.end();
  });
};

const getTx = (req, res) => {
  const txId = req.params.txId;

  db.query('SELECT * FROM tx WHERE txId = ?', [txId], (err, result) => {
    if (err) {
      return res.send(err.message);
    } else {
      return res.json(result);
    }
  });
};

const updateTx = (req, res) => {
  const txId = req.params.txId;
  const changedColumns = req.body.changed;
  let errMessages = '';

  Object.keys(changedColumns).forEach(column => {
    const columnValue = changedColumns[column];

    db.query(
      'UPDATE tx SET ?? = ? where txId = ?',
      [column, columnValue, txId],
      (err, result) => {
        if (err) {
          errMessages += err.message;
        } else {
          console.log('Updated column in ' + result.affectedRows + ' row(s)');
        }
      },
    );
  });

  if (errMessages) {
    return res.send(errMessages);
  }
  return res.end();
};

const deleteTx = (req, res) => {
  const txId = req.params.txId;

  db.query('DELETE FROM tx WHERE txId = ?', [txId], (err, result) => {
    if (err) {
      return res.send(err.message);
    } else {
      console.log('Deleted ' + result.affectedRows + ' row(s)');
    }
    return res.end();
  });
};

module.exports = {
  getAllTxs,
  getTxByCompany,
  createTx,
  getTx,
  updateTx,
  deleteTx,
};
