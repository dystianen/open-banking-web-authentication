/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import check from "../../assets/icons/check.svg";
import question from "../../assets/icons/question.svg";
import { Col, Row } from "antd";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const SlidesLoginPage = () => {
  const propertiesSlide = {
    defaultIndex: 0,
    transitionDuration: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    onChange: (oldIndex, newIndex) => {
      setIndc(newIndex);
    },
  };

  const [indc, setIndc] = useState(0);

  const dataSlide = [
    {
      text: "Do you find difficulties in logging into your Gopay account?",
      link: "/example",
      status: false,
    },
    {
      text: "How do we ensure the security of your data?",
      link: "/example",
      status: true,
    },
  ];

  return (
    <>
      <div style={{ marginTop: 30 }}>
        <p>Need a guide?</p>
      </div>
      <div>
        <Slide {...propertiesSlide}>
          {dataSlide.map((el, index) => (
            <div key={index} style={{ padding: 5, paddingBottom: 10 }}>
              <Row
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                  boxShadow: "0px 4px 8px 0px #dddddd",
                }}
              >
                <Col
                  span={3}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={el?.status ? check : question}
                    style={{ width: 20 }}
                  />
                </Col>
                <Col span={19} style={{ color: "#71757C", fontSize: "10pt" }}>
                  {el?.text}
                </Col>
              </Row>
            </div>
          ))}
        </Slide>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
        >
          {dataSlide.map((dt, index) => {
            return (
              <div
                key={index}
                style={{
                  height: 4,
                  width: 15,
                  backgroundColor: indc === index ? "#0581FF" : "#D4DADE",
                  borderRadius: 10,
                  marginRight: 5,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
