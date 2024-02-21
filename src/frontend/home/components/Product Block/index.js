import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../../../components/common/buttton";
import { productBlock } from "../../../../data/data";
import { Link } from "react-router-dom";

const ProductBlock = ({ order, btnTitle }) => {
  return (
    <>
      <Container>
        <div className="product">
          <Row>
            {order ? (
              <Col lg={6} style={{ order: "2" }}>
                <div className="product__images right">
                  <img
                    className="image"
                    src={productBlock.image1}
                    alt="image"
                  />
                  <img
                    className="image"
                    src={productBlock.image2}
                    alt="image"
                  />
                  <img
                    className="image"
                    src={productBlock.image3}
                    alt="image"
                  />
                  <img
                    className="image"
                    src={productBlock.image4}
                    alt="image"
                  />
                </div>
              </Col>
            ) : (
              <Col lg={6}>
                <div className="product__images">
                  <img
                    className="image"
                    src={productBlock.image1}
                    alt="image"
                  />
                  <img
                    className="image"
                    src={productBlock.image2}
                    alt="image"
                  />
                  <img
                    className="image"
                    src={productBlock.image3}
                    alt="image"
                  />
                  <img
                    className="image"
                    src={productBlock.image4}
                    alt="image"
                  />
                </div>
              </Col>
            )}

            <Col lg={6}>
              <div className="product__content">
                <h2 className="title">{productBlock.title}</h2>
                <p className="product__text">{productBlock.summary}</p>

                <Link href="#">
                  <Button btnTitle={btnTitle} />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ProductBlock;
