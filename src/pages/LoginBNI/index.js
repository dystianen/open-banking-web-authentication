import React, { useEffect, useState } from "react";
import { Button, Card, Form, Image, Input, Typography, message } from "antd";
import BNI from "../../assets/logo/BNI.png";
import { styles } from "./Style";
import { SlidesLoginPage } from "../../component/Slides/SlidesLoginPage";
import { observer } from "mobx-react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { PageLogin } from "./../../component/Layouts/PageLogin";
import { Metrics } from "./../../styles/Metric";
import { Color } from './../../styles/Color';
import { useStore } from "../../utils/useStore";
import { DynamicSheet } from "../../component/DynamicSheet";
import { StaticSheet } from "../../component/StaticSheet";
import keminfo from "../../assets/images/keminfo.png";
import isoLogo from "../../assets/images/iso-2.png";
import aftechLogo from "../../assets/images/aftech.png";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

export const LoginBNI = observer(() => {
    const history = useHistory();
    const store = useStore();
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [intructionData, setIntructionData] = useState([]);
    const [indexSlide, setIndexSlide] = useState(0);

    const instructionLogin = intructionData.find(it => it.name === 'How To Login')
    const instructionForgot = intructionData.find(it => it.category === 'Forgot Password');

    useEffect(() => {
        fetchData();
    }, []);

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

    const onOpenSheet = (value, index) => {
        setOpen(value);
        setIndexSlide(index)
    };

    const onDismiss = () => {
        setOpen(false);
    };

    async function fetchData() {
        const res = await store.bni_login.institution('b1fa4875-e4de-4496-8913-0226f0e7b728');
        setIntructionData(res.body.data.instruction);
    }

    async function onFinish(values) {
        try {
            setIsLoading(true);
            const body = {
                email: values.email,
                password: values.password,
            }

            console.log({ body })
            // const res = await store.bni_login.login(body);

            history.push("/bni-success")
        } catch (e) {
            message.error(e)
        }
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
            <Form layout={"vertical"} form={form} onFinish={onFinish}>
                <Form.Item name={"email"} label={"Email"} rules={[{
                    required: true,
                    message: "Please input your email!"
                }]}>
                    <Input style={styles.input} placeholder={"email@example.com"} />
                </Form.Item>
                <Form.Item name={"password"} label={"Password"} rules={[{
                    required: true,
                    message: "Please input your password!"
                }]}>
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
                    style={{ backgroundColor: Color.secondary, color: "#FFFFFF" }}
                    block
                    size="large"
                    htmlType="submit"
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
                {indexSlide === 1 ? <StaticSheet data={dataHardcode} /> :
                    <DynamicSheet data={indexSlide === 2 ? instructionForgot : instructionLogin} />}
            </BottomSheet>
        </PageLogin>
    );
});
