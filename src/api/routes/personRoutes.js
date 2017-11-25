module.exports = function (app) {
  const person = require('../controllers/personController');

  app.route('/people')
    .get(person.getAllPeople);

  app.route('/person')
    .post(person.createPerson);
};
