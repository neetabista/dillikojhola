import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { productCrads } from "../../../../data/data";
import Button from "../../../../components/common/buttton";
import ProductCard from "../../../../components/common/Product Card";

const ProductList = () => {
  return (
    <>
      <Container>
        <div className="product-list--section">
          <div className="title">latest statement arrivals.</div>
          <div className="product__list">
            {productCrads.map((card, index) => (
              <ProductCard data={card} key={index} />
            ))}
          </div>
          <div className="view-all-btn">
            <a href="#">
              <Button btnTitle="view All" />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductList;
