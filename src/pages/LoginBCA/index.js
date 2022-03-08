/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import BCA from "../../assets/logo/bca.png";
import { Button, Form, Input, Typography, Spin, Row } from "antd";
import { observer } from "mobx-react-lite";
import { styles } from "./styles";
import { SlidesLoginPage } from "../../component/Slides/SlidesLoginPage";
import { PageLogin } from "./../../component/Layouts/PageLogin";
import { Metrics } from "../../styles/Metric";
import { Color } from './../../styles/Color';
import { BottomSheet } from "react-spring-bottom-sheet";
import { useStore } from "../../utils/useStore";

// Components
import { DynamicSheet } from "./components/DynamicSheet";
import { StaticSheet } from "./components/StaticSheet";

// Font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

// logo
import isoLogo from "../../assets/images/iso-2.png";
import aftechLogo from "../../assets/images/aftech.png";
import keminfo from "../../assets/images/keminfo.png";

const { Title, Text } = Typography;

export const LoginBCA = observer(() => {

  const store = useStore();
  const [form] = Form.useForm();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [indexSlide, setIndexSlide] = useState(0);

  const instructionLogin = data?.find(it => it?.name === 'How To Login')
  const instructionForgot = data?.find(it => it?.name === 'Forgot Password')

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await store.bca_login.institution("b1fa4875-e4de-4496-8913-0226f0e7b728");
      setData(res.body?.data?.instruction);
    } catch (error) {
      console.log("Err: ", error);
    }
  }

  const onOpenSheet = (value, index) => {
    setOpen(value);
    setIndexSlide(index)
  };

  const onDismiss = () => {
    setOpen(false);
    setOpenForgotPassword(false);
  }

  const dataHardcode = [
    {
      id: 1,
      image: keminfo,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim.'
    },
    {
      id: 2,
      image: isoLogo,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim.'
    },
    {
      id: 3,
      image: aftechLogo,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim.'
    },
  ]

  async function onFinishLoginBCA(values) {
    try {
      const body = {
        email: values.email,
        password: values.password
      };

      setIsLoading(true);
      await store.bca_login.login(body);
      setIsLoading(false);

    } catch (e) {
      setIsLoading(false);
      throw e
    }
  }

  return (
    <PageLogin>
      {console.log("Fetch Data: ", data)}
      <Spin spinning={isLoading}>
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

        <Form
          form={form}
          onFinish={onFinishLoginBCA}
          layout={"vertical"}
        >
          <Form.Item name={"email"} label={"User ID"}>
            <Input style={styles.input} placeholder={"email@example.com"} />
          </Form.Item>
          <Form.Item name={"password"} label={"Password"}>
            <Input.Password style={styles.input} />
          </Form.Item>
          <div style={styles.forgotPassword}>
            <Button
              type="link"
              style={{ color: "#93969B" }}
              onClick={() => {
                setOpen(true);
                setIndexSlide(2);
              }}
            >
              Forgot password ?
            </Button>
          </div>
          <Button
            block
            size="large"
            htmlType="submit"
            style={{ backgroundColor: Color.secondary, color: "#FFFFFF" }}
          >
            Connect Account
          </Button>
        </Form>

        <SlidesLoginPage title={"BCA"} onOpenSheet={onOpenSheet} />
      </Spin>

      {/* <div style={styles.bottomSheet}>
          My awesome content here
        </div> */}

      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ maxHeight }) => maxHeight / 2.1}
        header={
          <Row justify="start" align="middle">
            {
              indexSlide === 0
                ? <Text strong>
                  <FontAwesomeIcon
                    style={{ marginRight: "0.5rem" }}
                    icon={faQuestionCircle} />
                  Help
                </Text>
                : indexSlide === 1
                  ? <Text strong>
                    <FontAwesomeIcon
                      style={{ marginRight: "0.5rem" }}
                      icon={faQuestionCircle} />
                    Secure & Safe
                  </Text>
                  : <Text strong>
                    <FontAwesomeIcon
                      style={{ marginRight: "0.5rem" }}
                      icon={faQuestionCircle} />
                    Forgot Password
                  </Text>
            }
          </Row>
        }
      >
        {
          indexSlide === 1 ? <StaticSheet data={dataHardcode} />
            : <DynamicSheet data={indexSlide === 2 ? instructionForgot : instructionLogin} />
        }
      </BottomSheet>

    </PageLogin>
  );
});