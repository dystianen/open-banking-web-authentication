import React, { useState } from "react";
import { observer } from 'mobx-react-lite';
import { useStore } from "../../utils/useStore";
import { Button, Card, Checkbox, Col, Form, Input, Row, Typography, message, Image } from 'antd';
import { useHistory } from "react-router-dom";

export const TestMemberDetail = observer(() => {
    const store = useStore();
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    const onFinish = async values => {
        try {
            const values = await form.validateFields();
            if (values.remember) {
                localStorage.setItem('email', values.email);
            }
            const data = {
                email: values.email,
                password: values.password,
            };
            setLoading(true);
            await store.authentication.login(data)
            if (store.authentication.dataUser === 'superadmin') {
                history.replace('/mor')
            } else {
                history.replace("/login");
                console.log("Poke");
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
            if (err.response?.body.message) {
                message.error(err.response?.body.message)
            } else {
                message.error(err.message)
            }
        }
        console.log('Success:', values);
    };

    //     {
    //     "fullname": "Test",
    // 	"phone_number": "081247263171",
    // 	"plate_no": "B 4122 C",
    // 	"vehicle_brand": "Suzuki",
    // 	"vehicle_model": "Pickup",
    // 	"expired_date": "2024",
    // 	"stnk_path": "Test",
    // 	"status": "Test"
    // }

    return (
        <>
            hello world

        </>
    )

});
