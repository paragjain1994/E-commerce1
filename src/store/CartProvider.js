import React, { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (newItem) => {
    const email = localStorage.getItem("email");
    const apiKey = `https://crudcrud.com/api/e437302c53724eb08c1aace7a5a964f3/cartData${email}`;
    f();

    async function f() {
      const res = await fetch(`${apiKey}`, {
        method: "POST",
        body: JSON.stringify({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          imageUrl: newItem.imageUrl,
          quantity: newItem.quantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('POST')
      const data = await res.json();
    }

    const idx = items.findIndex((i) => i.id === newItem.id);

    if (idx === -1) {
      updateItems([...items, newItem]);
    } else {
      let temp = [...items];
      temp[idx].quantity =
        Number(temp[idx].quantity) + Number(newItem.quantity);
      updateItems(temp);
    }
  };

  const removeItemFromCartHandler = (id) => {
    const idx = items.findIndex((i) => i.id === id);
    let temp = [...items];
    temp.splice(idx, 1);
    updateItems(temp);
  };
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    msg: "I am accessible anywhere",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
