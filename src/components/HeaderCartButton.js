import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const location = useLocation();

  const cartcntx = useContext(CartContext);
  let quantity = 0;
  cartcntx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span>Cart</span>
        {/* <span>{cartcntx.msg}</span> */}
        <span className={classes.badge}>{quantity}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
