import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { mealsDetails } from "../data/FoodDetails";
import FoodList from "./FoodList";
import MainViewFooter from "./MainViewFooter";
import FoodDetailsTable from "./FoodDetailsTable";

export default function Main() {
  const [foodItems, setFoodItems] = useState(mealsDetails);
  const [caloriesDetails, setCaloriesDetails] = useState({});

  useEffect(() => {
    let items = sessionStorage.getItem("foodItems");
    let caloriesDetails = sessionStorage.getItem("caloriesDetails");
    if (items == null) {
      items = JSON.stringify(foodItems);
    }
    if (caloriesDetails == null) {
      caloriesDetails = JSON.stringify({
        protein: 0,
        carb: 0,
        fat: 0,
        totalCalories: 2000,
      });
    }
    window.sessionStorage.setItem("foodItems", items);
    window.sessionStorage.setItem("caloriesDetails", caloriesDetails);
    setFoodItems(JSON.parse(items));
    setCaloriesDetails(JSON.parse(caloriesDetails));
    // eslint-disable-next-line
  }, []);

  const updateFoodItems = (foodItem) => {
    const { name } = foodItem;
    const updatedItems = [...foodItems];
    const itemIndex = updatedItems.findIndex((item) => item.name === name);
    updatedItems[itemIndex].count++;
    sessionStorage.setItem("foodItems", JSON.stringify(updatedItems));
    setFoodItems(updatedItems);
  };
  const updateCaloriesDetails = (foodItem) => {
    const { calories, type, protein } = foodItem;
    const updatedCaloriesDetails = { ...caloriesDetails };
    switch (type) {
      case "protein":
        updatedCaloriesDetails.protein += protein;
        break;
      case "carb":
        updatedCaloriesDetails.carb += calories;
        updatedCaloriesDetails.protein += protein;
        break;
      case "fat":
        updatedCaloriesDetails.fat += calories;
        break;
      default:
        break;
    }
    updatedCaloriesDetails.totalCalories -= calories;
    sessionStorage.setItem(
      "caloriesDetails",
      JSON.stringify(updatedCaloriesDetails)
    );
    setCaloriesDetails(updatedCaloriesDetails);
  };
  function onReset() {
    const resetedItems = mealsDetails.map((meal) => {
      meal.count = 0;
      return meal;
    });
    window.sessionStorage.setItem("foodItems", JSON.stringify(resetedItems));
    window.sessionStorage.setItem(
      "caloriesDetails",
      JSON.stringify({
        protein: 0,
        carb: 0,
        fat: 0,
        totalCalories: 2000,
      })
    );
    setFoodItems(resetedItems);
    setCaloriesDetails({
      protein: 0,
      carb: 0,
      fat: 0,
      totalCalories: 2000,
    });
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-end mt-1 mb-2">
        <Button variant="danger" onClick={onReset}>
          Reset
        </Button>
      </div>
      <div className="row">
        <div className="col-6">
          <FoodDetailsTable foodItems={foodItems} />
        </div>
        <div className="col-6">
          <FoodList
            foodItems={foodItems}
            updateFoodItems={updateFoodItems}
            updateCaloriesDetails={updateCaloriesDetails}
          />
        </div>
      </div>
      <MainViewFooter caloriesDetails={caloriesDetails} />
    </div>
  );
}
