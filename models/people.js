module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const people = [];

for (let i = 0; i < 100; i++) {
  let person = {
    id: uuidv4(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    department: faker.commerce.department(),
    job: faker.name.jobTitle(),
    status: ["Online", "Offline"][Math.floor(Math.random() * 2)],
    position: ["Senior", "Junior"][Math.floor(Math.random() * 2)],
    image: faker.image.people(1234, 2345, true),
    phone: faker.phone.number(),
    employeeId: faker.finance.account(),
  };
  person.email = faker.internet.email(person.firstName, person.lastName);
  people.push(person);
}
function getAll() {
  return people;
}

function getOne(id) {
  return people.find((person) => person.id === id);
}
function create(newPersonObj) {
  let newPerson = {
    id: uuidv4(),
    department: faker.commerce.department(),
    job: faker.name.jobTitle(),
    status: ["Online", "Offline"][Math.floor(Math.random() * 2)],
    image: faker.image.people(1234, 2345, true),
    phone: faker.phone.number(),
    employeeId: faker.finance.account(),
  };
  people.push({
    ...newPerson,
    ...newPersonObj,
  });
  return people[people.length - 1].id;
}

function deleteOne(id) {
  let personIndex = people.findIndex((p) => p.id === id);
  people.splice(personIndex, 1);
}

function update(id, newDetails) {
  let oldDetails = people.find((p) => p.id === id);
  deleteOne(id);
  people.push({
    ...oldDetails,
    ...newDetails,
  });
}
