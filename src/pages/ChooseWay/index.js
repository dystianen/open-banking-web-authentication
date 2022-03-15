import React from "react";
import { observer } from "mobx-react-lite";
import {Button, Col, Row, Typography, Card, Badge} from "antd";
import { useHistory } from "react-router-dom";
import autoVerification from "../../assets/images/auto-verification.svg";
import manualVerification from "../../assets/images/manual-verification.svg";
import userPrefer from "../../assets/images/user-prefer.svg";
import { PageLogin } from "../../component/Layouts/PageLogin";

export const ChooseWay = observer(() => {
    let history = useHistory();

    return (
        <PageLogin>
            <Row justify={"center"}>
                <Col span={24}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "10px",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "stretch",
                                height: 37,
                            }}
                        >
                            <Typography.Paragraph
                                style={{
                                    fontSize: 18,
                                    fontWeight: 500,
                                    color: "#121014",
                                }}
                            >
                                Choose your way of Connecting
                            </Typography.Paragraph>
                        </div>
                    </div>
                </Col>
                <Col span={24}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexDirection: "column",
                            width: "100%",
                            margin: "auto",
                            paddingLeft: 5,
                            paddingTop: 25,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "stretch",
                            }}
                        >
                            <Badge count={<img src={userPrefer} />} color={'#0581FF'} offset={[-70,0]}>
                                <Card bodyStyle={{padding: '20px'}} style={{marginBottom: 20}}>
                                    <Row justify={'space-between'} gutter={16}>
                                        <Col span={6}>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        height: 45,
                                                        width: 45,
                                                        backgroundColor: "#0581FF",
                                                        borderRadius: "50%",
                                                        boxShadow: "0 0 0 7px #0581ff40",
                                                    }}
                                                >
                                                    <img src={autoVerification} style={{ margin: "auto" }} alt="logo" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={18}>
                                            <Typography.Paragraph
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                    color: "#161D24",
                                                    marginBottom: 5
                                                }}
                                            >
                                                Automatic Verification
                                            </Typography.Paragraph>
                                            <Typography.Paragraph
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: "#121014",
                                                }}
                                            >
                                                Faster verification just by connecting your account.
                                            </Typography.Paragraph>
                                        </Col>
                                        <Col span={24} style={{marginTop: 10}}>
                                            <Button onClick={() => {}} style={{width: '100%', height: 35, backgroundColor: '#04204D', color: '#FFF'}}>Proceed Automaticly</Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Badge>

                            <Card bodyStyle={{padding: '20px'}}>
                                <Row justify={'space-between'} gutter={16}>
                                    <Col span={6}>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    height: 45,
                                                    width: 45,
                                                    backgroundColor: "#71757C",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 0 7px #71757c40",
                                                }}
                                            >
                                                <img src={manualVerification} style={{ margin: "auto" }} alt="logo" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Paragraph
                                            style={{
                                                fontSize: 16,
                                                fontWeight: 700,
                                                color: "#161D24",
                                                marginBottom: 5
                                            }}
                                        >
                                            Manual Verification
                                        </Typography.Paragraph>
                                        <Typography.Paragraph
                                            style={{
                                                fontSize: 12,
                                                fontWeight: 400,
                                                color: "#121014",
                                            }}
                                        >
                                            Requires to upload some documents to verify.
                                        </Typography.Paragraph>
                                    </Col>
                                    <Col span={24} style={{marginTop: 10}}>
                                        <Button onClick={() => {}} style={{width: '100%', height: 35, color: '#04204D'}} ghost>Proceed Manually</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </div>
                </Col>
            </Row>
        </PageLogin>
    );
});
