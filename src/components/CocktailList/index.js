import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Button, Popover } from "antd";
import "antd/dist/antd.css";
import AddToCart from "../../components/addToCartBtn";
import { setGlobalLoading, storeDrinkInfo } from "../../redux/slices/globalSlice";
import GlobalLoading from "../../components/GlobalLoading";
import "./index.scss";
export default function CocktailList(props) {
  //   const cocktailList = useSelector((state) => state.GlobalReducer.cockTailList);
  const [drinkIngredient, setDrinkIngredient] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  function getIngredientData(cocktail) {
    let ingredientList = [];
    for (let i = 1; i < 16; i++) {
      let ingredient = "strIngredient" + i;
      if (cocktail[0][ingredient] !== null) {
        ingredientList.push(cocktail[0][ingredient]);
      }
    }
    return ingredientList.join(", ");
  }
  function getDrinkIngredient(e) {
    let drinkID = e.target.parentElement.id;
    let clickedCocktail = props.cocktails.filter((cocktail) => {
      return cocktail.idDrink == drinkID;
    });
    return setDrinkIngredient(getIngredientData(clickedCocktail));
  }
  async function getDrinkInfo(e) {
    dispatch(setGlobalLoading(true))
    let drinkID = e.target.className;
    const drinkData = await fetch(
      `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
    );
    let refinedDrinkData = await drinkData.json();
    dispatch(storeDrinkInfo(refinedDrinkData.drinks[0]));
    dispatch(setGlobalLoading(false))
  }
  return (
    <>
      <GlobalLoading loading={loading} />
      {props.cocktails.map((data, i = -1) => {
        i++;
        return (
          <div id={data.idDrink} key={data.idDrink} className="drinks">
            <p className="drinks__number">{i}</p>
            <Popover
              placement="right"
              title={"Info"}
              content={
                <>
                  Ingredients: {drinkIngredient}
                  <NavLink
                    className={data.idDrink}
                    onClick={getDrinkInfo}
                    to="/info"
                    end
                  >
                    (More info...)
                  </NavLink>
                </>
              }
              trigger="click"
            >
              <img
                src={data.strDrinkThumb}
                onClick={getDrinkIngredient}
                className="drinks__image"
              />
            </Popover>
            <div className="drinks__name__container">
              <p className="name">Name : {data.strDrink}</p>
              <p className="category">Category : {data.strCategory}</p>
              <AddToCart id={data.idDrink} drink={data} />
            </div>
          </div>
        );
      })}
    </>
  );
}
