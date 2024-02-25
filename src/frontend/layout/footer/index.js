import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="footer__inner">
            <Row>
              <Col lg={3}>
                <div className="footer__block">
                  <h4 className="footer__title">STOCKISTS & EVENTS</h4>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <Link to="#">Events & Exhibitions</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">Stockists</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">Brand Partnerships</Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={3}>
                <div className="footer__block">
                  <h4 className="footer__title">SHOPPING SUPPORT</h4>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <Link to="#">FAQ</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">Exchanges & Returns</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">Refund Policy</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">Events & Exhibitions</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3}>
                <div className="footer__block">
                  <img
                    className="footer-logo"
                    src="/images/dh_logo_footer.avif"
                    alt="logo"
                  />
                  <p className="footer__text">
                    When you walk out of our store, you don’t walk out with just
                    a shoe, but a story of an 800 Year old tradition of shoe
                    making!!
                  </p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="footer__block">
                  <h4 className="footer__title">JOIN OUR COMMUNITY TODAY.</h4>
                  <form>
                    <div className="field">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter email here"
                      />
                      <Link to="#">
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </form>

                  <p className="footer__text">
                    When you walk out of our store, you don’t walk out with just
                    a shoe, but a story of an 800 Year old tradition of shoe
                    making!!
                  </p>
                  <h4 className="footer__title">
                    FOLLOW US FOR UPDATES & LATEST DEALS
                  </h4>
                  <div className="footer__social--icons">
                    <Link href="#" className="icon">
                      <i className="ri-facebook-fill"></i>
                    </Link>
                    <Link href="#" className="icon">
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer__bottom">
            <div className="footer__copyright">
              {" "}
              &copy; 2024 <a href="#">dillikajhola.com</a>
            </div>
            <div className="footer__credit">
              <a href="https://infinityinfosys.com/" target="_blank">
                Powered by Infinity Infosys Pvt. Ltd.
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
