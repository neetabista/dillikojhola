import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/common/buttton";

const Checkout = () => {
  const data = {
    email: "",
    country: "",
    fname: "",
    lname: "",
    address: "",
    province: "",
    city: "",
    code: "",
    phone: "",
  };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.email || !inputData.phone) {
      alert("All filds are Mandatory");
    } else {
      setFlag(true);
    }
  };
  return (
    <>
      <Container>
        <div className="checkout">
          <pre>
            {flag ? (
              <h3 className="success">
                Hello {inputData.fname} You've Payed Successfully
              </h3>
            ) : (
              ""
            )}
          </pre>
          <Row>
            <Col lg={7}>
              <form onSubmit={handleSubmit} className="checkout__form--section">
                <div className="checkout__contact--from checkout__from">
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
                      value={inputData.email}
                      required
                      onChange={handleData}
                    ></input>
                    <label>Email</label>
                  </div>
                  <div className="check-from">
                    <input type="checkbox" />
                    <label>Email me with news and offers</label>
                  </div>
                </div>
                <div className="checkout__delivery--from checkout__from">
                  <div className="form__title-section">
                    <h2 className="form__title">Delivery</h2>
                  </div>

                  <div className="form-group select-form">
                    <select
                      id="country"
                      name="country"
                      value={inputData.value}
                      onChange={handleData}
                    >
                      <option value="IN">India</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                    </select>
                    <label>Country/Region</label>
                  </div>
                  <div className="grid-form-section">
                    <div className="form-group">
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        value={inputData.fname}
                        required
                        onChange={handleData}
                      />
                      <label>first name</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        value={inputData.lname}
                        required
                        onChange={handleData}
                      />
                      <label>last name</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={inputData.address}
                      required
                      onChange={handleData}
                    />
                    <label>address</label>
                  </div>
                  <div className="grid-form-section">
                    <div className="form-group select-form">
                      <select
                        id="province"
                        name="province"
                        value={inputData.value}
                        onChange={handleData}
                      >
                        <option value="CR-A">Alajuela</option>
                        <option value="CR-C">Cartago</option>
                        <option value="CR-G">Guanacaste</option>
                        <option value="GB">United Kingdom</option>
                      </select>
                      <label>province</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={inputData.city}
                        required
                        onChange={handleData}
                      />
                      <label>city</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="code"
                        id="code"
                        value={inputData.code}
                        required
                        onChange={handleData}
                      />
                      <label>PIN code</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      value={inputData.phone}
                      required
                      onChange={handleData}
                    />
                    <label>phone</label>
                  </div>
                  <div className="check-from">
                    <input type="checkbox" />
                    <label>Save this information for next time</label>
                  </div>
                  <div className="submit-button">
                    <input type="submit" value="pay now" />
                  </div>
                </div>
              </form>
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
