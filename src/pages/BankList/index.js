import React, {useState} from "react";
import {observer} from 'mobx-react-lite';
import {useStore} from "../../utils/useStore";
import {Button, Card, Checkbox, Col, Form, Image, Input, Row, Typography} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useHistory} from "react-router-dom";
import {ListBank} from "../../component/ListBank";
import spark from '../../assets/images/icon-sparkles.svg'
import eBank from '../../assets/images/icon-banking.svg'
import {FixedTopBar} from "../../component/Header/FixedTopBar";
import {faArrowLeft, faXmark} from "@fortawesome/free-solid-svg-icons";
import Trustlink from "../../assets/logo/trustlink.png";

export const BankList = observer(() => {
    const {Title} = Typography;

    const store = useStore();
    const [loading, setLoading] = useState(false);

    let history = useHistory();
    const data = [
        {
            id: 1,
            name: 'User’s Choices',
            image: spark,
            bank: [
                {
                    name: 'Gopay',
                },
                {
                    name: 'OVO'
                },
                {
                    name: 'Livin b Mandiri'
                }
            ]
        },
        {
            id: 2,
            name: 'Internet Banking',
            image: eBank,
            bank: [
                {
                    name: 'BRImo'
                },
                {
                    name: 'Livin b Mandiri'
                },
                {
                    name: 'PermataMobile X'
                }
            ]
        }
    ]

    const styles = {
        card: {
            height: '100%',
            backgroundColor: '#F6F6F6',
            borderRadius: '15px 15px 0 0',
            marginTop: '-10px',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
        },
        nav: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        logo: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            height: '45px'
        },
        forgotPassword: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: '10px',
            marginTop: '-15px',
        },
        navButton: {
            fontSize: '20px',
            color: '#71757C',
        },
        carousel: {
            background: '#FFFFFF',
            padding: '10px 15px',
            boxShadow: '0px 6px 10px #0000000D',
            borderRadius: '8px'
        },
        guide: {
            marginBottom: 0,
            lineHeight: '20px',
            color: '#71757C'
        },
        footer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
        }
    };

    return (
        <>
            <FixedTopBar />
            <Card style={styles.card}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button type="link" icon={<FontAwesomeIcon icon={faArrowLeft} style={styles.navButton}/>}
                            onClick={() => {}}/>
                    <Button type="link" icon={<FontAwesomeIcon icon={faXmark} style={styles.navButton}/>} onClick={() => {
                    }}/>
                </div>

                <div style={{width: '100vw', display: 'flex'}}>
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
                <div style={styles.footer}>
                    <Title level={5} style={{letterSpacing: '3px'}}>POWERED BY</Title>
                    <Image src={Trustlink} preview={false}/>
                </div>
            </Card>
        </>
    );
});
