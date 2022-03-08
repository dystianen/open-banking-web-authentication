/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import bca from "../../assets/logo/bca.svg";
import Footer from "./components/Footer";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import { Button, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import { styles } from "./styles";
import { SlidesLoginPage } from "../../component/Slides/SlidesLoginPage";

export const LoginBCA = observer(() => {
  return (
    <div style={{ backgroundColor: "#CBDFFF" }}>
      <FixedTopBar />
      <div style={styles?.header}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <ArrowLeftOutlined style={{ fontSize: 16, color: "#71757C" }} />
          </div>
          <div>
            <CloseOutlined style={{ fontSize: 16, color: "#71757C" }} />
          </div>
        </div>
        <div style={{ color: "#4B4C48" }}>
          <div style={styles.boxLogo}>
            <div>
              <div style={{ display: "flex", justifyItems: "center" }}>
                <img src={bca} style={styles.logoBca} />
              </div>
              <p style={{ fontSize: 18, marginTop: 16 }}>
                Insert your credentials to start.
              </p>
            </div>
          </div>
        </div>
        <Form layout={"vertical"}>
          <Form.Item name={"email"} label={"Email"}>
            <Input style={styles.input} placeholder={"email@example.com"} />
          </Form.Item>
          <Form.Item name={"password"} label={"Password"}>
            <Input.Password style={styles.input} />
          </Form.Item>
          <div style={styles.forgotPassword}>
            <Button type="link" style={{ color: "#93969B" }} onClick={() => {}}>
              Forgot password ?
            </Button>
          </div>
          <Button
            style={{ backgroundColor: "#B4BCC9", color: "#FFFFFF" }}
            block
            size="large"
          >
            Connect Account
          </Button>
        </Form>
        <SlidesLoginPage />
        <Footer />
      </div>
    </div>
  );
});
