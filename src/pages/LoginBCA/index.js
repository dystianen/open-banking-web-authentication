/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BCA from "../../assets/logo/bca.png";
import { Button, Form, Input, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { styles } from "./styles";
import { SlidesLoginPage } from "../../component/Slides/SlidesLoginPage";
import { PageLogin } from "./../../component/Layouts/PageLogin";
import { Metrics } from "../../styles/Metric";
import { Color } from './../../styles/Color';

const { Title } = Typography;
export const LoginBCA = observer(() => {
  const store = useStore();
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  // async function fetchData() {
  //   const res = await store.
  // }

  const onOpenSheet = (value) => {
    setOpen(value);
  }

  const onDismiss = () => {
    setOpen(false);
    setOpenForgotPassword(false);
  }

  async function onFinishLoginBCA(values) {
    try {

      const body = {
        email: values.email,
        password: values.password
      };

      setIsLoading(true);
      await store.auth_bca.login(body);
      setIsLoading(false);

    } catch (e) {
      setIsLoading(false);
      throw e
    }
  }

  return (
    <PageLogin>
      <div style={{ marginBottom: 30 }}>
        <div style={{ height: 70 }}>
          <div style={{ display: "flex", justifyItems: "center" }}>
            <img
              src={BCA}
              style={{
                height: 80,
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
          Forgot Password
        </BottomSheet>
      </Spin>
    </PageLogin >
  );
});
