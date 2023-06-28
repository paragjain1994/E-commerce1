import React, { useContext } from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import "./Crt.css";
import CartContext from "../store/cart-context";


const Cart = (props) => {
  const cartcntx = useContext(CartContext);

  const removeItemFromCart = (event) => {
    var list_ = event.target.parentElement;
    var id = event.target.parentElement.id;

    cartcntx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {console.log(cartcntx.items)}
      {cartcntx.items.map((item) => (
        <li className="cart-row" key={item.id} id={item.id}>
          <span className="cart-item cart-column">
            <img className="cart-img" src={item.imageUrl} alt="img" />
            <span className="cart-img">{item.title}</span>
          </span>
          <span className="cart-price cart-column">{`$${item.price.toFixed(
            2
          )}`}</span>
          <span className="cart-quantity cart-column">{item.quantity} </span>
          <button
            className="cart-del-btn cart-column"
            onClick={removeItemFromCart}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );

  let totalAmount = 0;
  cartcntx.items.forEach((item) => {
    totalAmount = totalAmount + item.price * item.quantity;
  });

  return (
    <Modal onClose={props.onClose}>
      <section className={classes.cont}>
        <h3>CART</h3>
        <div className="cart-row cart-header">
          <span className="cart-item cart-column">ITEM</span>
          <span className="cart-price cart-column">PRICE</span>
          <span className="cart-quantity cart-column">QUANTITY</span>
        </div>
        {cartItems}
      </section>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Purchase</button>
      </div>
    </Modal>
  );
};

export default Cart;
