import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadedMeals, setloadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        const error = new Error("Something went wrong");
        throw error;
      }

      const meals = await response.json();

      setloadedMeals(meals);
    };
    fetchMeals();
  }, []);

  return (
    <>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
};

export default Meals;
