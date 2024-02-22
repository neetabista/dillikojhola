import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const [value, setValue] = useState(1);

  return (
    <>
      <div className="cart__item">
        <div className="cart__image">
          <img src={item.image} alt="image" />
        </div>
        <div className="cart__info">
          <h2 className="cart__title">
            <Link to="#">{item.title}</Link>
          </h2>
          <div className="cart__meta">
            <div className="cart__variant">36</div>
            <div className="cart__price">{item.price}</div>
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
    </>
  );
};

export default CartItem;
