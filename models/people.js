const { faker } = require("@faker-js/faker");
const people = [];
for (let i = 0; i < 100; i++) {
  let person = {
    firstName: faker.name.firstName(["female", "male"][i % 2]),
    lastName: faker.name.lastName(),
    department: faker.commerce.department(),
    job: faker.name.jobTitle(),
    status: ["Online", "Offline"][i % 2],
    position: ["Senior", "Junior"][i % 2],
    image: faker.image.people(1234, 2345, true)
  }
  person.email =  faker.internet.email(person.firstName, person.lastName)
people.push(person)
};
console.log(people[2]);
module.exports=people
