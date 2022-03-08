import React, {useState} from "react";
import {Button, Card, Form, Image, Input, Typography, message} from "antd";
import BNI from "../../assets/logo/BNI.png";
import {styles} from "./Style";
import {SlidesLoginPage} from "../../component/Slides/SlidesLoginPage";
import {observer} from "mobx-react";
import {BottomSheet} from "react-spring-bottom-sheet";
import {PageLogin} from "./../../component/Layouts/PageLogin";
import {Metrics} from "./../../styles/Metric";
import {Color} from './../../styles/Color';
import {useStore} from "../../utils/useStore";

const {Title} = Typography;

export const LoginBNI = observer(() => {
    const store = useStore();
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [openSP, setOpenSP] = useState(false);

    const onOpenSheet = (value) => {
        setOpen(value);
    };

    const onDismiss = () => {
        setOpen(false);
    };

    async function onFinish(values) {
        try {
            setIsLoading(true);
            const body = {
                email: values.email,
                password: values.password,
            }

            console.log({body})
            // const res = await store.bni_login.login(body);
        } catch (e) {
            message.error(e)
        }
    }

    return (
        <PageLogin>
            <div style={{marginBottom: 30}}>
                <div style={{height: 70}}>
                    <div style={{display: "flex", justifyItems: "center"}}>
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
                    <Input style={styles.input} placeholder={"email@example.com"}/>
                </Form.Item>
                <Form.Item name={"password"} label={"Password"} rules={[{
                    required: true,
                    message: "Please input your password!"
                }]}>
                    <Input.Password style={styles.input}/>
                </Form.Item>
                <div style={styles.forgotPassword}>
                    <Button type="link" style={{color: "#93969B"}} onClick={() => {
                        setOpenSP(true)
                    }}>
                        Forgot password ?
                    </Button>
                </div>
                <Button
                    style={{backgroundColor: Color.secondary, color: "#FFFFFF"}}
                    block
                    size="large"
                    htmlType="submit"
                >
                    Connect Account
                </Button>
            </Form>
            <SlidesLoginPage onOpenSheet={onOpenSheet}/>

            {/* Sheet Forgot Password */}
            <BottomSheet
                open={openSP}
                onDismiss={() => setOpenSP(false)}
                snapPoints={({maxHeight}) => maxHeight / 2}
            >
                Forgot Password
            </BottomSheet>

            {/* Sheet Guide */}
            <BottomSheet
                open={open}
                onDismiss={onDismiss}
                snapPoints={({maxHeight}) => maxHeight / 2}
            >
                My awesome content here
            </BottomSheet>
        </PageLogin>
    );
});
