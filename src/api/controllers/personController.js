const Person = require('../../db/models/Person');

const getAllPeople = (req, res) => {
  console.log('Finding people');
  Person.find((err, people) => {
    if (err) {
      const errLog = `Error retrieving people: ${err}`;
      console.log(errLog);
      res.send(errLog);
    } else {
      res.send(people);
    }
    res.end();
  });
};

const createPerson = (req, res) => {
  const personData = {
    name: req.body.name
  };
  const person = new Person(personData);
  person.save((err) => {
    if (err) {
      const errLog = `Error saving person: ${err}`;
      res.send(errLog);
      console.log(errLog);
    } else {
      console.log('Inserted new person!');
    }
    res.end();
  });
};

module.exports = {
  getAllPeople,
  createPerson
};
