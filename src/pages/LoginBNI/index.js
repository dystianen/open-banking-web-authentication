import React, {useEffect, useState} from "react";
import {Button, Form, Input, Typography, message, Spin} from "antd";
import BNI from "../../assets/logo/BNI.png";
import {styles} from "./Style";
import {SlidesLoginPage} from "../../component/Slides/SlidesLoginPage";
import {observer} from "mobx-react";
import {BottomSheet} from "react-spring-bottom-sheet";
import {PageLogin} from "./../../component/Layouts/PageLogin";
import {Metrics} from "./../../styles/Metric";
import {Color} from "./../../styles/Color";
import {useStore} from "../../utils/useStore";
import {DynamicSheet} from "../../component/DynamicSheet";
import {StaticSheet} from "../../component/StaticSheet";
import keminfo from "../../assets/images/keminfo.png";
import isoLogo from "../../assets/images/iso-2.png";
import aftechLogo from "../../assets/images/aftech.png";
import {useHistory, useLocation} from "react-router-dom";
import {EyeTwoTone} from "@ant-design/icons";
import {EyeInvisibleOutlined} from "@ant-design/icons";

const {Title} = Typography;

export const LoginBNI = observer(() => {
    const history = useHistory();
    const store = useStore();
    const {search} = useLocation();
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [intructionData, setIntructionData] = useState([]);
    const [indexSlide, setIndexSlide] = useState(0);

    const instructionLogin = intructionData.find(
        (it) => it.name === "How To Login"
    );
    const instructionForgot = intructionData.find(
        (it) => it.category === "Forgot Password"
    );

    useEffect(() => {
        fetchData();
    }, []);

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

    const onOpenSheet = (value, index) => {
        setOpen(value);
        setIndexSlide(index);
    };

    const onDismiss = () => {
        setOpen(false);
    };

    async function fetchData() {
        const res = await store.bni_login.institution(
            "b1fa4875-e4de-4496-8913-0226f0e7b728"
        );
        setIntructionData(res.body.data.instruction);
    }

    async function onFinish(values) {
        try {
            setIsLoading(true);
            const body = {
                userId: localStorage.getItem('userID'),
                username: values.email,
                password: values.password,
                customerIdentifier: localStorage.getItem('customer_ref_id'),
                customerName: localStorage.getItem('customer_name'),
                bankCode: localStorage.getItem('bankCode'),
                bankId: localStorage.getItem('bankId'),
                partnerReferenceNo: localStorage.getItem('partnerReferenceNo')
            };
            const type = localStorage.getItem('type')
            type === 'sandbox' ? await store.bni_login.loginSandbox(body) : await store.bni_login.login(body);
            setIsLoading(false);
            history.push(`/bni-success${search}`);
        } catch (err) {
            setIsLoading(false);
            console.log(err.response?.body?.data, "error post");
            message.error(err.response?.body?.data);
        }
    }

    return (
        <PageLogin>
            <Spin spinning={isLoading}>
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
                                src={BNI}
                                style={{
                                    height: 60,
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
                <Form layout={"vertical"} form={form} onFinish={onFinish}>
                    <Form.Item
                        name={"email"}
                        label={
                            <label style={{color: "#161D24", fontSize: "12pt"}}>
                                User ID
                            </label>
                        }
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input style={styles.input} placeholder={"email@example.com"}/>
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
                            >
                                Connect Account
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </Spin>
            <div>
                <SlidesLoginPage onOpenSheet={onOpenSheet}/>

                <BottomSheet
                    open={open}
                    onDismiss={onDismiss}
                    snapPoints={({maxHeight}) => maxHeight / 2}
                >
                    {indexSlide === 1 ? (
                        <StaticSheet data={dataHardcode}/>
                    ) : (
                        <DynamicSheet
                            data={indexSlide === 2 ? instructionForgot : instructionLogin}
                        />
                    )}
                </BottomSheet>
            </div>
        </PageLogin>
    );
});
