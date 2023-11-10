import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const reqConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", reqConfig, []);
  console.log(loadedMeals);
  if (isLoading) {
    return <p> Fetching Meals ..... </p>;
  }
  // if (!loadedMeals) {
  //   return <p> No meals Found</p>;
  // }
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
