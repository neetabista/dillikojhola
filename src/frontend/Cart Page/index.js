import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Title from "../../components/common/Title/title";
import { Link } from "react-router-dom";
import Button from "../../components/common/buttton";
import CartItem from "../../components/Cart Item";
import { getCartItems } from "../../data/data";

const CartPage = () => {
  const cartItems = getCartItems();

  return (
    <>
      <Container>
        <div className="cart">
          <Title title="YOUR SHOPPING BAG" textAlign="center" />
          <form>
            <div className="cart__list">
              <div className="cart__head">
                <span className="cart__heading">Product</span>
                <span className="cart__heading"></span>

                <span className="cart__heading">Quantity</span>
                <span className="cart__heading">Total</span>
              </div>
              {cartItems.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </div>
            <div className="cart__footer">
              <div className="cart__note--container">
                <span className="cart__note--title">
                  Enclose a heartfelt note (free and optional)
                </span>
                <textarea
                  className="cart__note"
                  name="note"
                  id="cart-note"
                  cols="30"
                  rows="4"
                  placeholder="Your Message here..."
                ></textarea>
              </div>
              <div className="cart__recap">
                <p className="cart__total">
                  Total:
                  <br />
                  <span className="total-price">Rs42,864.93</span>
                </p>
                <p className="cart__taxes">
                  Shipping & taxes calculated at checkout
                </p>
                <Link to="/checkout">
                  <Button btnTitle="checkout" />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
