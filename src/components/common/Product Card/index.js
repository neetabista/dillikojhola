import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <>
      <Link to={`/product-detail/${data.slug}`} className="product__card">
        <div className="product__images">
          <img src={data.images[0].image} alt="image" />

          <img
            className="hover-image "
            src={data.images[1].image}
            alt="image"
          />
          <div className="product__tag">New</div>
          <Link to="#">
            <div className="product__quick--btn">Quick View</div>
          </Link>
        </div>
        <div className="product__content">
          <div className="product__title">{data.title}</div>
          <div className="product__price">
            <span className="original-price">Rs. {data.price}</span>
            <span className="sale-price">Rs. {data.salePrice}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
