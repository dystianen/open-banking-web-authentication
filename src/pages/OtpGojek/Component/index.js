import React, {useState} from "react";
import OTPInput from "otp-input-react";
import gojek from "../../../assets/logo/gojek.png";
import {SlidesLoginPage} from "./../../../component/Slides/SlidesLoginPage";
import {observer} from "mobx-react-lite";
import {styles} from "../../../styles/index";
import {PageLogin} from "./../../../component/Layouts/PageLogin";
import {Button, message, Spin} from "antd";
import {useStore} from "../../../utils/useStore";
import {useHistory, useLocation} from "react-router-dom";

export const OtpGojek = observer(() => {
    const store = useStore();
    const history = useHistory();
    const {search} = useLocation();
    const [OTP, setOTP] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const values = JSON.parse(localStorage.getItem("data"));

    let time = 0;
    let status = '';
    const intervalStatus = async () => {
        await isStatus();
        let interval = setInterval(() => {
            time += 1;
            setIsLoading(true)

            if (time !== 6) {
                if (status === 'BUSY') {
                    isStatus();
                    setIsLoading(true)
                } else {
                    clearInterval(interval)
                    setIsLoading(false)
                }
            } else {
                clearInterval(interval)
                setOTP('');
                setIsLoading(false)
                message.error('System is busy, Try again!')
            }
        }, 5000)
    }

    const onFinish = async () => {
        try {
            setIsLoading(true);
            const type = localStorage.getItem('type');

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
            if (type === 'sandbox') {
                history.push(`/gojek-success${search}`);
            } else {
                await intervalStatus();
            }
        } catch (err) {
            setIsLoading(false);
            message.error('Failed to login!')
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

            const service = localStorage.getItem('service');
            const res = await store.gojek_login.checkStatus(data)
            status = res.body.data.status
            if (status === 'SUCCESS') {
                if (service) {
                    data.accountNo = localStorage.getItem('accountNo');
                    await store.gojek_login.getProduct(service, data)
                } else {
                    localStorage.setItem('customerId', res.body.data.customerId)
                }
                history.push(`/gojek-success${search}`);
            } else if (status === 'FAILED') {
                setIsLoading(false)
                message.error('Failed to login!')
            } else if (status === 'FAILED_PASS') {
                setIsLoading(false)
                message.error('Failed to login!')
            } else if (status === 'WAITING_FOR_OTP') {
                setIsLoading(false)
                message.error('Failed to login!')
            }
        } catch (err) {
            console.log({err});
            message.error('Failed to login!')
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
                                <p style={{fontSize: 18, display: 'flex', textAlign: 'center'}}>Please enter the OTP sent on your registered phone number {values.username}</p>
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
                            <Button
                                block
                                type="primary"
                                size='large'
                                disabled={OTP.length === 4 ? false : true}
                                onClick={onFinish}
                                style={styles.button}
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
