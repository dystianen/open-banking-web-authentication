import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  CloseOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { bca, eyeslash, lock } from "./Assets";
import Footer from "./Components/Footer";
import Slides from "./Components/Slides";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import { Button, Form, Input } from "antd";

export const Bca = () => {
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
            style={{ backgroundColor: "#93969B", color: "#FFFFFF" }}
            block
            size="large"
          >
            Connect Account
          </Button>
        </Form>
        <Slides />
        <Footer />
      </div>
    </div>
  );
};

const styles = {
  header: {
    padding: 20,
    backgroundColor: "#F6F6F6",
    minHeight: "100vh",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  boxLogo: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 25,
  },
  logoBca: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 120,
  },
  input: {
    height: "45px",
  },
  forgotPassword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: "10px",
    marginTop: "-15px",
  },
  buttonPassword: {
    position: "absolute",
    right: 30,
    marginTop: 12,
    backgroundColor: "transparent",
    border: "none",
  },
  buttonSubmit: {
    backgroundColor: "#B4BCC9",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "16px",
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%",
  },
};
