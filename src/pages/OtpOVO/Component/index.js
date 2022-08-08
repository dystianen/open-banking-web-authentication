import React, {useState} from "react";
import OTPInput from "otp-input-react";
import ovo from "../../../assets/logo/ovo.png";
import {SlidesLoginPage} from "./../../../component/Slides/SlidesLoginPage";
import {observer} from "mobx-react-lite";
import {styles} from "../../../styles/index";
import {PageLogin} from "./../../../component/Layouts/PageLogin";
import {Button, Form, Input, message, Spin} from "antd";
import {useHistory, useLocation} from "react-router-dom";
import {useStore} from "../../../utils/useStore";
import {password} from "prompts/lib/prompts";

export const OtpOVO = observer(() => {
    const [form] = Form.useForm();
    const {search} = useLocation();
    const history = useHistory();
    const store = useStore();
    const [OTP, setOTP] = useState("");
    const [loading, setLoading] = useState(false);
    const values = JSON.parse(localStorage.getItem("data"));

    let time = 0;
    let status = '';
    const intervalStatus = async () => {
        await isStatus();
        let interval = setInterval(() => {
            time += 1;

            if (time !== 6) {
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
        }, 5000)
    }

    const onFinish = async () => {
        try {
            setLoading(true);
            const dataForm = await form.validateFields()
            const type = localStorage.getItem('type');

            const data = {
                userId: values.userId,
                username: values.username,
                password: OTP,
                customerIdentifier: values.customerIdentifier,
                customerName: values.customerName,
                bankCode: values.bankCode,
                bankId: values.bankId,
                partnerReferenceNo: values.partnerReferenceNo,
                referenceNo: localStorage.getItem('referenceNo'),
                secCode: localStorage.getItem('secCode'),
                otpCode: dataForm.link
            };

            if (type === 'sandbox') {
                delete data.referenceNo;
                delete data.secCode;
                delete data.otpCode;
            }

            type === 'sandbox' ? await store.ovo_login.postLoginSandbox(data) : await store.ovo_login.otp(data);
            if (type === 'sandbox') {
                history.push(`/ovo-success${search}`);
            } else {
                await intervalStatus();
            }
        } catch (err) {
            console.log(err, "error post");
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

            const res = await store.gojek_login.checkStatus(data)
            status = res.body.data.status
            if (status === 'SUCCESS') {
                localStorage.setItem('customerId', res.body.data.customerId)
                history.push(`/ovo-success${search}`);
            } else if (status === 'FAILED') {
                setLoading(false)
                message.error('Failed to login!')
            } else if (status === 'FAILED_PASS') {
                setLoading(false)
                message.error('Failed to login!')
            } else if (status === 'WAITING_FOR_OTP') {
                setLoading(false)
                message.error('Failed to login!')
            }
        } catch (err) {
            console.log({err});
            message.error('Failed to login!')
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
                                <p style={{fontSize: 18, display: 'flex', textAlign: 'center'}}>Please enter the OTP sent on your registered phone number {values.username}</p>
                                <p style={{fontSize: 15, display: 'flex', justifyContent: 'center', margin: 0}}>Enter Your Pin</p>
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
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            secure
                            inputStyles={styles.otpInput6}
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

                            <div style={{marginTop: 40}}>
                                <p style={{textAlign: "center"}}>
                                    <span> Didn’t receive code? </span>
                                    <span style={{color: "#0581FF"}}> Request again</span>
                                </p>
                                <Form.Item shouldUpdate>
                                    {() => (
                                        <Button
                                            block
                                            type={'primary'}
                                            style={styles.button}
                                            disabled={
                                                !form.isFieldsTouched(true) ||
                                                !!form.getFieldsError().filter(({errors}) => errors.length).length ||
                                                OTP.length !== 6 ? true : false
                                            }
                                            onClick={onFinish}
                                        >Submit</Button>
                                    )}
                                </Form.Item>
                            </div>

                        </Form>
                    </div>
                </div>
                <div>
                    <SlidesLoginPage/>
                </div>
            </PageLogin>
        </Spin>
    );
});
