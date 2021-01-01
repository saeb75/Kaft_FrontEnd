import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import kaft_logo from "../../assents/kaft_logo.svg";
import socks from "../../assents/socks.jpg";
import gift from "../../assents/gift.jpg";
import coupon from "../../assents/coupon.jpg";
import { MdShoppingCart } from "react-icons/md";
import { GiPoloShirt } from "react-icons/gi";
import { GiSocks, GiPriceTag } from "react-icons/gi";
import { FaGift } from "react-icons/fa";

const Header = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid #dfded9",
        zIndex: 999,
      }}
    >
      <Container className="header_container" fluid>
        <Container className="d-flex  header_container_in">
          <div className="header_buttons_container">
            <button className="mr-2">ثبت نام</button>
            <button> ورود</button>
          </div>
          <a href="#" className="logo">
            <img src={kaft_logo} />
          </a>
        </Container>
      </Container>
      <Container className="menu_container" fluid>
        <Container className="h-100">
          <nav className="menu_navbar ">
            <ul>
              <li>
                <a>مردانه</a>
                <ul className="dropDowns">
                  <div className="dropDownFirstPostion">
                    <li>
                      <a>
                        <GiPoloShirt className="shirt_icon" />
                        تی شرت
                      </a>
                    </li>
                    <li>
                      <a>
                        <GiPoloShirt className="shirt_icon" />
                        تی شرت
                      </a>
                    </li>
                    <li>
                      <a>
                        <GiPoloShirt className="shirt_icon" />
                        تی شرت
                      </a>
                    </li>
                    <li>
                      <a>
                        <GiPoloShirt className="shirt_icon" />
                        تی شرت
                      </a>
                    </li>
                    <li>
                      <a>
                        <GiPoloShirt className="shirt_icon" />
                        تی شرت
                      </a>
                    </li>
                    <li>
                      <a>
                        <GiPoloShirt className="shirt_icon" />
                        تی شرت
                      </a>
                    </li>
                    <li>
                      <a>
                        <GiPoloShirt className="shirt_icon" />
                        تی شرت
                      </a>
                    </li>
                  </div>
                  <div className="dropDownSecoundPostion">
                    <li className="p-0 px-0">
                      <img src={socks} alt="" />
                      <a href="" className="dropDownSecoundPostion_link">
                        <h1>
                          <GiSocks />
                        </h1>
                        <div className="not_hover">
                          <h5 className="text-center">جوراب کافت</h5>
                          <p>یکی بخر دوتا ببر</p>
                        </div>
                        <div className="hover_effect">
                          <p> اطلاعات بیشتر </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <img src={gift} alt="" />
                      <a href="">
                        <h1 style={{ color: "white" }}>
                          <FaGift />
                        </h1>
                        <div className="not_hover">
                          <h5 className="text-center">کارت هدیه ببر </h5>
                          <p>در قرعه کشی شرکت کن و کارت هدیه ببر </p>
                        </div>
                        <div className="hover_effect">
                          <p> اطلاعات بیشتر </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <img src={coupon} alt="" />
                      <a href="">
                        <h1 style={{ color: "white" }}>
                          <GiPriceTag />
                        </h1>
                        <div className="not_hover">
                          <h5 className="text-center">کد تخیف </h5>
                          <p> برای اطلاع از کدهای تخیف کلیک کن</p>
                        </div>
                        <div className="hover_effect">
                          <p> اطلاعات بیشتر </p>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
              </li>
              <li>
                <a>زنانه</a>
              </li>
              <li>
                <a>طرح‌های خاص</a>
              </li>
              <li>
                <a>درباره ما</a>
              </li>
              <li>
                <a>بیشتر</a>
              </li>
            </ul>
            <div className="shopping_cart_icon">
              <a href="#">
                <span>0</span>
                <MdShoppingCart className="shpping_icon mr-3" />
              </a>
            </div>
          </nav>
        </Container>
      </Container>
    </div>
  );
};

export default Header;
