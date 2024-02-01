"use client";

import React, { useState, useEffect } from "react";
const Itemsmenu = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  
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
      finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {loading ? (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-primary"></div>
      </div>
    ) : (
      <div>
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-gray-200 hover:bg-white hover:cursor-pointer transition-all rounded-lg p-4 text-center w-56"
          >
            <div className="text-center">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="max-h-24 mx-auto  rounded-full"
              />
            </div>
            <h4 className="font-semibold text-lg ">{meal.strCategory}</h4>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <button className="rounded-full bg-primary py-2 px-4 mt-2 text-white text-sm">
              Add to Cart $122
            </button>
          </div>
        ))}
      </div>
    )}
  </>
  );
};

export default Itemsmenu;
