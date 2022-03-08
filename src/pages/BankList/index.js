import React, {useEffect, useState} from "react";
import {observer} from 'mobx-react-lite';
import {useStore} from "../../utils/useStore";
import {Col, Row, Typography} from 'antd';
import {ListBank} from "./Component";
import spark from '../../assets/images/icon-sparkles.svg'
import eBank from '../../assets/images/icon-banking.svg'
import {PageLogin} from "../../component/Layouts/PageLogin";

export const BankList = observer(() => {

    const store = useStore();
    const [loading, setLoading] = useState(false);
    const [dataBank, setDataBank] = useState([]);

    useEffect(() => {
        setLoading(true)
        loadInitial()
        setLoading(false)
    }, [])

    const loadInitial = async () => {
        try {
            setLoading(true)
            const res = await store.listBank.getAllBanks();
            setDataBank(res.body.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    const appImage = data => {
        switch (data) {
            case 'User\'s Choices':
                return spark;
            case 'Internet Banking':
                return eBank;
        }
    };

    const data = dataBank.map(it => {
        return {
            ...it,
            image: appImage(it.name)
        }
    })

    return (
        <PageLogin>
            <div>
                <div style={{width: '100%', display: 'flex'}}>
                    <Row>
                        <Col>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginTop: '5vh',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
                                    <Typography.Paragraph
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            fontSize: 20,
                                            marginLeft: 5,
                                            fontWeight: 600,
                                            color: "#413d3e",
                                        }}
                                    >
                                        <div style={{display: 'flex'}}>
                                            <p style={{color: '#FE6601'}}>Connect&nbsp;</p>Your Institution.
                                        </div>
                                    </Typography.Paragraph>
                                    <Typography.Paragraph
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: "#121014",
                                            width: 290
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                                    </Typography.Paragraph>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <ListBank data={data}/>
            </div>
        </PageLogin>
    );
});
