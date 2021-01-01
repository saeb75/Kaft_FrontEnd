import React from "react";
import Footer from "../../Components/Footer/Footer";
import { Container } from "react-bootstrap";
import { FaGripHorizontal, FaGripVertical } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./style.css";
const ProductList = () => {
  return (
    <div>
      <Header />
      <Container className="filter_container" fluid>
        <Container
          style={{ direction: "rtl" }}
          className="d-flex justify-content-between"
        >
          <ul className="first_filter_navbar">
            <li>
              <a href="">
                دسته بندی
                <ul className="secound_filter_navbar">
                  <li>تی شرت</li>
                  <li>تی شرت</li>
                  <li>تی شرت</li>
                </ul>
              </a>
            </li>
            <li>
              <a href="">جنسیت</a>
            </li>
            <li>
              <a href="">رنگ</a>
            </li>
            <li>
              <a href="">سایز</a>
            </li>
            <li>
              <a href="">قیمت</a>
            </li>
          </ul>
          <ul className="nav navbar listStyle m-0 p-0">
            <li className="ml-2">
              <FaGripHorizontal />
            </li>
            <li>
              <FaGripVertical />
            </li>
          </ul>
        </Container>
      </Container>
      <Container className="py-4">
        <ProductCard />
      </Container>
      <Footer />
    </div>
  );
};

export default ProductList;
