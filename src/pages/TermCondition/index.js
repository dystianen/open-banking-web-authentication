import React, {useState} from "react";
import {observer} from 'mobx-react-lite';
import {useStore} from "../../utils/useStore";
import {Button, Card, Checkbox, Col, Form, Input, Row, Typography, Steps, Image} from 'antd';
import {ClockCircleOutlined, CloseOutlined, LoadingOutlined, LockOutlined, UserOutlined} from '@ant-design/icons';
import {useHistory} from "react-router-dom";

import verified from "../../assets/images/verified.svg";
import lock from "../../assets/images/lock.svg";
import eyeSlash from "../../assets/images/eye-slash.svg";
import logo from "../../assets/images/trustlink-logo.png";
import pdf from "../../assets/Test.pdf";
import {FixedTopBar} from "../../component/Header/FixedTopBar";

const {Step} = Steps

export const TermCondition = observer(() => {
    const store = useStore();
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    const onClickPdf = () => {
        window.open(pdf)
    }

    const renderIconSteps = (icon) => (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', height: 30, width: 30, backgroundColor: '#FE6601', borderRadius: '50%', boxShadow: '0 0 0 5px #FE660133'}}>
                <img src={icon} style={{margin: "auto"}} />
            </div>
        </div>
    )

    return (
        <div style={{ backgroundColor: "#CBDFFF" }}>
            <div style={{width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <FixedTopBar />
                <div style={{backgroundColor: '#e3e8ee', borderRadius: '15px 15px 0 0',}}>
                    <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: 20, paddingRight: 15}}>
                        <CloseOutlined style={{fontSize: 18}}/>
                    </div>
                    <Row justify={'center'}>
                        <Col span={24}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginTop: '10px',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: 37}}>
                                    <Typography.Paragraph
                                        style={{
                                            fontSize: 30,
                                            fontWeight: 700,
                                            color: "#04204D",
                                        }}
                                    >
                                        Trust<span style={{
                                        color: '#FE7519',
                                        fontSize: 30,
                                        fontWeight: 500,
                                    }}>Connect</span>
                                    </Typography.Paragraph>
                                </div>

                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', marginTop: 33}}>
                                    <Typography.Paragraph
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: "#121014",
                                            textAlign: 'center'
                                        }}
                                    >
                                        Connect Your Financial Account <br/>to Your App Easy as 1-2-3
                                    </Typography.Paragraph>
                                </div>

                            </div>
                        </Col>
                        <Col span={24}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                flexDirection: 'column',
                                width: '100%',
                                margin: "auto",
                                paddingLeft: 30,
                                paddingTop: 55
                            }}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
                                    <Steps direction="vertical" current={2}>
                                        <Step title="Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim." icon={renderIconSteps(verified)} />
                                        <Step title="Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim" icon={renderIconSteps(eyeSlash)} />
                                        <Step title="Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim" icon={renderIconSteps(lock)} />
                                    </Steps>
                                </div>
                            </div>
                        </Col>

                        <Col span={24}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                flexDirection: 'column',
                                width: '100%',
                                margin: "auto",
                                paddingTop: 78
                            }}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
                                    <Typography.Paragraph style={{
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: "#161D24",
                                        textAlign: 'center'
                                    }}>
                                        By clicking "Next", you are agree to the <br/> <span style={{
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: "#FE6601",
                                    }} onClick={onClickPdf}>terms and condition</span> & <span style={{
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: "#FE6601"}} onClick={onClickPdf}>privacy policy</span>
                                    </Typography.Paragraph>

                                    <Button onClick={() => {history.push('bank-list')}} style={{marginTop: 18, width: '350px', height: '56px', alignSelf: 'center', borderRadius: 9, backgroundColor: '#FE6601', boxShadow: '0px 8px 12px #FE660133'}}>
                                        <Typography.Paragraph style={{
                                            fontSize: 20,
                                            fontWeight: 700,
                                            color: "#FAFAFA",
                                            textAlign: 'center',
                                            margin: "auto"
                                        }}>
                                            Next
                                        </Typography.Paragraph>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginTop: '60px',
                                flexDirection: 'column',
                                width: '100%',
                                margin: "auto",
                            }}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
                                    <Typography.Paragraph style={{
                                        paddingTop: 65,
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: "#4B4C48",
                                        textAlign: 'center',
                                        letterSpacing: '3px',
                                        marginBottom: 0
                                    }}>
                                        POWERED BY
                                    </Typography.Paragraph>

                                    <img src={logo} style={{alignSelf: 'center', width: 140}} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
});
