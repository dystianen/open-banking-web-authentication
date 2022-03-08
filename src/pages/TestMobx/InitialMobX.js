import React, { useEffect, useState } from "react";
import { observer } from 'mobx-react-lite';
import { useStore } from "../../utils/useStore";
import { Button, Card, Checkbox, Col, Form, Input, Row, Typography, message, Image, Spin } from 'antd';
import { useHistory } from "react-router-dom";

export const TestMemberDetail = observer(() => {
    const store = useStore();
    const [form] = Form.useForm()
    let history = useHistory();

    // States
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            setLoading(true)
            const res = await store.test_member_nonbasestore.getAll("/member/customer")
            setData(res.data);
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log('e: ', e)
        }
    }

    const onFinish = async (values) => {
        let body = {
            email: values.email,
            password: values.password
        }

        await store.initial_store.create(body);
        fetchData();
    };

    return (
        <>
            <Spin spinning={loading}>
                Hello World
            </Spin>
        </>
    )

});
