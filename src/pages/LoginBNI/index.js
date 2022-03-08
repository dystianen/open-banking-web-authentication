import React, { useState } from "react";
import { Button, Card, Form, Image, Input, Typography } from "antd";
import BNI from "../../assets/logo/BNI.png";
import { styles } from "./Style";
import { SlidesLoginPage } from "../../component/Slides/SlidesLoginPage";
import { observer } from "mobx-react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { PageLogin } from "./../../component/Layouts/PageLogin";
import { Metrics } from "./../../styles/Metric";
import { Color } from './../../styles/Color';
const { Title } = Typography;

export const LoginBNI = observer(() => {
  const [open, setOpen] = useState(false);

  const onOpenSheet = (value) => {
    setOpen(value);
  };

  const onDismiss = () => {
    setOpen(false);
  };

  return (
    <PageLogin>
      <div style={{ marginBottom: 30 }}>
        <div style={{ height: 70 }}>
          <div style={{ display: "flex", justifyItems: "center" }}>
            <img
              src={BNI}
              style={{
                height: 40,
                width: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        </div>
        <Title
          style={{
            fontSize: 18,
            fontWeight: Metrics.fontWeight,
            textAlign: "center",
          }}
        >
          Insert your credentials to start.
        </Title>
      </div>
      <Form layout={"vertical"}>
        <Form.Item name={"email"} label={"User ID"}>
          <Input style={styles.input} placeholder={"email@example.com"} />
        </Form.Item>
        <Form.Item name={"password"} label={"Password"}>
          <Input.Password style={styles.input} />
        </Form.Item>
        <div style={styles.forgotPassword}>
          <Button type="link" style={{ color: "#93969B" }} onClick={() => { }}>
            Forgot password ?
          </Button>
        </div>
        <Button
          style={{ backgroundColor: Color.secondary, color: "#FFFFFF" }}
          block
          size="large"
        >
          Connect Account
        </Button>
      </Form>
      <SlidesLoginPage onOpenSheet={onOpenSheet} />
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
