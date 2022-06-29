import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../utils/useStore";
import {Button, Form, Input, Typography, message, Spin} from "antd";
import shopee from "../../assets/logo/shopee.png";
import {styles} from "../../styles/index";
import {BottomSheet} from "react-spring-bottom-sheet";
import {SlidesLoginPage} from "../../component/Slides/SlidesLoginPage";
import isoLogo from "../../assets/images/iso-2.png";
import aftechLogo from "../../assets/images/aftech.png";
import keminfo from "../../assets/images/keminfo.png";
import {useHistory, useLocation} from "react-router-dom";

import "react-spring-bottom-sheet/dist/style.css";
import {PageLogin} from "../../component/Layouts/PageLogin";
import {Metrics} from "../../styles/Metric";
import {Color} from "../../styles/Color";
import {DynamicSheet} from "../../component/DynamicSheet";
import {StaticSheet} from "../../component/StaticSheet";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

const {Title} = Typography;

export const LoginShopee = observer(() => {
    const history = useHistory();
    const store = useStore();
    const {search} = useLocation();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [indexSlide, setIndexSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const instructionLogin = data.find((it) => it.name === "How To Login");
    const instructionForgot = data.find((it) => it.name === "Forgot Password");

    useEffect(() => {
        loadInitialData();
    }, []);

    const loadInitialData = async () => {
        try {
            setLoading(true);
            const res = await store.shopee_login.getData(
                `d66b02dd-546d-4d03-bf6f-d6e3aa57996a`
            );
            setData(res.data?.instruction);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e, "error");
        }
    };

    const onOpenSheet = (value, index) => {
        setOpen(value);
        setIndexSlide(index);
    };

    const onFinishSandbox = async () => {
        const values = await form.validateFields();
        const data = {
            userId: localStorage.getItem('userID'),
            username: values.email,
            password: values.password,
            customerIdentifier: localStorage.getItem('customer_ref_id'),
            customerName: localStorage.getItem('customer_name'),
            bankCode: localStorage.getItem('bankCode'),
            bankId: localStorage.getItem('bankId')
        };
        localStorage.setItem('data', JSON.stringify(data));
        history.push(`/shopee-otp${search}`);
    };

    const onFinish = async () => {
        const values = await form.validateFields();
        const data = {
            userId: localStorage.getItem('userID'),
            username: values.email,
            password: values.password,
            customerIdentifier: localStorage.getItem('customer_ref_id'),
            customerName: localStorage.getItem('customer_name'),
            bankCode: localStorage.getItem('bankCode'),
            bankId: localStorage.getItem('bankId')
        };
        try {
            setLoading(true);
            const res = await store.shopee_login.postLogin(data);
            localStorage.setItem('data', JSON.stringify(data));
            localStorage.setItem('referenceNo', res.body.data.referenceNo);
            localStorage.setItem('secCode', res.body.data.secCode);
            setLoading(false);
            history.push(`/shopee-otp`);
        } catch (err) {
            setLoading(false);
            console.log(err, "error post");
            message.error(err.response.data.message);
        }
    };

    const onDismiss = () => {
        setOpen(false);
    };

    const dataHardcode = [
        {
            id: 1,
            image: keminfo,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim.",
        },
        {
            id: 2,
            image: isoLogo,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim.",
        },
        {
            id: 3,
            image: aftechLogo,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim.",
        },
    ];

    return (
        <PageLogin>
            <Spin spinning={loading}>
                <div style={{marginBottom: 30, marginTop: 40}}>
                    <div style={{height: 70}}>
                        <div
                            style={{
                                display: "flex",
                                justifyItems: "center",
                                height: 80,
                            }}
                        >
                            <img
                                src={shopee}
                                style={{
                                    height: 80,
                                    width: "auto",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "inline-block",
                                    alignSelf: "flex-end",
                                    marginBottom: 20,
                                }}
                                alt="BNI"
                            />
                        </div>
                    </div>
                    <Title
                        style={{
                            marginTop: 12,
                            letterSpacing: "0.2px",
                            fontSize: 20,
                            fontWeight: Metrics.fontWeight,
                            textAlign: "center",
                            color: "#4B4C48",
                        }}
                    >
                        Insert your credentials to start.
                    </Title>
                </div>
                <Form layout={"vertical"} form={form}>
                    <Form.Item
                        name={"email"}
                        style={{color: "#4B4C48"}}
                        label={
                            <label style={{color: "#161D24", fontSize: "12pt"}}>
                                Username
                            </label>
                        }
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input
                            type={"email"}
                            style={styles.input}
                            placeholder={"email@example.com"}
                        />
                    </Form.Item>
                    <Form.Item
                        name={"password"}
                        label={
                            <label style={{color: "#161D24", fontSize: "12pt"}}>
                                Password
                            </label>
                        }
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password
                            style={styles.input}
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone
                                        style={{
                                            color: Color.secondary,
                                        }}
                                    />
                                ) : (
                                    <EyeInvisibleOutlined
                                        style={{
                                            color: Color.secondary,
                                        }}
                                    />
                                )
                            }
                            placeholder={"********"}
                        />
                    </Form.Item>
                    <div style={styles.forgotPassword}>
                        <Button
                            type="link"
                            style={{color: "#93969B"}}
                            onClick={() => {
                                setIndexSlide(2);
                                setOpen(true);
                            }}
                        >
                            Forgot password ?
                        </Button>
                    </div>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({errors}) => errors.length).length
                                }
                                style={{
                                    padding: "1.5rem 1rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "19px",
                                    letterSpacing: "1px",
                                }}
                                onClick={() => {
                                    if (localStorage.getItem("type") === 'sandbox') {
                                        onFinishSandbox()
                                    } else {
                                        onFinish();
                                    }
                                }}
                            >
                                Connect Account
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </Spin>
            <div>
                <SlidesLoginPage
                    title={`Livin' by Mandiri`}
                    onOpenSheet={onOpenSheet}
                />
                <BottomSheet
                    open={open}
                    onDismiss={onDismiss}
                    snapPoints={({maxHeight}) => maxHeight / 2.1}
                >
                    {indexSlide === 1 ? (
                        <StaticSheet data={dataHardcode}/>
                    ) : (
                        <DynamicSheet
                            data={indexSlide === 2 ? instructionForgot : instructionLogin}
                        />
                    )}
                </BottomSheet>{" "}
            </div>
        </PageLogin>
    );
});