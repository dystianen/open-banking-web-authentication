import React, {useState} from "react";
import {observer} from 'mobx-react-lite';
import {useStore} from "../../utils/useStore";
import {Button, Card, Checkbox, Col, Form, Input, Row, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useHistory} from "react-router-dom";

export const TermCondition = observer(() => {
    const store = useStore();
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    return (
        <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
            <Row justify={'center'}>
                <Col>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginTop: '5vh',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
                            <Typography.Paragraph
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    fontSize: 20,
                                    marginLeft: 5,
                                    fontWeight: 600,
                                    color: "#413d3e",
                                }}
                            >
                                Trust connect
                            </Typography.Paragraph>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    );
});
