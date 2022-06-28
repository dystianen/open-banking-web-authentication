import React, {useState} from "react";
import OTPInput from "otp-input-react";
import gojek from "../../../assets/logo/gojek.png";
import {SlidesLoginPage} from "./../../../component/Slides/SlidesLoginPage";
import {observer} from "mobx-react-lite";
import {styles} from "../../../styles/index";
import {PageLogin} from "./../../../component/Layouts/PageLogin";
import {message, Spin} from "antd";
import {useStore} from "../../../utils/useStore";
import {useHistory, useLocation} from "react-router-dom";

export const OtpGojek = observer(() => {
    const store = useStore();
    const history = useHistory();
    const {search} = useLocation();
    const [OTP, setOTP] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const values = JSON.parse(localStorage.getItem("data"));

    let time = 0;
    const intervalStatus = async () => {
        let interval = setInterval(() => {
            time += 1;
            setIsLoading(true)

            if (time !== 6) {
                if (status === 'SUCCESS') {
                    clearInterval(interval)
                    history.push(`/gojek-success${search}`);
                    setIsLoading(false)
                } else {
                    isStatus();
                    setIsLoading(true)
                }
            } else {
                clearInterval(interval)
                setOTP('');
                setIsLoading(false)
            }
        }, 10000)
    }

    const onFinish = async () => {
        try {
            setIsLoading(true);
            const type = localStorage.getItem('type');

            if (!OTP) {
                message.error('Please input your OTP!')
                return false;
            }
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
                otpCode: OTP
            };

            if (type === 'sandbox') {
                delete data.referenceNo;
                delete data.secCode;
                delete data.otpCode;
            }

            type === 'sandbox' ? await store.gojek_login.postLoginSandbox(data) : await store.gojek_login.otp(data);
            await isStatus();
            await intervalStatus();
        } catch (err) {
            setIsLoading(false);
            message.error('Something Wrong!');
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
            setStatus(res.body.data.status)
        } catch (err) {
            console.log({err});
            message.error(err.message)
        }
    };

    return (
        <Spin spinning={isLoading}>
            <PageLogin particles_color="#107ead" particles_line="#72b7d4">
                <div>
                    <div style={{color: "#4B4C48"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <div>
                                <div style={{display: "flex", justifyItems: "center"}}>
                                    <img
                                        src={gojek}
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
                            OTPLength={4}
                            otpType="number"
                            disabled={false}
                            secure
                            inputStyles={styles.otpInput}
                        />
                    </div>
                    <div style={{marginTop: 40}}>
                        <p style={{textAlign: "center"}}>
                            <span> Didn’t receive code? </span>
                            <span style={{color: "#0581FF"}}> Request again</span>
                        </p>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <button style={styles.button} onClick={onFinish}>Submit</button>
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