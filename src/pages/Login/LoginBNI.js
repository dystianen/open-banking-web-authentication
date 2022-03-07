import React from "react";
import {
    Button,
    Card,
    Carousel,
    Col,
    Form,
    Image,
    Input,
    Row,
    Typography,
} from "antd";
import {
    ArrowLeftOutlined,
    CloseOutlined,
    QuestionCircleOutlined,
} from "@ant-design/icons";
import LogoBNI from "../../assets/logo/BNI.png";
import Trustlink from "../../assets/logo/trustlink.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faShield,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FixedTopBar } from "../../component/Header/FixedTopBar";

const { Title } = Typography;

export const LoginBNI = () => {
    const styles = {
        card: {
            height: "100%",
            backgroundColor: "#F6F6F6",
            borderRadius: "15px 15px 0 0",
            marginTop: "-10px",
        },
        container: {
            display: "flex",
            flexDirection: "column",
            gap: "30px",
        },
        nav: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        logo: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        input: {
            height: "45px",
        },
        forgotPassword: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: "10px",
            marginTop: "-15px",
        },
        navButton: {
            fontSize: "20px",
            color: "#71757C",
        },
        carousel: {
            background: "#FFFFFF",
            padding: "10px 15px",
            boxShadow: "0px 6px 10px #0000000D",
            borderRadius: "8px",
        },
        guide: {
            marginBottom: 0,
            lineHeight: "20px",
            color: "#71757C",
        },
        footer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
        },
    };

    return (
        <>
            <FixedTopBar />
            <Card style={styles.card}>
                <div style={styles.container}>
                    <div style={styles.nav}>
                        <Button
                            type="link"
                            icon={
                                <FontAwesomeIcon icon={faArrowLeft} style={styles.navButton} />
                            }
                            onClick={() => { }}
                        />
                        <Button
                            type="link"
                            icon={<FontAwesomeIcon icon={faXmark} style={styles.navButton} />}
                            onClick={() => { }}
                        />
                    </div>

                    <div style={styles.logo}>
                        <Image src={LogoBNI} style={{ width: "15em" }} />
                        <Title level={5} style={{ marginTop: "20px" }} strong>
                            Insert your credentials to start.
                        </Title>
                    </div>

                    <Form layout={"vertical"}>
                        <Form.Item name={"email"} label={"Email"}>
                            <Input style={styles.input} placeholder={"email@example.com"} />
                        </Form.Item>
                        <Form.Item name={"password"} label={"Password"}>
                            <Input.Password style={styles.input} />
                        </Form.Item>
                        <div style={styles.forgotPassword}>
                            <Button
                                type="link"
                                style={{ color: "#93969B" }}
                                onClick={() => { }}
                            >
                                Forgot password ?
                            </Button>
                        </div>
                        <Button
                            style={{ backgroundColor: "#93969B", color: "#FFFFFF" }}
                            block
                            size="large"
                        >
                            Connect Account
                        </Button>
                    </Form>

                    <div style={{ marginTop: "50px" }}>
                        <Title level={5}>Need a guide?</Title>
                        <Carousel style={styles.carousel}>
                            <div>
                                <Row>
                                    <Col span={2}>
                                        <QuestionCircleOutlined style={{ fontSize: "16px" }} />
                                    </Col>
                                    <Col span={22}>
                                        <Title level={5} style={styles.guide}>
                                            Do you find difficulties in logging into your Livin' by
                                            Mandiri account?
                                        </Title>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={2}>
                                        <FontAwesomeIcon icon={faShield} />
                                    </Col>
                                    <Col span={22}>
                                        <Title level={5} style={styles.guide}>
                                            How do we ensure the security of your data?
                                        </Title>
                                    </Col>
                                </Row>
                            </div>
                        </Carousel>
                    </div>

                    <div style={styles.footer}>
                        <Title level={5} style={{ letterSpacing: "3px" }}>
                            POWERED BY
                        </Title>
                        <Image src={Trustlink} />
                    </div>
                </div>
            </Card>
        </>
    );
};
