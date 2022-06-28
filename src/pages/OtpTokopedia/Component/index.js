import React, {useEffect, useState} from "react";
import OTPInput from "otp-input-react";
import tokopedia from "../../../assets/logo/tokopedia.png";
import {SlidesLoginPage} from "./../../../component/Slides/SlidesLoginPage";
import {observer} from "mobx-react-lite";
import {styles} from "../../../styles/index";
import {PageLogin} from "./../../../component/Layouts/PageLogin";
import {message} from "antd";
import {useStore} from "../../../utils/useStore";
import {useHistory, useLocation} from "react-router-dom";

export const OtpTokopedia = observer(() => {
    const store = useStore();
    const history = useHistory();
    const {search} = useLocation();
    const [OTP, setOTP] = useState("");
    const [loading, setLoading] = useState(false);

    const onFinish = async () => {
        const values = JSON.parse(localStorage.getItem("data"));
        const type = localStorage.getItem('type');

        const data = {
            userId: values.userId,
            username: values.username,
            password: values.password,
            customerIdentifier: values.customerIdentifier,
            customerName: values.customerName,
            bankCode: values.bankCode,
            bankId: values.bankId,
            referenceNo: localStorage.getItem('referenceNo'),
            secCode: localStorage.getItem('secCode'),
            otpCode: OTP
        };

        if (type === 'sandbox') {
            delete data.referenceNo;
            delete data.secCode;
            delete data.otpCode;
        }

        try {
            setLoading(true);
            type === 'sandbox' ? await store.tokopedia_login.postLoginSandbox(data) : await store.tokopedia_login.otp(data);
            setLoading(false);
            history.push(`/tokopedia-success${search}`);
        } catch (err) {
            setLoading(false);
            console.log(err, "error post");
            message.error(err.response.data.message);
        }
    };

    return (
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
                            <p style={{fontSize: 18}}>Code is sent to +62 878 9009</p>
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
    );
});