import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { getCockTailList, setGlobalLoading } from "../../redux/slices/globalSlice";

import "./index.scss";
import CocktailList from "../../components/CocktailList";

export default function HomePage() {
  const dispatch = useDispatch();
  const [cocktailData, setCockTailData] = useState([]);

  async function getCockTailData() {
    const data = await fetch(
      "https://thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    let refinedData = await data.json();
    console.log(refinedData);
    setCockTailData(refinedData?.drinks);
    dispatch(setGlobalLoading(false));
  }
  useEffect(() => {
    dispatch(setGlobalLoading(true));
    getCockTailData();
  }, []);
  dispatch(getCockTailList(cocktailData));
  return (
    <div className="menu">
      <h1>Menu</h1>
      
      <div className="menu__items">
        <CocktailList cocktails={cocktailData} />
      </div>
    </div>
  );
}
