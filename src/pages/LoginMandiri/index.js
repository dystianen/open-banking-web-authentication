import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Button,
  Form,
  Input,
  Typography,
} from "antd";
import LivinMandiri from "../../assets/images/mandiri.png";
import { styles } from "./style";
import { BottomSheet } from "react-spring-bottom-sheet";
import { SlidesLoginPage } from "../../component/Slides/SlidesLoginPage";
import "react-spring-bottom-sheet/dist/style.css";
import { PageLogin } from "./../../component/Layouts/PageLogin";

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
    <PageLogin>
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
      <SlidesLoginPage title={`Livin' by Mandiri`} onOpenSheet={onOpenSheet} />
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ maxHeight }) => maxHeight / 2}
      >
        My awesome content here
      </BottomSheet>
    </PageLogin>
  );
});
