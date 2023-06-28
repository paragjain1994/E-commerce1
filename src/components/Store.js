import React, { useState, useContext, useEffect } from "react";
import Card from "../Cards/Card";
import classes from "../Cards/Card.module.css";
import Title from "./Title";
import Header from "./Header";
import Cart from "./Cart";
import { Button } from "react-bootstrap";
import productsArr from "./ProductArr";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";
const Store = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx = useContext(AuthContext);
  const cartcntx = useContext(CartContext);

  let email = localStorage.getItem("email");

  useEffect(() => {
    console.log(email)
    fetch(
      `https://crudcrud.com/api/e437302c53724eb08c1aace7a5a964f3/cartData${email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        cartcntx.items = data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const productlist = productsArr.map((prod) => (
    <Card
      key={prod.id}
      id={prod.id}
      title={prod.title}
      imageUrl={prod.imageUrl}
      price={prod.price}
      avail_stock={prod.avail_stock}
    ></Card>
  ));

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Title />
      <ul className={classes.container}>{productlist}</ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1%",
        }}
      >
        <Button variant="outline-secondary" onClick={showCartHandler}>
          See the Cart
        </Button>
      </div>
    </div>
  );
};

export default Store;
