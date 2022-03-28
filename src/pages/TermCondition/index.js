import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Button, Col, Row, Typography, Steps} from "antd";
import {useHistory, useLocation, useParams} from "react-router-dom";

import verified from "../../assets/images/verified.svg";
import lock from "../../assets/images/lock.svg";
import eyeSlash from "../../assets/images/eye-slash.svg";
import pdf from "../../assets/Test.pdf";
import {PageLogin} from "../../component/Layouts/PageLogin";
import * as queryString from "querystring";
import {useStore} from "../../utils/useStore";

const {Step} = Steps;

export const TermCondition = observer(() => {
    const store = useStore()
    let history = useHistory();
    const {search} = useLocation();
    const [loading, setLoading] = useState(false);
    const [data, setProfile] = useState({})

    let deleteFirstCharacter = search.substr(1) // Delete character ?
    const query = queryString.parse(deleteFirstCharacter)

    useEffect(() => {
        loadInitial();
        localStorage.setItem('customer_ref_id', query.customer_ref_id);
        localStorage.setItem('customer_name', query.customer_name);
        localStorage.setItem('userID', '71fd9ec5-bcbe-43f7-ad52-622a2b737a41'); // Temporary
    }, [])

    const loadInitial = async () => {
        try {
            setLoading(true);
            const res = await store.profile.getProfile();
            console.log(res, 'isi res')
            setProfile(res.body.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    };

    const onClickPdf = () => {
        window.open(pdf);
    };

    const renderIconSteps = (icon) => (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div
                style={{
                    display: "flex",
                    height: 30,
                    width: 30,
                    backgroundColor: "#FE6601",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 5px #FE660133",
                }}
            >
                <img src={icon} style={{margin: "auto"}} alt="logo"/>
            </div>
        </div>
    );

    return (
        <PageLogin goback={false}>
            <div
                style={{
                    justifyContent: "space-between",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minHeight: "75vh",
                }}
            >
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
                                        fontSize: 30,
                                        fontWeight: 700,
                                        color: "#04204D",
                                    }}
                                >
                                    Trust
                                    <span
                                        style={{
                                            color: "#FE7519",
                                            fontSize: 30,
                                            fontWeight: 500,
                                        }}
                                    >
                    Connect
                  </span>
                                </Typography.Paragraph>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                    marginTop: 33,
                                }}
                            >
                                <Typography.Paragraph
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "#121014",
                                        textAlign: "center",
                                    }}
                                >
                                    Connect Your Financial Account <br/>
                                    to Your App Easy as 1-2-3
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
                                paddingTop: 55,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                }}
                            >
                                <Steps direction="vertical" current={2}>
                                    <Step
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim."
                                        icon={renderIconSteps(verified)}
                                    />
                                    <Step
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim"
                                        icon={renderIconSteps(eyeSlash)}
                                    />
                                    <Step
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim"
                                        icon={renderIconSteps(lock)}
                                    />
                                </Steps>
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
                                paddingTop: 78,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                }}
                            >
                                <Typography.Paragraph
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: "#161D24",
                                        textAlign: "center",
                                    }}
                                >
                                    By clicking "Next", you are agree to the <br/>{" "}
                                    <span
                                        style={{
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: "#FE6601",
                                        }}
                                        onClick={onClickPdf}
                                    >
                    terms and condition
                  </span>{" "}
                                    &{" "}
                                    <span
                                        style={{
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: "#FE6601",
                                        }}
                                        onClick={onClickPdf}
                                    >
                    privacy policy
                  </span>
                                </Typography.Paragraph>

                                <Button
                                    onClick={() => {
                                        history.push("bank-list");
                                    }}
                                    style={{
                                        marginTop: 18,
                                        width: "350px",
                                        height: "56px",
                                        alignSelf: "center",
                                        borderRadius: 9,
                                        backgroundColor: "#FE6601",
                                        boxShadow: "0px 8px 12px #FE660133",
                                    }}
                                >
                                    <Typography.Paragraph
                                        style={{
                                            fontSize: 20,
                                            fontWeight: 700,
                                            color: "#FAFAFA",
                                            textAlign: "center",
                                            margin: "auto",
                                        }}
                                    >
                                        Next
                                    </Typography.Paragraph>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </PageLogin>
    );
});
