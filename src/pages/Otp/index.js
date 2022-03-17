/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import OTPInput from "otp-input-react";
import gopay from "../../assets/logo/gopay.png";
import { SlidesLoginPage } from "./../../component/Slides/SlidesLoginPage";
import { observer } from "mobx-react-lite";
import { styles } from "./styles";
import { PageLogin } from "./../../component/Layouts/PageLogin";

export const Otp = observer(() => {
  const [OTP, setOTP] = useState("");
  return (
    <PageLogin particles_color="#107ead" particles_line="#72b7d4">
      <div>
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
      </div>
      <div>
        <SlidesLoginPage />
      </div>
    </PageLogin>
  );
});
