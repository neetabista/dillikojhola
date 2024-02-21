import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Title from "../../components/common/Title/title";
import { Link } from "react-router-dom";
import Button from "../../components/common/buttton";

const Cart = () => {
  const [value, setValue] = useState(1);
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
              <div className="cart__item">
                <div className="cart__image">
                  <img src="/images/product-img-2.jpg" alt="image" />
                </div>
                <div className="cart__info">
                  <h2 className="cart__title">
                    <Link to="#">LADIES HAND BAG</Link>
                  </h2>
                  <div className="cart__meta">
                    <div className="cart__variant">36</div>
                    <div className="cart__price">Rs13,910.53</div>
                  </div>
                </div>
                <div className="cart__actions">
                  <div className="cart__quantity--selector">
                    <span
                      className="product__decrease--quantity quantity-button"
                      onClick={() => setValue(value > 1 ? value - 1 : value)}
                    >
                      <i className="ri-subtract-line"></i>
                    </span>
                    <input type="text" value={value} />
                    <span
                      className="product__increase--quantity quantity-button"
                      onClick={() => setValue(value + 1)}
                    >
                      <i className="ri-add-line"></i>
                    </span>
                  </div>
                </div>
                <div className="cart__line--price">
                  <span className="price">Rs13,910.53</span>
                  <div className="cart__remove">
                    <i className="ri-close-line"></i>
                  </div>
                </div>
              </div>
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

export default Cart;
