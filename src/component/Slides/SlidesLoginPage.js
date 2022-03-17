/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import check from "../../assets/icons/check.svg";
import question from "../../assets/icons/question.svg";
import { Col, Row } from "antd";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const SlidesLoginPage = (props) => {
  const { title, onOpenSheet } = props;

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
      text: `Do you find difficulties in logging into your ${title} account?`,
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
      <div style={{ marginTop: 30, marginBottom: -18, color: "#71757C" }}>
        <p style={{ marginLeft: 10 }}>Need a guide?</p>
      </div>
      <div>
        <Slide {...propertiesSlide}>
          {dataSlide.map((el, index) => (
            <div
              key={index}
              style={{ padding: 5, paddingBottom: 10 }}
              onClick={() => onOpenSheet(true, index)}
            >
              <Row
                style={{
                  backgroundColor: "white",
                  minHeight: "70px",
                  padding: 10,
                  borderRadius: 10,
                  boxShadow: "0px 4px 8px 0px #dddddd",
                  alignItems: "center",
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
                <Col
                  span={19}
                  style={{
                    color: "#71757C",
                    fontSize: "12pt",
                    paddingLeft: 10,
                  }}
                >
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
