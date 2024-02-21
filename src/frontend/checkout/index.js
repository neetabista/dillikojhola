import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/common/buttton";

const Checkout = () => {
  return (
    <>
      <Container>
        <div className="checkout">
          <Row>
            <Col lg={7}>
              <div className="checkout__form--section">
                <form
                  action="#"
                  className="checkout__contact--from checkout__from"
                >
                  <div className="form__title-section">
                    <h2 className="form__title">Contact</h2>
                    <span className="from__login">
                      Have an account?
                      <Link to="#">Log in</Link>
                    </span>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                    ></input>
                    <label>Email</label>
                  </div>
                  <div className="check-from">
                    <input type="checkbox" />
                    <label>Email me with news and offers</label>
                  </div>
                </form>
                <form
                  action="#"
                  className="checkout__delivery--from checkout__from"
                >
                  <div className="form__title-section">
                    <h2 className="form__title">Delivery</h2>
                  </div>

                  <div className="form-group select-form">
                    <select id="counrty" name="country">
                      <option value="IN">India</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                    </select>
                    <label>Country/Region</label>
                  </div>
                  <div className="grid-form-section">
                    <div className="form-group">
                      <input type="text" name="fname" id="fname" required />
                      <label>first name</label>
                    </div>
                    <div className="form-group">
                      <input type="text" name="lname" id="lname" required />
                      <label>last name</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" name="address" id="address" required />
                    <label>address</label>
                  </div>
                  <div className="grid-form-section">
                    <div className="form-group select-form">
                      <select id="counrty" name="country">
                        <option value="CR-A">Alajuela</option>
                        <option value="CR-C">Cartago</option>
                        <option value="CR-G">Guanacaste</option>
                        <option value="GB">United Kingdom</option>
                      </select>
                      <label>province</label>
                    </div>
                    <div className="form-group">
                      <input type="text" name="city" id="city" required />
                      <label>city</label>
                    </div>
                    <div className="form-group">
                      <input type="text" name="postal" id="postal" required />
                      <label>postal code</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="phone" name="phone" id="phone" required />
                    <label>phone</label>
                  </div>
                  <div className="check-from">
                    <input type="checkbox" />
                    <label>Save this information for next time</label>
                  </div>
                  <div className="submit-button">
                    <input type="submit" value="pay now" />
                  </div>
                </form>
              </div>
            </Col>
            <Col lg={5}>
              <div className="product">
                <div className="product__card">
                  <div className="product__image--section">
                    <div className="product__image">
                      <img src="/images/product-img-2.jpg" alt="image" />
                      <div className="product__quantity">2</div>
                    </div>
                    <div className="product__meta">
                      <h2 className="product__title">ladies hand bag</h2>
                      <span className="product__size">36</span>
                    </div>
                  </div>
                  <div className="product__price">₹17,380.00</div>
                </div>
                <div className="product__card">
                  <div className="product__image--section">
                    <div className="product__image">
                      <img src="/images/product-img-2.jpg" alt="image" />
                      <div className="product__quantity">2</div>
                    </div>
                    <div className="product__meta">
                      <h2 className="product__title">ladies hand bag</h2>
                      <span className="product__size">36</span>
                    </div>
                  </div>
                  <div className="product__price">₹17,380.00</div>
                </div>
                <div className="discount-code-from-section checkout__form--section ">
                  <form
                    action="#"
                    className=" discount-code-from checkout__from "
                  >
                    <div className="form-group">
                      <input type="text" />
                      <label>discount code or gift card</label>
                    </div>
                    <div className="submit-button">
                      <input type="submit" value="pay now" />
                    </div>
                  </form>
                </div>
                <div className="product__total--section">
                  <div className="product__total--row">
                    <div className="product__subtotal">Subtotal</div>
                    <div className="product__subtotal--price">₹34,768.00</div>
                  </div>
                  <div className="product__total--row">
                    <div className="product__total">shipping</div>
                    <div className="product__total--price">₹7,200.00</div>
                  </div>
                  <div className="product__total--row">
                    <div className="product__total">Total</div>
                    <div className="product__total--price">₹41,968.00</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
