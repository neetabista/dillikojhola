import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../../../components/common/buttton";
import { products } from "../../../../data/data";

const ProductBlock = ({ order, btnTitle }) => {
  return (
    <>
      <Container>
        <div className="product">
          <Row>
            {order ? (
              <Col lg={6} style={{ order: "2" }}>
                <div className="product__images right">
                  <img className="image" src={products.image1} alt="image" />
                  <img className="image" src={products.image2} alt="image" />
                  <img className="image" src={products.image3} alt="image" />
                  <img className="image" src={products.image4} alt="image" />
                </div>
              </Col>
            ) : (
              <Col lg={6}>
                <div className="product__images">
                  <img className="image" src={products.image1} alt="image" />
                  <img className="image" src={products.image2} alt="image" />
                  <img className="image" src={products.image3} alt="image" />
                  <img className="image" src={products.image4} alt="image" />
                </div>
              </Col>
            )}

            <Col lg={6}>
              <div className="product__content">
                <h2 className="title">{products.title}</h2>
                <p className="product__text">{products.summary}</p>

                <a href="#">
                  <Button btnTitle={btnTitle} />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ProductBlock;
