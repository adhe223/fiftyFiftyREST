const express = require('express');
const app = express();
const txRoutes = require('./api/routes/txRoutes');
const personRoutes = require('./api/routes/personRoutes');
const bodyParser = require('body-parser');
const db = require('./db/db');

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

txRoutes(app);
personRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);

// More graceful fallback
app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

db.setupDb();
