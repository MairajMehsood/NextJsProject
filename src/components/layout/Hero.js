"use client";

import React, { useState, useEffect } from "react";
import Right from "../icons/Right";

const Hero = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
        );
        const result = await response.json();

        // Log the data to the console
        console.log("Fetched Data:", result);

        setMeals(result.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>

      <section className="md:flex items-center md:justify-between py-12">
        
        {meals.map((meal) => (
          <>
            <div className="">
              <h1 className="text-6xl font-semibold">
                {meal.strMeal}
              </h1>
              <p className="my-6 text-gray-500 text-sm">
                Pizza is the missing piece that makes every day complete, a
                simple yet delicious joy in life
              </p>

              <div className="flex  flex-row  gap-4">
                <button className="text-sm rounded-full bg-primary py-2 px-4 text-white flex gap-2 items-center">
                  Order Now <Right />
                </button>
                <button className="flex items-center gap-2">
                  learn more <Right />
                </button>
              </div>
            </div>

            <div className=" relative">
              <img className="rounded-full w-full max-w-96" src={meal.strMealThumb} alt="pizza" />
            </div>
          </>
        ))}
      </section>
 

    </>
  );
};

export default Hero;
