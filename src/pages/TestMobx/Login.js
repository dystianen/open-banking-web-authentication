import React, { useState } from "react";
import { observer } from 'mobx-react-lite';
import { useStore } from "../../utils/useStore";
import { Button, Card, Checkbox, Col, Form, Input, Row, Typography, message, Image } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export const TestLogin = observer(() => {
    const store = useStore();
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    const onFinish = async values => {
        try {
            const values = await form.validateFields();
            if (values.remember) {
                localStorage.setItem('username', values.username);
            }
            const data = {
                username: values.username,
                password: values.password,
            };
            setLoading(true);
            await store.authentication.login(data)
            if (store.authentication.dataUser === 'superadmin') {
                history.replace('/test/member')
            } else {
                history.replace("/test/login");
                console.log("Poke");
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
            if (err.response?.body.message) {
                message.error(err.response?.body.message)
            } else {
                message.error(err.message)
            }
        }
        console.log('Success:', values);
    };

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Row justify={'center'}>
            <Col>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Card
                        style={{ width: 320, textAlign: 'center' }}
                        headStyle={{ fontSize: 13, fontWeight: 200 }}
                        className={"shadow"}
                        bordered={true}
                        title={'Sign in to your account'}
                    >
                        <Form
                            form={form}
                            layout={'vertical'}
                            name="normal_login"
                            className="login-form"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                size={'large'}
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                                    type="text"
                                    placeholder="username: admin or user"
                                />
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginBottom: 0,
                                }}
                                label="Password"
                                name="password"
                                size={'large'}
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                                    type="password"
                                    placeholder="enter your password"
                                />
                            </Form.Item>

                            <Button type="primary"
                                block
                                style={{ marginTop: '30px' }}
                                loading={loading}
                                htmlType="submit"
                                size={'large'}
                                onSubmit={onFinish}
                                className="login-form-button">
                                Sign In
                            </Button>
                        </Form>
                    </Card>
                </div>
            </Col>
        </Row>
    </div>;
});
