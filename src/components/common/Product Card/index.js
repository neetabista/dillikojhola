import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <>
      <Link to="#" className="product__card">
        <div className="product__images">
          <img src={data.image1} alt="image" />
          <img className="hover-image " src={data.image2} alt="" />
          <div className="product__tag">New</div>
          <div className="product__quick--btn">Quick View</div>
        </div>
        <div className="product__content">
          <div className="product__title">{data.title}</div>
          <div className="product__price">
            <span className="original-price">Rs. {data.originalPrice}</span>
            <span className="sale-price">Rs. {data.salePrice}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
