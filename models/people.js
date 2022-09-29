module.exports = {
  getAll,
  getOne,
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
  console.log(id)
  console.log(people.find(person => person.id === id))
   return people.find(person => person.id === id);
}
