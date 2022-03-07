import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  CloseOutlined,
  LockOutlined,
} from "@ant-design/icons";
import OTPInput from "otp-input-react";
import { gopay } from "./Assets";
import Footer from "./Components/Footer";
import Slides from "./Components/Slides";

export const Otp = () => {
  const [OTP, setOTP] = useState("");
  return (
    <div style={{ backgroundColor: "#CBDFFF" }}>
      <div style={{ backgroundColor: "#CBDFFF" }}>
        <div
          style={{
            color: "#145FD9",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <LockOutlined />
          <p style={{ marginLeft: 10, fontWeight: "bold", marginTop: 10 }}>
            You’re In Secure Connection
          </p>
        </div>
      </div>

      <div
        style={{
          padding: 20,
          backgroundColor: "#F6F6F6",
          minHeight: "100vh",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <ArrowLeftOutlined style={{ fontSize: 16, color: "#71757C" }} />
          </div>
          <div>
            <CloseOutlined style={{ fontSize: 16, color: "#71757C" }} />
          </div>
        </div>
        <div style={{ color: "#4B4C48" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <div style={{ display: "flex", justifyItems: "center" }}>
                <img
                  src={gopay}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: 150,
                  }}
                />
              </div>
              <p style={{ fontSize: 18 }}>Code is sent to +62 878 9009</p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            secure
            inputStyles={{
              width: 60,
              height: 60,
              borderRadius: "10px",
              border: "1px solid #CBDFFF",
              backgroundColor: "#FFFFFF",
              color: "#145FD9",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              padding: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          />
        </div>
        <div style={{ marginTop: 40 }}>
          <p style={{ textAlign: "center" }}>
            <span> Didn’t receive code? </span>
            <span style={{ color: "#0581FF" }}> Request again</span>
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "#B4BCC9",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "16px",
                marginTop: "10px",
                marginBottom: "10px",
                width: "100%",
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <Slides />
        <Footer />
      </div>
    </div>
  );
};
