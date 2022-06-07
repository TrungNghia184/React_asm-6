import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { getDrinkInfo } from "../../redux/slices/globalSlice";
import "./index.scss";
export default function InfoPage() {
  const drinkInfo = useSelector((state) => state.GlobalReducer.drinkInfo);
  let navigate = useNavigate();
  function getIngredientData(cocktail) {
    let ingredientList = [];
    let ingredientMeasureList = [];
    for (let i = 1; i < 16; i++) {
      let ingredient = "strIngredient" + i;
      if (cocktail[ingredient] !== null) {
        ingredientList.push(cocktail[ingredient]);
      }
    }
    for (let i = 1; i < ingredientList.length; i++) {
      let measure = "strMeasure" + i;
      ingredientMeasureList.push(
        `${cocktail[measure]} of ${ingredientList[i]}`
      );
    }
    console.log(ingredientMeasureList);
    console.log(drinkInfo);
    return ingredientMeasureList.join(", ");
  }
  let drinkIngredient = getIngredientData(drinkInfo);
  if (drinkInfo.idDrink !== undefined) {
    return (
      <div className="drink-info">
        <h1>Drink infomation</h1>
        <div>
          <div className="image-container">
            <img src={drinkInfo.strDrinkThumb} />
          </div>
          <div className="info-container">
            <p>Name: {drinkInfo.strDrink}</p>
            <p>
              Description: An {drinkInfo.strAlcoholic} {drinkInfo.strCategory}{" "}
              served in {drinkInfo.strGlass}
            </p>
            <p>Ingredients: {drinkIngredient}</p>
            <p>Making process: {drinkInfo.strInstructions}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="no-info">
        No info yet!
        <button onClick={() => navigate("/")}>
          <ArrowLeftOutlined />
          Go back
        </button>
      </div>
    );
  }
}
