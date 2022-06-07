import React, { useEffect, useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCartList } from "../../redux/slices/globalSlice";
import "./index.scss";
import AddToCartSuccess from "../AddToCartSuccess";
export default function AddToCart(props) {
  const dispatch = useDispatch();
  const [drinkNumber, setDrinkNumber] = useState(0);
  const [showDisplay, setShowDisplay] = useState("none");
  function increaseDrinkNumber() {
    setDrinkNumber(drinkNumber + 1);
  }
  function decreaseDrinkNumber() {
    if (drinkNumber >= 1) {
      setDrinkNumber(drinkNumber - 1);
    }
  }
  function addToCart() {
    let copiedProps = { ...props.drink };
    copiedProps.drinkAmount = drinkNumber;
    if (drinkNumber > 0) {
      dispatch(getCartList(copiedProps));
      setShowDisplay('inline')
      setTimeout(() => {
        setShowDisplay('none')
      }, 1500)
    }
  }
  if (props.drink.drinkAmount !== undefined) {
    setDrinkNumber(props.drink.drinkAmount);
  }
  return (
    <div id={"D" + props.id} className="addToCartContainer">
      <AddToCartSuccess style={showDisplay} />
      <div className="addToCartContainer__container1">
        <Button type="primary" onClick={decreaseDrinkNumber}>
          <MinusCircleOutlined />
        </Button>
        <div className="number">
          <p>{drinkNumber}</p>
        </div>
        <Button type="primary" onClick={increaseDrinkNumber}>
          <PlusCircleOutlined />
        </Button>
      </div>
      <div className="addToCartContainer__container2">
        <Button type="primary" className="add-btn" onClick={addToCart}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
