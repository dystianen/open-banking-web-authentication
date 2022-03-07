import React, { useState, useEffect } from "react";
import { observer } from 'mobx-react-lite';
import { useStore } from "../../utils/useStore";
import { Button, TableView, Col, Form, Input, Row, Table } from 'antd';
import { useHistory } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

export const TestMember = observer(() => {
    const store = useStore();
    const [FormMemberNonBaseStore] = Form.useForm()
    const [FormMemberBaseStore] = Form.useForm()
    const [loading, setLoading] = useState(false);
    const [DataMemberBaseStore, setDataMemberBaseStore] = useState();
    const [DataMemberNonBaseStore, setDataMemberNonBaseStore] = useState();

    let history = useHistory();

    useEffect(() => {
        // fetchDataBaseStore();
        fetchDataNonBaseStore();
    }, [])

    // async function fetchDataBaseStore() {
    //     await Promise.all([
    //         store.test_member_basestore.getAll()
    //     ]).then((res) => {
    //         console.log("MemberBaseStore: ", store.test_member_basestore.data)
    //         console.log("MemberBaseStore[Res]: ", res)
    //         setDataMemberBaseStore(store.test_member_basestore.data);
    //     })
    // }

    async function fetchDataNonBaseStore() {
        await Promise.all([
            store.test_member_nonbasestore.getAll("/member/customer")
        ]).then((res) => {
            console.log("MemberNonBaseStore: ", store.test_member_nonbasestore.data)
            console.log("MemberNonBaseStore[Res]: ", res)
            setDataMemberNonBaseStore(store.test_member_nonbasestore.data);
        })
    }

    const onFinishMemberBaseStore = async (values) => {
        try {
            setLoading(true);
            const body = {
                fullname: values.fullname,
                member_id: values.member_id,
                plate_no: "FY 7123 K",
                vehicle_brand: "Honda",
                vehicle_model: "Jazz",
                expired_date: "2024",
                stnk_path: "Test",
                package: "ERNA"
            };
            store.test_member_basestore.create(body)
                .then((res) => {
                    console.log("Submit Res: ", res);
                    FormMemberBaseStore.resetFields();
                })
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
        console.log('Success:', values);
    };

    const onFinishMemberNonBaseStore = async (values) => {
        try {
            setLoading(true);
            const body = {
                fullname: values.fullname,
                member_id: values.member_id,
                plate_no: "FY 7123 K",
                vehicle_brand: "Honda",
                vehicle_model: "Jazz",
                expired_date: "2024",
                stnk_path: "Test",
                package: "ERNA"
            };
            store.test_member_nonbasestore.create(body)
                .then((res) => {
                    console.log("Submit Res: ", res);
                    FormMemberNonBaseStore.resetFields();
                })
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
        console.log('Success:', values);
    };

    const columns = [
        {
            title: 'member_id',
            dataIndex: "member_id",
            key: "member_id",
            width: 50,
            render: (record) => record || '-'
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 50,
            align: 'center',
            render: (text, record) =>
                <div>
                    <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
                        <Button
                            size="small"
                            type="primary"
                            icon={<EyeOutlined />}
                            onClick={() => history.push(`"/test/member/${record.id}`)}
                        >
                            Detail
                        </Button>
                    </div>
                </div>
        }
    ];

    return (
        <>
            <div style={{ padding: 20 }}>
                <Row gutter={24}>
                    <Col span={6}>
                        member with base store
                        <Form
                            name="FormMemberBaseStore"
                            onFinish={onFinishMemberBaseStore}
                        >
                            <Form.Item
                                label="fullname"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your fullname!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="member_id"
                                name="member_id"
                                rules={[{ required: true, message: 'Please input your member_id!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={6}>
                        member non base store
                        <Form
                            name="FormMemberNonBaseStore"
                            onFinish={onFinishMemberNonBaseStore}
                        >
                            <Form.Item
                                label="fullname"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your fullname!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="member_id"
                                name="member_id"
                                rules={[{ required: true, message: 'Please input your member_id!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={6}>
                        <Table
                            columns={columns}
                            // dataSource={
                            //     AgentList !== undefined && AgentList?.data.map((d) => {
                            //         return {
                            //             ...d,
                            //             key: d?.id
                            //         }
                            //     })
                            // }
                            scroll={{ x: 'max-content' }}
                        />
                    </Col>
                    <Col span={6}>
                    </Col>
                </Row>
            </div>
        </>
    )

});
