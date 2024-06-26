const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

async function adminSeeder() {
  const hashedPassword = await bcrypt.hash("123", 10);
  const specialHashedPassword = await bcrypt.hash("1234", 10);
  const admins = [];
  const specialAdmin = {
    firstname: "Admin",
    lastname: "Admin",
    email: "admin@Admin",
    password: specialHashedPassword,
  };
  admins.push(specialAdmin);

  for (let i = 0; i < 3; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const newAdmin = {
      firstname,
      lastname,
      email: faker.internet.email({ firstname: firstname, lastName: lastname }),
      password: hashedPassword,
    };
    admins.push(newAdmin);
  }

  await Admin.bulkCreate(admins);
  console.log("Admin seeder is running");
}
module.exports = adminSeeder;
