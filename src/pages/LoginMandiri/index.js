import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../utils/useStore";
import {
  Button,
  Form,
  Input,
  Typography,
    message,
} from "antd";
import LivinMandiri from "../../assets/images/mandiri.png";
import { styles } from "./style";
import { BottomSheet } from "react-spring-bottom-sheet";
import { SlidesLoginPage } from "../../component/Slides/SlidesLoginPage";
import isoLogo from "../../assets/images/iso-2.png";
import aftechLogo from "../../assets/images/aftech.png";
import keminfo from "../../assets/images/keminfo.png";
import { useHistory } from "react-router-dom";

import "react-spring-bottom-sheet/dist/style.css";
import { PageLogin } from "../../component/Layouts/PageLogin";
import { Metrics } from '../../styles/Metric';
import { Color } from '../../styles/Color';
import { DynamicSheet } from "../../component/DynamicSheet";
import { StaticSheet } from "../../component/StaticSheet";

const { Title, Text } = Typography;

export const LoginMandiri = observer(() => {
  const history = useHistory();
  const store = useStore()
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [indexSlide, setIndexSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm()

  const instructionLogin = data.find(it => it.name === 'How To Login')
  const instructionForgot = data.find(it => it.name === 'Forgot Password')

  useEffect(() => {
    loadInitialData()
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true)
      const res = await store.mandiri.getData(`b1fa4875-e4de-4496-8913-0226f0e7b728`)
      setData(res.data?.instruction)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.log(e, 'error')
    }
  }

  const onOpenSheet = (value, index) => {
    setOpen(value);
    setIndexSlide(index)
  };

  const onFinish = () => {
    form.validateFields()
      .then(async values => {
        const data = {
          username: values.username,
          password: values.password,
          customer_identifier: values.username, // Just Dummy Value
          customer_name: values.username // Just Dummy Value
        }
        try {
          setLoading(true)
          await store.mandiri.postLogin(data)
          setLoading(false)
          history.push("/mandiri-success")
        } catch (e) {
          setLoading(false)
          console.log(e, 'error post')
          message.error('Something Wrong')
        }
      }).catch(e => {
        console.log(e, 'error form')
        message.error("Please Fill Form")
      })
  };

  const onDismiss = () => {
    setOpen(false);
  };

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

  return (
    <PageLogin>
      <div style={{ marginBottom: 30 }}>
        <div style={{ height: 70 }}>
          <div style={{ display: "flex", justifyItems: "center" }}>
            <img
              src={LivinMandiri}
              style={{
                height: 60,
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
      <Form layout={"vertical"} form={form}>
        <Form.Item
          name={"username"}
          label={"User ID"}
          rules={[
            {
              required: true,
              message: "Please input your email!"
            },
            {
              type: 'email',
              message: "Please input correct email"
            }
          ]}
        >
          <Input type={"email"} style={styles.input} placeholder={"email@example.com"} />
        </Form.Item>
        <Form.Item
          name={"password"}
          label={"Password"}
          rules={[{
            required: true,
            message: "Please input your password!"
          }]}
        >
          <Input.Password style={styles.input} />
        </Form.Item>
        <div style={styles.forgotPassword}>
          <Button type="link" style={{ color: "#93969B" }} onClick={() => {
            setIndexSlide(2)
            setOpen(true)
          }}>
            Forgot password ?
          </Button>
        </div>
        <Button
          loading={loading}
          style={{ backgroundColor: Color.secondary, color: "#FFFFFF" }}
          block
          size="large"
          onClick={onFinish}
        >
          Connect Account
        </Button>
      </Form>
      <SlidesLoginPage title={`Livin' by Mandiri`} onOpenSheet={onOpenSheet} />
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ maxHeight }) => maxHeight / 2.1}
      >
        {indexSlide === 1 ? <StaticSheet data={dataHardcode} /> : <DynamicSheet data={indexSlide === 2 ? instructionForgot : instructionLogin} />}
      </BottomSheet>
    </PageLogin>
  );
});
