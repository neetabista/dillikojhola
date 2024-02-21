import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Link as ScrollLink,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { productImages } from "../../data/data";
import Button from "../../components/common/buttton";
import Accordion from "react-bootstrap/Accordion";
import Title from "../../components/common/Title/title";
import ProductCard from "../../components/common/Product Card";
import { recommendationProducts } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "../../data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductDetail = () => {
  const [activeLink, setActiveLink] = useState("");
  const [value, setValue] = useState(1);

  // Initialize scroll spy
  scrollSpy.update();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setActiveLink(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);
  const { currentSlug } = useParams();
  const product = products.find((item) => item.slug === currentSlug);

  return (
    <>
      <Container>
        <div className="product">
          <Row>
            <Col lg={8}>
              <Row>
                <Col lg={2}>
                  <div className="product__thumbnails">
                    {product.images.map((image, index) => (
                      <ScrollLink
                        to={image.id}
                        className="product__side--nav-image"
                        spy={true}
                        smooth={true}
                        duration={30}
                        activeClass={activeLink === image.id ? "active" : ""}
                        key={index}
                      >
                        <img src={image.image} alt="" />
                      </ScrollLink>
                    ))}
                  </div>
                </Col>
                <Col lg={10}>
                  <div className="product__gallery--stack">
                    {product.images.map((image, index) => (
                      <img
                        className="product__gallery--image"
                        id={image.id}
                        src={image.image}
                        alt="image"
                        key={index}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="swiper-product">
                    <Swiper
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      {product.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img src={image.image} alt="" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      {product.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img src={image.image} alt="" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </Col>
              </Row>
              <div className="product__tabs">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Manufacturer Info</Accordion.Header>
                    <Accordion.Body>
                      NEEDLEDUST Pvt Ltd, Plot Number- 574, Sector-43, Golf
                      Course Road, Gurgaon- 122002, Haryana, India
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>PACKAGING</Accordion.Header>
                    <Accordion.Body>
                      All our pairs come in beautiful hard cover boxes carefully
                      wrapped in butter paper. Along with your pairs, the box
                      contains a care card and a dust bag too. They make
                      beautiful gifts too! You can also add a greeting card to
                      your box, at the time of check out.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col lg={4}>
              <div className="product__info">
                <div className="product__meta">
                  <h1 className="product__title">{product.title}</h1>
                  <div className="product__price">Rs {product.price}</div>
                  <p className="product__tax">MRP inclusive of all taxes.</p>
                </div>
                <div className="product__variants">
                  <div className="product__option--labelled">
                    <span className="product__label">size:</span>
                    <ul className="product__size--list">
                      <li className="product__size--item">
                        <input type="radio" className="size-radio" />
                        <label className="product__size--label">36</label>
                      </li>
                      <li className="product__size--item">
                        <input type="radio" className="size-radio" />
                        <label className="product__size--label">37</label>
                      </li>
                      <li className="product__size--item">
                        <input type="radio" className="size-radio" />
                        <label className="product__size--label">38</label>
                      </li>
                      <li className="product__size--item">
                        <input type="radio" className="size-radio" />
                        <label className="product__size--label">39</label>
                      </li>
                      <li className="product__size--item">
                        <input type="radio" className="size-radio" />
                        <label className="product__size--label">40</label>
                      </li>
                      <li className="product__size--item">
                        <input type="radio" className="size-radio" />
                        <label className="product__size--label">41</label>
                      </li>
                      <span className="size-chart"> Size Chart</span>
                    </ul>
                  </div>
                  <span className="product__label">Quantity:</span>
                  <div className="product__quantity--selector">
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

                <Link to="/cart">
                  <Button btnTitle="Add to cart" display="block" />
                </Link>
                <div className="product__description--section">
                  <div className="product__description">
                    <p>
                      A signature Abinav Mishra style combined with NEEDEDUST's
                      unique craftsmanship, creating the ivory jutti of your
                      dreams! An all over mirror floral jaal with elegant pearl
                      work highlighting the subtle colour on colour look. The
                      beautiful back brings in a hint of drama with white pearl
                      scallops, dangling from rows of small mirrors!
                    </p>
                    <p>
                      <strong>Composition: </strong>
                      <br />
                      Upper – Indian Silk
                      <br /> Back – Indian Silk Lining and Sole - Leather
                    </p>
                    <p>
                      Dry Clean ONLY! <br />
                      Store your juttis in the dust bag provided to you with
                      your box or in a muslin cloth Our juttis are extremely
                      soft, but if your feet are feeling extra sensitive, line
                      the inside of your juttis with mustard oil for a day and
                      leave. Keep them dry and away from moisture. If at all
                      exposed to moisture. Please dry them out for a few hours
                      before putting them back in.
                    </p>
                    <p> Country of Origin: India</p>
                  </div>
                  <div className="shipping">
                    <p>Estimated Dispatch Time : 5 Days</p>
                  </div>
                  <div className="product__share">
                    <span>Share</span>
                    <div className="product__share--list">
                      <Link to="#" className="product__share--item">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                      <Link to="#" className="product__share--item">
                        <i className="ri-twitter-fill"></i>
                      </Link>
                      <Link to="#" className="product__share--item">
                        <i className="ri-pinterest-fill"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product__tabs">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Manufacturer Info</Accordion.Header>
                      <Accordion.Body>
                        NEEDLEDUST Pvt Ltd, Plot Number- 574, Sector-43, Golf
                        Course Road, Gurgaon- 122002, Haryana, India
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>PACKAGING</Accordion.Header>
                      <Accordion.Body>
                        All our pairs come in beautiful hard cover boxes
                        carefully wrapped in butter paper. Along with your
                        pairs, the box contains a care card and a dust bag too.
                        They make beautiful gifts too! You can also add a
                        greeting card to your box, at the time of check out.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="product-recommendation">
          <Title
            title="You may also like"
            textAlign="center"
            paddingBottom="2rem"
          />
          <div className="product__list">
            {recommendationProducts.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
