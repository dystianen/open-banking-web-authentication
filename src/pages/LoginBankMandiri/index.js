import React, { useState } from "react";
import { observer } from 'mobx-react-lite';
import { useStore } from "../../utils/useStore";
import { Button, Image, Carousel, Col, Form, Input, Row, Typography } from 'antd';
import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import LivinMandiri from "../../assets/images/mandiri.png";
import TrustLink from "../../assets/images/trustlink.png";

const { Title } = Typography;

export const LoginBankMandiri = observer(() => {
    const store = useStore();
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    // Form
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const contentStyle = {
        width: "90vw",
        background: '#F5F5F5',
        borderRadius: "10px",
        padding: 20
    };

    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <Row justify={'center'}>
                <FixedTopBar />
                <Col>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 0 }}>
                        <Button size="large" type="link" icon={<ArrowLeftOutlined />} />
                        <Button size="large" type="link" icon={<CloseOutlined />} />
                    </div>
                    <div style={{
                        // marginTop: '0',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: 20,
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>

                            <Row justify="center">
                                <img style={{ width: 170 }} src={LivinMandiri} />
                            </Row>

                            <Title
                                level={4}
                                style={{
                                    // margin: 0,
                                    // padding: 0,
                                    // marginLeft: 5,
                                    // color: "#413d3e",
                                    fontWeight: 600,
                                    textAlign: "center",
                                    marginTop: 20,
                                    marginBottom: 20
                                }}
                            >
                                Insert your credentials to start.
                            </Title>

                            <Form
                                name="basic"
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                    style={{ marginBottom: 0 }}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Row justify="end" style={{ marginTop: 0 }}>
                                    <Button type="link">
                                        Forgot Password?
                                    </Button>
                                </Row>

                                <Form.Item>
                                    <Button block size="large" type="primary" htmlType="submit">
                                        Connect Account
                                    </Button>
                                </Form.Item>
                            </Form>

                            <Title level={5} style={{ fontWeight: 400, }}>
                                Need a Guide?
                            </Title>

                            <Carousel style={contentStyle}>
                                <div>
                                    <Row gutter={24}>
                                        <Col span={2}>
                                            <ArrowLeftOutlined />
                                        </Col>
                                        <Col span={22}>
                                            Do you find difficulties in logging into your Livin’ by Mandiri account?
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row gutter={24}>
                                        <Col span={2}>
                                            <ArrowLeftOutlined />
                                        </Col>
                                        <Col span={22}>
                                            Do you find difficulties in logging into your Livin’ by Mandiri account?
                                        </Col>
                                    </Row>
                                </div>
                            </Carousel>

                            <Title level={5} style={{ letterSpacing: 5, fontWeight: 400, textAlign: "center", marginTop: 20 }}>
                                POWERED BY
                            </Title>

                            <Row justify="center">
                                <img style={{ width: 150 }} src={TrustLink} />
                            </Row>

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
});
