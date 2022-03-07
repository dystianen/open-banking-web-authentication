import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  CloseOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { bca, eyeslash, lock } from "./Assets";
import Footer from "./Components/Footer";
import Slides from "./Components/Slides";

export const Bca = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div style={{ backgroundColor: "#CBDFFF" }}>
      <div>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 25,
            }}
          >
            <div>
              <div style={{ display: "flex", justifyItems: "center" }}>
                <img
                  src={bca}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: 120,
                  }}
                />
              </div>
              <p style={{ fontSize: 18, marginTop: 16 }}>
                Insert your credentials to start.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label style={{ fontSize: 16 }}>Email</label>
            <input
              style={{
                border: "1px solid #D4D4D8",
                backgroundColor: "#F6F6F6",
                borderRadius: 6,
                padding: 10,
                width: "100%",
                fontSize: "12pt",
              }}
              placeholder="email@example.com"
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label style={{ fontSize: 16 }}>Password</label>
            <div>
              <input
                type={passwordShown ? "text" : "password"}
                style={{
                  border: "1px solid #D4D4D8",
                  backgroundColor: "#F6F6F6",
                  borderRadius: 6,
                  padding: 10,
                  width: "100%",
                  fontSize: "12pt",
                }}
                placeholder="*********"
              />
              <button
                style={{
                  position: "absolute",
                  right: 30,
                  marginTop: 12,
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onClick={() => setPasswordShown(!passwordShown)}
              >
                <img
                  src={passwordShown ? eyeslash : lock}
                  style={{ width: 15 }}
                />
              </button>
            </div>
          </div>
          <div>
            <p style={{ textAlign: "right", marginTop: 10, fontSize: 16 }}>
              Forgot password ?
            </p>
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
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
