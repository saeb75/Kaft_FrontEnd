import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import "./style.css";
import voice from "../../assents/form/voice.png";
import coupon from "../../assents/form/coupon.png";
import setting from "../../assents/form/setting.png";
import comment from "../../assents/form/comment.png";
import googleIcon from "../../assents/form/google.png";

const SignUp = () => {
  return (
    <div>
      <Header />
      <Container style={{ maxWidth: "1700px" }}>
        <div className="signupHeader">
          <p>به دنیای کافت</p>
          <h2>خوش آمدید</h2>
        </div>
      </Container>
      <Container className="py-5">
        <Row>
          <Col md="5">
            <div className="registerForm registerInfo">
              <ul>
                <li>
                  <img src={voice} />
                  <h6>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  </h6>
                </li>
                <li>
                  <img src={coupon} />
                  <h6>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  </h6>
                </li>
                <li>
                  <img src={setting} />
                  <h6>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  </h6>
                </li>
                <li>
                  <img src={comment} />
                  <h6>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  </h6>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="7">
            <div className="registerForm">
              <h6>شما هم عضو کافت بشوید:</h6>
              <Form>
                <Row>
                  <Col className="mb-3" md="12">
                    <Form.Control placeholder="نام" />
                  </Col>
                  <Col className="mb-3" md="12">
                    <Form.Control placeholder="نام خانوادگی" />
                  </Col>
                  <Col className="d-flex myCheckBox mb-3" md="12">
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      label="مرد"
                      className="mr-2"
                      name="sex"
                      style={{ color: " #a7a89a" }}
                    />
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      label="زن"
                      name="sex"
                      style={{ color: " #a7a89a" }}
                    />
                  </Col>
                  <Col className="mb-3" md="12">
                    <Form.Control
                      placeholder="ایمیل "
                      type="email"
                      autoComplete="false"
                    />
                  </Col>
                  <Col className="mb-3 d-flex" md="12">
                    <Form.Control
                      placeholder="تکرار رمز"
                      type="password"
                      autoComplete="false"
                    />
                    <Form.Control
                      placeholder="رمز "
                      type="password"
                      autoComplete="false"
                      className="ml-2"
                    />
                  </Col>
                  <Col md="12">
                    <button className="registerButton">ثبت نام</button>
                  </Col>
                  <Col md="12">
                    <div className="formButtons">
                      <button className="registerButton d-flex">
                        <span>ثبت نام از طریق</span>
                        <span>
                          <img src={googleIcon} />
                        </span>
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
