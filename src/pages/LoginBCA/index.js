/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from "react";
import BCA from "../../assets/logo/bca.png";
import {Button, Form, Input, Typography, Spin, Row, message} from "antd";
import {observer} from "mobx-react-lite";
import {styles} from "./styles";
import {SlidesLoginPage} from "../../component/Slides/SlidesLoginPage";
import {PageLogin} from "./../../component/Layouts/PageLogin";
import {Metrics} from "../../styles/Metric";
import {Color} from "./../../styles/Color";
import {BottomSheet} from "react-spring-bottom-sheet";
import {useStore} from "../../utils/useStore";
import {useHistory, useLocation} from "react-router-dom";

// Components
import {DynamicSheet} from "../../component/DynamicSheet";
import {StaticSheet} from "../../component/StaticSheet";

// FontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-regular-svg-icons";

// logo
import isoLogo from "../../assets/images/iso-2.png";
import aftechLogo from "../../assets/images/aftech.png";
import keminfo from "../../assets/images/keminfo.png";
import {EyeTwoTone} from "@ant-design/icons";
import {EyeInvisibleOutlined} from "@ant-design/icons";

const {Title, Text} = Typography;

export const LoginBCA = observer(() => {
    const store = useStore();
    const history = useHistory();
    const [form] = Form.useForm();
    const {search} = useLocation();

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [indexSlide, setIndexSlide] = useState(0);

    const instructionLogin = data?.find((it) => it?.name === "How To Login");
    const instructionForgot = data?.find((it) => it?.name === "Forgot Password");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const res = await store.bca_login.institution(
                "b1fa4875-e4de-4496-8913-0226f0e7b728"
            );
            setData(res.body?.data?.instruction);
        } catch (error) {
            console.log("Err: ", error);
        }
    }

    const onOpenSheet = (value, index) => {
        setOpen(value);
        setIndexSlide(index);
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

    async function onFinishLoginBCA(values) {
        try {
            const body = {
                userId: localStorage.getItem('userID'),
                username: values.email,
                password: values.password,
                customerIdentifier: localStorage.getItem('customer_ref_id'),
                customerName: localStorage.getItem('customer_name'),
                bankCode: localStorage.getItem('bankCode'),
                bankId: localStorage.getItem('bankId')
            };

            setIsLoading(true);
            const type = localStorage.getItem('type')
            type === 'sandbox' ? await store.bca_login.loginSandbox(body): await store.bca_login.login(body);
            setIsLoading(false);

            history.push(`/bca-success${search}`);
        } catch (e) {
            setIsLoading(false);
            console.log(e.response?.data?.error, "error post");
            message.error(e.response?.data?.error);
        }
    }

    return (
        <PageLogin>
            <div>
                <Spin spinning={isLoading}>
                    <div style={{marginBottom: 30, marginTop: 40}}>
                        <div style={{height: 70}}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyItems: "center",
                                    height: 110,
                                }}
                            >
                                <img
                                    src={BCA}
                                    style={{
                                        height: 120,
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

                    <Form form={form} onFinish={onFinishLoginBCA} layout={"vertical"}>
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
                                    setOpen(true);
                                    setIndexSlide(2);
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
            </div>
            <div>
                <SlidesLoginPage title={"BCA"} onOpenSheet={onOpenSheet}/>
                <BottomSheet
                    open={open}
                    onDismiss={onDismiss}
                    snapPoints={({maxHeight}) => maxHeight / 2.1}
                    header={
                        <Row justify="start" align="middle">
                            {indexSlide === 0 ? (
                                <Text strong>
                                    <FontAwesomeIcon
                                        style={{marginRight: "0.5rem"}}
                                        icon={faQuestionCircle}
                                    />
                                    Help
                                </Text>
                            ) : indexSlide === 1 ? (
                                <Text strong>
                                    <FontAwesomeIcon
                                        style={{marginRight: "0.5rem"}}
                                        icon={faQuestionCircle}
                                    />
                                    Secure & Safe
                                </Text>
                            ) : (
                                <Text strong>
                                    <FontAwesomeIcon
                                        style={{marginRight: "0.5rem"}}
                                        icon={faQuestionCircle}
                                    />
                                    Forgot Password
                                </Text>
                            )}
                        </Row>
                    }
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
