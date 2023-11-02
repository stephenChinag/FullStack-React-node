const express = require("express");
const mealController = require("../controller/meals");
const router = express.Router();

router.get("/meals", mealController.getMeals);

router.post("/order", mealController.postOrder);
module.exports = router;
