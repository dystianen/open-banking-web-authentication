import React, {useState} from "react";
import OTPInput from "otp-input-react";
import ovo from "../../../assets/logo/ovo.png";
import {SlidesLoginPage} from "./../../../component/Slides/SlidesLoginPage";
import {observer} from "mobx-react-lite";
import {styles} from "../../../styles/index";
import {PageLogin} from "./../../../component/Layouts/PageLogin";
import {Form, Input, message} from "antd";
import {useHistory, useLocation} from "react-router-dom";
import {useStore} from "../../../utils/useStore";

export const OtpOVO = observer(() => {
    const [form] = Form.useForm();
    const {search} = useLocation();
    const history = useHistory();
    const store = useStore();
    const [OTP, setOTP] = useState("");

    const onFinish = async () => {
        await form.validateFields()
        const values = JSON.parse(localStorage.getItem("data"));
        const type = localStorage.getItem('type');

        const data = {
            userId: values.userId,
            username: values.username,
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
            const type = localStorage.getItem('type')
            type === 'sandbox' ? await store.ovo_login.postLoginSandbox(data) : await store.ovo_login.otp(data);
            history.push(`/ovo-success${search}`);
        } catch (err) {
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
                                    src={ovo}
                                    style={{
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginTop: 20,
                                        marginBottom: 20,
                                        width: 70,
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
                        flexDirection: "column",
                        alignItems: "center"
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

                    <Form form={form} layout={'vertical'} style={{width: '86%', marginTop: 20}}>
                        <Form.Item
                            name="link"
                            label={<label style={{color: "#161D24", fontSize: "12pt"}}>OTP Link</label>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your OTP Link!",
                                },
                            ]}>
                            <Input size={'large'} styles={styles.input} placeholder={'https://example.com'}/>
                        </Form.Item>
                    </Form>
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