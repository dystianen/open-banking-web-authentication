import React, { useState } from "react";
import { observer } from 'mobx-react-lite';
import { useStore } from "../../utils/useStore";
import { Button, Card, Carousel, Col, Form, Input, Row, Typography } from 'antd';
import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import LivinMandiri from "../../assets/images/mandiri.png";
import TrustLink from "../../assets/images/trustlink.png";
import OutlineShieldCheck from "../../assets/images/outline-shield-check.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons"
import { styles, CarouselStyle } from "./style";

const { Title, Text } = Typography;

export const LoginMandiri = observer(() => {

    // Form
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <FixedTopBar />
            <Card style={styles.card}>
                <div style={styles.container}>
                    <Row justify={'center'}>
                        <Col>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 0 }}>
                                <Button size="large" type="link" icon={<ArrowLeftOutlined />} />
                                <Button size="large" type="link" icon={<CloseOutlined />} />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                margin: 20,
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>

                                    <Row justify="center">
                                        <img style={{ width: 150 }} src={LivinMandiri} />
                                    </Row>

                                    <Title
                                        level={4}
                                        style={{
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
                                        size="large"
                                    >
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[{ required: false, message: 'Please input your email!' }]}
                                        >
                                            <Input placeholder="email@example.com" />
                                        </Form.Item>

                                        <Form.Item
                                            label="Password"
                                            name="password"
                                            rules={[{ required: false, message: 'Please input your password!' }]}
                                            style={{ marginBottom: 0 }}
                                        >
                                            <Input.Password placeholder="******" />
                                        </Form.Item>

                                        <Row justify="end" style={{ margin: 10 }}>
                                            <Button type="link">
                                                Forgot password ?
                                            </Button>
                                        </Row>

                                        <Form.Item>
                                            <Button style={styles.btnLogin} block size="large" htmlType="submit">
                                                Connect Account
                                            </Button>
                                        </Form.Item>
                                    </Form>

                                    <Title level={5} style={{ fontWeight: 400, marginTop: 50 }}>
                                        Need a guide?
                                    </Title>

                                    <Carousel infinite={false} style={CarouselStyle}>
                                        <div>
                                            <Row gutter={24} align="middle">
                                                <Col span={3}>
                                                    <FontAwesomeIcon size="lg" icon={faCircleQuestion} />
                                                </Col>
                                                <Col span={21}>
                                                    <Text style={{ fontSize: 14 }}>
                                                        Do you find difficulties in logging into your Livin’ by Mandiri account?
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div>
                                            <Row gutter={24} align="middle">
                                                <Col span={3}>
                                                    <img style={{ width: 20 }} src={OutlineShieldCheck} />
                                                </Col>
                                                <Col span={21}>
                                                    <Text style={{ fontSize: 14 }}>
                                                        How do we ensure the security of your data?
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Carousel>

                                    <Title
                                        level={5}
                                        style={{
                                            letterSpacing: 4,
                                            fontWeight: 400,
                                            textAlign: "center",
                                            marginTop: 50,
                                            marginBottom: 0,
                                            textTransform: "uppercase"
                                        }}
                                    >
                                        Powered By
                                    </Title>

                                    <Row justify="center">
                                        <img style={{ width: 200 }} src={TrustLink} />
                                    </Row>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>
        </>
    );
});
