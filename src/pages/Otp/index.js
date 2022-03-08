/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import OTPInput from "otp-input-react";
import gopay from "../../assets/logo/gopay.png";
import Footer from "./components/Footer";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import { SlidesLoginPage } from "./../../component/Slides/SlidesLoginPage";
import { observer } from 'mobx-react-lite';
import { styles } from './styles';

export const Otp = observer (() => {
  const [OTP, setOTP] = useState("");
  return (
    <div style={{ backgroundColor: "#CBDFFF" }}>
      <FixedTopBar />
      <div style={styles.body}>
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
                <img src={gopay} style={styles.logoGopay} />
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
            inputStyles={styles.otpInput}
          />
        </div>
        <div style={{ marginTop: 40 }}>
          <p style={{ textAlign: "center" }}>
            <span> Didn’t receive code? </span>
            <span style={{ color: "#0581FF" }}> Request again</span>
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button style={styles.button}>Submit</button>
          </div>
        </div>
        <SlidesLoginPage />
        <Footer />
      </div>
    </div>
  );
});
