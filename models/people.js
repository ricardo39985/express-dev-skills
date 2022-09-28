const { faker } = require("@faker-js/faker");
const {v4: uuidv4,
} = require('uuid');
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
    image: faker.image.people(1234, 2345, true)
  }
  person.email =  faker.internet.email(person.firstName, person.lastName)
people.push(person)
};
module.exports=people
