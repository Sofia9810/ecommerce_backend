const { Category } = require("../models/index");

async function categorySeeder() {
  const category = [{ name: "hardware" }, { name: "perifericos" }, { name: "monitores" }, { name: "equipos armados" }, { name: "laptops" }];
  Category.bulkCreate(category);
  console.log("Category seeder is running");
}
module.exports = categorySeeder;
