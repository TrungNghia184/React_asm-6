import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
export default function CartPage() {
  const cartList = useSelector((state) => state.GlobalReducer.cartList);
  if (cartList.length > 0) {
    return (
      <div className="cartItems">
        <h1>Your order</h1>
        {cartList.map((cartItem, i = -1) => {
          i++;
          return (
            <div className="cartItem">
              <p className="cartItem__number">{i}</p>
              <div className="cartItem__name">
                <div className="label">Name</div>
                <p>{cartItem.strDrink}</p>
              </div>
              <div className="cartItem__category">
                <div className="label">Category</div>
                <p>{cartItem.strCategory}</p>
              </div>
              <div className="cartItem__amount">
                <div className="label">Amount</div>
                <p>{cartItem.drinkAmount}</p>
              </div>
              <img src={cartItem.strDrinkThumb} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h1 className="cartItems">No order yet!</h1>;
  }
}
