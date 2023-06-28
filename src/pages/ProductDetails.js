import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import productsArr from "../components/ProductArr";
import { ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import Cart from "../components/Cart";
import Header from "../components/Header";
import CartContext from "../store/cart-context";

const ProductDetails = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartcntx = useContext(CartContext);

  const addItemToCart = () => {
    const quantity = 1;
    cartcntx.addItem({ ...product, quantity: quantity });
  };
  const param = useParams();
  var product = productsArr.find(function (element) {
    return element.id === param.productID;
  });

  const price = `$${product.price.toFixed(2)}`;

  function stockStatus(noOfStock) {
    let res = noOfStock + "   In stock";
    if (noOfStock < 1) {
      res = "Out of stock";
      return res;
    }
    return res;
  }

  function addToCart(noOfStock) {
    let res = false;
    if (noOfStock < 1) {
      res = true;
      return res;
    }
    return res;
  }
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      {/* <HeaderCartButton productID={param.productID}></HeaderCartButton> */}
      <div style={{ marginTop: "100px" }}>
        <Row>
          <Col md={6}>
            <Image
              src={product.imageUrl}
              style={{
                marginLeft: "100px",
                height: "500px",
                width: "500px",
                borderRadius: "20px",
              }}
            />
          </Col>
          <Col md={3}>
            <ListGroup style={{ marginTop: "100px" }}>
              <h3>
                <ListGroup.Item>{product.title}</ListGroup.Item>
              </h3>
              <ListGroup.Item>Price: {price}</ListGroup.Item>
              <ListGroup.Item>
                <Rating />{" "}
                <span className="star-rating">{product.rating} Stars</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Discription: {product.discription}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup style={{ marginTop: "100px" }}>
              <h3>
                <ListGroup.Item>
                  Status: {stockStatus(product.avail_stock)}
                </ListGroup.Item>
              </h3>
              <ListGroup.Item>Price: {price}</ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="dark"
                  disabled={addToCart(product.avail_stock)}
                  onClick={addItemToCart}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetails;
