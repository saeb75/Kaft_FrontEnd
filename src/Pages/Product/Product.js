import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import ReactImageZoom from "react-image-zoom";
import productProfile from "../../assents/profile.jpg";
import productProfile2 from "../../assents/bluz2.png";
import productProfile3 from "../../assents/kapshon.png";
import productProfile4 from "../../assents/kapshon2.png";
import productProfile5 from "../../assents/swshirt.png";

import "./style.css";
import RelatedMenu from "../../Components/RelatedMenu/RelatedMenu";
import Footer from "../../Components/Footer/Footer";

const Product = ({ withOutRelated }) => {
  const list = [
    productProfile,
    productProfile2,
    productProfile3,
    productProfile4,
    productProfile5,
  ];
  const [profilePicture, setProfilePicture] = useState(list[0]);
  const imgProps = {
    width: 600,
    height: 560,
    zoomPosition: "original",
    img: profilePicture,
  };
  if (withOutRelated) {
    return (
      <Container className="py-2">
        <Row>
          <Col md="6">
            <Col md="12">
              <div className="ProductName py-3 text-center">
                <h5>تی شرت زارا</h5>
              </div>
            </Col>
            <Col md="12">
              <div className="ProductStory">
                <h6>داستان طراحی</h6>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
            </Col>
            <Col md="12">
              <div className="productSelects py-3">
                <div>
                  <h6>30 هزار تومان</h6>
                </div>
                <div className="d-flex">
                  <Form.Control as="select" className="selectCostum mr-2">
                    <option>مردانه</option>
                    <option>زنانه</option>
                  </Form.Control>
                  <Form.Control as="select" className="selectCostum">
                    <option>M</option>
                    <option>S</option>
                  </Form.Control>
                </div>
              </div>
            </Col>
            <Col md="12">
              <div className="basketButton">
                <h6>اضافه کردن به سبد خرید</h6>
              </div>
            </Col>
            <Col md="12">
              <div className="ProductAcoordionMenu">
                <div className="productAccordion">
                  <div>
                    <p>ویژگی محصولات</p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p> تابلو سایزها</p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p>تعویض و برگشت </p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p>محصولات دیگر این طرح </p>
                  </div>
                  <p>+</p>
                </div>
              </div>
            </Col>
          </Col>
          <Col md="6">
            <Col md="12" className="productProfile">
              <ReactImageZoom {...imgProps} />
            </Col>
            <Col md="12" className="thumbnail">
              {list.map(item => (
                <div
                  onClick={() => setProfilePicture(item)}
                  className={`${profilePicture == item ? "activeProfile" : ""}`}
                >
                  <img src={item} />
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <div>
      <Header />
      <Container className="py-2">
        <Row>
          <Col md="6">
            <Col md="12">
              <div className="ProductName py-3 text-center">
                <h5>تی شرت زارا</h5>
              </div>
            </Col>
            <Col md="12">
              <div className="ProductStory">
                <h6>داستان طراحی</h6>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
            </Col>
            <Col md="12">
              <div className="productSelects py-3">
                <div>
                  <h6>30 هزار تومان</h6>
                </div>
                <div className="d-flex">
                  <Form.Control as="select" className="selectCostum mr-2">
                    <option>مردانه</option>
                    <option>زنانه</option>
                  </Form.Control>
                  <Form.Control as="select" className="selectCostum">
                    <option>M</option>
                    <option>S</option>
                  </Form.Control>
                </div>
              </div>
            </Col>
            <Col md="12">
              <div className="basketButton">
                <h6>اضافه کردن به سبد خرید</h6>
              </div>
            </Col>
            <Col md="12">
              <div className="ProductAcoordionMenu">
                <div className="productAccordion">
                  <div>
                    <p>ویژگی محصولات</p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p> تابلو سایزها</p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p>تعویض و برگشت </p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p>محصولات دیگر این طرح </p>
                  </div>
                  <p>+</p>
                </div>
              </div>
            </Col>
          </Col>
          <Col md="6">
            <Col md="12" className="productProfile">
              <ReactImageZoom {...imgProps} />
            </Col>
            <Col md="12" className="thumbnail">
              {list.map(item => (
                <div
                  onClick={() => setProfilePicture(item)}
                  className={`${profilePicture == item ? "activeProfile" : ""}`}
                >
                  <img src={item} />
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
      <RelatedMenu />
      <Footer />
    </div>
  );
};

export default Product;
