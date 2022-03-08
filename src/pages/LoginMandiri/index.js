import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../utils/useStore";
import {
  Button,
  Card,
  Carousel,
  Col,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import LivinMandiri from "../../assets/images/mandiri.png";
import TrustLink from "../../assets/images/trustlink.png";
import { styles } from "./style";
import { BottomSheet } from "react-spring-bottom-sheet";
import { SlidesLoginPage } from "../../component/Slides/SlidesLoginPage";
import Footer from "./components/Footer";

import "react-spring-bottom-sheet/dist/style.css";

const { Title, Text } = Typography;

export const LoginMandiri = observer(() => {
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  const onOpenSheet = (value) => {
    setOpen(value);
  };

  // Form
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onDismiss = () => {
    setOpen(false);
  };

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
                <img src={LivinMandiri} style={styles.logoMandiri} />
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
        <SlidesLoginPage
          title={`Livin' by Mandiri`}
          onOpenSheet={onOpenSheet}
        />
        <Footer />
      </div>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ maxHeight }) => maxHeight / 2}
      >
        My awesome content here
      </BottomSheet>
    </div>
  );
});
