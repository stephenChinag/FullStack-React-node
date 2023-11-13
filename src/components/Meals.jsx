import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const reqConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/mealss", reqConfig, []);
  console.log(loadedMeals);
  if (isLoading) {
    return <p className="center"> Fetching Meals ..... </p>;
  }
  if (error) {
    return <Error title={"fail to Fetch Meals"} message={error} />;
  }
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
