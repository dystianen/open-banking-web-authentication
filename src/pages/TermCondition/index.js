import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Button, Col, Row, Typography, Steps, Image, Avatar} from "antd";
import {useHistory, useLocation, useParams} from "react-router-dom";

import verified from "../../assets/images/verified.svg";
import lock from "../../assets/images/lock.svg";
import eyeSlash from "../../assets/images/eye-slash.svg";
import connect from "../../assets/images/connect.svg";
import pdf from "../../assets/Test.pdf";
import {PageLogin} from "../../component/Layouts/PageLogin";
import * as queryString from "querystring";
import {useStore} from "../../utils/useStore";
import {EyeOutlined} from "@ant-design/icons";
import {appConfig} from "../../config/app";

const {Step} = Steps;

export const TermCondition = observer(() => {
    const store = useStore()
    let history = useHistory();
    const {search} = useLocation();
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({})

    // let deleteFirstCharacter = search.substr(1) // Delete character ?
    // const query = queryString.parse(deleteFirstCharacter)
    // localStorage.setItem('customer_ref_id', query.customer_ref_id);
    // localStorage.setItem('customer_name', query.customer_name);
    // localStorage.setItem('access_token', query.accessToken);
    // localStorage.setItem('userID', query.userId);
    // localStorage.setItem('type', query.type)

    useEffect(() => {
        loadInitial();
    }, [])

    const loadInitial = async () => {
        try {
            setLoading(true);
            console.log(localStorage.getItem('access_token'))
            const res = await store.profile.getProfile();
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

    const haveHttp = (filepath) => {
        const fileName = filepath?.split("/");
        const sliceData = fileName?.slice(0, 1)
        const dataSlice = ["https:"].includes(sliceData?.[0])

        if (dataSlice) {
            return filepath;
        } else {
            return `${appConfig.apiUrl}/file/${filepath}`;
        }
    };

    return (
        <PageLogin goback={false} onClose={true}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
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
                                }}
                            >
                                {profile.photo_profile
                                    ?
                                    <Avatar
                                        size={100}
                                        src={haveHttp(profile?.photo_profile)}
                                    />
                                    :
                                    <Typography.Paragraph style={{fontSize: 30, fontWeight: 700, color: "#04204D",}}>
                                        Your
                                        <span style={{color: "#FE7519", fontSize: 30, fontWeight: 500,}}>
                                        Logo
                                    </span>
                                    </Typography.Paragraph>
                                }
                            </div>

                            <div style={{display: "flex", flexDirection: "column", alignItems: "stretch", marginTop: 15}}>
                                <Typography.Paragraph style={{fontSize: 16, fontWeight: 500, color: "#121014", textAlign: "center",}}>
                                    Easy and Secure access to your financial account
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
                                paddingTop: 15,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                }}
                            >
                                <Steps direction="vertical" current={3}>
                                    <Step
                                        title="We take seriously the protection of your privacy and confidentiality"
                                        icon={renderIconSteps(verified)}
                                    />
                                    <Step
                                        title="Secured your information with end-to-end encrypted"
                                        icon={renderIconSteps(eyeSlash)}
                                    />
                                    <Step
                                        title="Easily connect and disconnect your account"
                                        icon={renderIconSteps(connect)}
                                    />
                                    <Step
                                        title="We do not store your credentials and NOT authorized to make any transactions"
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
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                }}
                            >
                                <Typography.Paragraph style={{fontSize: 12, fontWeight: 400, color: "#161D24", textAlign: "center",}}>
                                    By clicking "Next", you are agree to the <br/>{" "}
                                    <span style={{fontSize: 12, fontWeight: 500, color: "#FE6601"}} onClick={onClickPdf}>
                                        terms and condition
                                    </span>{" "}&{" "}
                                    <span style={{fontSize: 12, fontWeight: 500, color: "#FE6601"}} onClick={onClickPdf}>
                                        privacy policy
                                    </span>
                                </Typography.Paragraph>

                                <Button
                                    onClick={() => {
                                        history.push(`bank-list${search}`);
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
