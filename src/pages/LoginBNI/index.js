import React, { useState } from "react";
import { Button, Card, Form, Image, Input, Typography } from "antd";
import LogoBNI from "../../assets/logo/BNI.png";
import { styles } from "./Style";
import { SlidesLoginPage } from "../../component/Slides/SlidesLoginPage";
import { observer } from "mobx-react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { PageLogin } from "./../../component/Layouts/PageLogin";

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
      <div style={{ color: "#4B4C48" }}>
        <div style={styles.logo}>
          <Image src={LogoBNI} style={{ width: "10em" }} />
          <Title level={5} style={{ marginTop: "20px" }} strong>
            Insert your credentials to start.
          </Title>
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
