import React, { useContext, useState } from "react";
import classes from "./Card.module.css";
import CartContext from "../store/cart-context";
import {Link} from 'react-router-dom';
import productsArr from "../components/ProductArr";
  const Card = (props) => {
  const cartcntx = useContext(CartContext);
  const addItemToCart = () => {
    const quantity = 1;
    cartcntx.addItem({ ...props, quantity: quantity });
  };
  const price = `$${props.price.toFixed(2)}`;
  function addToCart(noOfStock){
    let res = false;
    if (noOfStock < 1) {
      res = true;
      return res;
    }
    return res;
  }
  return (
    <div>
      <h4>{props.title}</h4>
      
      <Link to={`/store/${props.id}`}>                               
        <img
          className={classes.img}
          src={props.imageUrl}
          alt="img"
          width="75%"
          height="75%"
        />
      </Link>

      <h3>{price}</h3>
      <button disabled={addToCart(props.avail_stock)} className={classes.btn} onClick={addItemToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
