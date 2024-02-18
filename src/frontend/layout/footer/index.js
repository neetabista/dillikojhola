import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
                    <a href="#">
                      <li className="footer__item">Events & Exhibitions</li>
                    </a>
                    <a href="#">
                      <li className="footer__item">Stockists</li>
                    </a>
                    <a href="#">
                      <li className="footer__item">Brand Partnerships</li>
                    </a>
                  </ul>
                </div>
              </Col>

              <Col lg={3}>
                <div className="footer__block">
                  <h4 className="footer__title">SHOPPING SUPPORT</h4>
                  <ul className="footer__list">
                    <a href="#">
                      <li className="footer__item">FAQ</li>
                    </a>
                    <a href="#">
                      <li className="footer__item">Exchanges & Returns</li>
                    </a>
                    <a href="#">
                      <li className="footer__item">Refund Policy</li>
                    </a>
                    <a href="#">
                      <li className="footer__item">Events & Exhibitions</li>
                    </a>
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
                      <a href="#">
                        <i className="ri-arrow-right-line"></i>
                      </a>
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
                    <a href="#" className="icon">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="ri-instagram-line"></i>
                    </a>
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
