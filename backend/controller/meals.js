const fs = require("node:fs/promises");

exports.getMeals = async (req, res, next) => {
  const meals = await fs.readFile("./data/available-meals.json", "utf8");
  res.json(JSON.parse(meals));
};
