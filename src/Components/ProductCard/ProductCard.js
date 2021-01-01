import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SimpleModal from "../MyModal/Modal";
import "./style.css";
import { BsEyeFill } from "react-icons/bs";
import { data } from "../../Data/CategoryData";

const ProductCard = ({ myData }) => {
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState(myData ? myData : data);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Row>
        {productData.map(item => (
          <Col md="4">
            <Card className="categoryCard">
              <div className="cardImage">
                <img src={item.img} alt="" />
              </div>
              <div className="CardInfo">
                <div className="namePrice">
                  <p className="text-center">{item.name}</p>
                  <p className="text-center">50</p>
                </div>
                <div className="quickSee">
                  <span style={{ cursor: "pointer", padding: "10px" }}>
                    Size
                  </span>
                  <span
                    onClick={handleOpen}
                    style={{ cursor: "pointer", padding: "10px" }}
                  >
                    <BsEyeFill />
                  </span>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <SimpleModal open={open} setOpen={setOpen} />
    </>
  );
};

export default ProductCard;
