import React, {useEffect, useState} from "react";
import OTPInput from "otp-input-react";
import tokopedia from "../../../assets/logo/tokopedia.png";
import {SlidesLoginPage} from "./../../../component/Slides/SlidesLoginPage";
import {observer} from "mobx-react-lite";
import {styles} from "../../../styles/index";
import {PageLogin} from "./../../../component/Layouts/PageLogin";
import {Button, message, Spin} from "antd";
import {useStore} from "../../../utils/useStore";
import {useHistory, useLocation} from "react-router-dom";

export const OtpTokopedia = observer(() => {
    const store = useStore();
    const history = useHistory();
    const {search} = useLocation();
    const [OTP, setOTP] = useState("");
    const [loading, setLoading] = useState(false);
    const values = JSON.parse(localStorage.getItem("data"));

    let time = 0;
    let status = '';
    const intervalStatus = async () => {
        await isStatus();
        let interval = setInterval(() => {
            time += 1;

            if (time !== 4) {
                if (status === 'BUSY') {
                    isStatus();
                    setLoading(true)
                } else {
                    clearInterval(interval)
                    setLoading(false)
                }
            } else {
                clearInterval(interval)
                setOTP('');
                setLoading(false)
            }
        }, 15000)
    }

    const onFinish = async () => {
        try {
            setLoading(true)
            const type = localStorage.getItem('type');

            const data = {
                userId: values.userId,
                username: values.username,
                password: values.password,
                customerIdentifier: values.customerIdentifier,
                customerName: values.customerName,
                bankCode: values.bankCode,
                bankId: values.bankId,
                partnerReferenceNo: values.partnerReferenceNo,
                referenceNo: localStorage.getItem('referenceNo'),
                secCode: localStorage.getItem('secCode'),
                otpCode: OTP
            };

            if (type === 'sandbox') {
                delete data.referenceNo;
                delete data.secCode;
                delete data.otpCode;
            }

            type === 'sandbox' ? await store.tokopedia_login.postLoginSandbox(data) : await store.tokopedia_login.otp(data);
            await intervalStatus();
        } catch (err) {
            setLoading(false);
            console.log(err, "error post");
            message.error(err.response.data.message);
        }
    };

    const isStatus = async () => {
        try {
            const values = JSON.parse(localStorage.getItem("data"));

            const data = {
                userId: values.userId,
                username: values.username,
                customerIdentifier: values.customerIdentifier,
                customerName: values.customerName,
                bankCode: values.bankCode,
                bankId: values.bankId,
                partnerReferenceNo: values.partnerReferenceNo,
                referenceNo: localStorage.getItem('referenceNo'),
                secCode: localStorage.getItem('secCode'),
            };

            const res = await store.gojek_login.checkStatus(data)
            status = res.body.data.status
            if (status === 'SUCCESS') {
                history.push(`/tokopedia-success${search}`);
            } else if (status === 'FAILED') {
                setLoading(false)
            } else if (status === 'FAILED_PASS') {
                setLoading(false)
            } else if (status === 'WAITING_FOR_OTP') {
                setLoading(false)
            }
        } catch (err) {
            console.log({err});
            message.error(err.message)
        }
    };

    return (
        <Spin spinning={loading}>
            <PageLogin particles_color="#107ead" particles_line="#72b7d4">
                <div>
                    <div style={{color: "#4B4C48"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <div>
                                <div style={{display: "flex", justifyItems: "center"}}>
                                    <img
                                        src={tokopedia}
                                        style={{
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            marginTop: 20,
                                            marginBottom: 20,
                                            width: 150,
                                        }}
                                    />
                                </div>
                                <p style={{fontSize: 18}}>Code is sent to {values.username}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            autoFocus
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            secure
                            inputStyles={styles.otpInput6}
                        />
                    </div>
                    <div style={{marginTop: 40}}>
                        <p style={{textAlign: "center"}}>
                            <span> Didn’t receive code? </span>
                            <span style={{color: "#0581FF"}}> Request again</span>
                        </p>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Button
                                block
                                type="primary"
                                size='large'
                                style={styles.button}
                                disabled={OTP.length === 6 ? false : true}
                                onClick={onFinish}
                            >Submit</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <SlidesLoginPage/>
                </div>
            </PageLogin>
        </Spin>
    );
});