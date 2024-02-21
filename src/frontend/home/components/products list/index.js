import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import { productCrads } from "../../../../data/data";
import Button from "../../../../components/common/buttton";
import ProductCard from "../../../../components/common/Product Card";
import Title from "../../../../components/common/Title/title";
import { Link } from "react-router-dom";
import { products } from "../../../../data/data";

const ProductList = () => {
  return (
    <>
      <Container>
        <div className="product-list--section">
          <Title
            title="latest statement arrivals"
            textAlign="center"
            paddingBottom="2rem"
          />
          <div className="product__list">
            {products.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
          </div>
          <div className="view-all-btn">
            <Link to="#">
              <Button btnTitle="view All" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductList;
