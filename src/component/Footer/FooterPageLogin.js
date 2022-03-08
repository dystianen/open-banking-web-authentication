/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import trustlink from "../../assets/logo/trustlink.png";

export default function FooterPageLogin() {
  return (
    <>
      <div
        style={{
          marginTop: 40,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <p
            style={{
              textAlign: "center",
              color: "#4B4C48",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            POWERED BY
          </p>
          <img src={trustlink} style={{ height: 50 }} />
        </div>
      </div>
    </>
  );
}
