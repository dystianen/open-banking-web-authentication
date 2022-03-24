import React, {useState} from "react";
import {observer} from 'mobx-react-lite';
import {Col, Image, Row, Typography, Collapse, Avatar} from 'antd';
import {useHistory} from "react-router-dom";
import connected from "../../../assets/icons/checklist.svg";

const {Panel} = Collapse;
export const ListBank = observer((props) => {
    const [activeKey, setActiveKey] = useState(null)

    let history = useHistory();

    function callback(key) {
        setActiveKey(key);
    }

    const data = props.data.map((it) => {
        const active = activeKey === it.id

        const Header = () => (
            <Row>
                <Col span={3}>
                    <div style={{
                        width: 70,
                        height: 56,
                        borderRadius: active ? '10px 35px 35px 35px' : '10px 25px 25px 10px',
                        backgroundColor: '#FE6601',
                        boxShadow: active ? '4px 4px 0px 5px rgba(254, 148, 77, 0.3)' : '15px 0px 0px 0px rgba(254, 148, 77, 0.4)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <Image src={it.image} preview={false} width={35}/>
                    </div>
                </Col>
                <Col span={12} style={{display: 'flex', alignItems: 'center', marginLeft: 70}}>
                    <Typography.Paragraph
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: 16,
                            marginLeft: 5,
                            color: "#161D24",
                            fontWeight: '600'
                        }}
                    >
                        {it.name}
                    </Typography.Paragraph>
                </Col>
            </Row>
        )

        const appName = data => {
            switch (data) {
                case "Livin\' by Mandiri":
                    return "mandiri-login";
                case "BNI":
                    return "bni-login";
                case "Gopay":
                    return null;
                case "KlikBCA":
                    return "bca-login";
                case "BRI":
                    return "bri-login";
                default:
                    return null
            }
        };

        const data = it.institution.map(it => {
            return {
                ...it,
                link: appName(it.name)
            }
        })

        return (
            <Panel header={(<Header/>)} key={it.id} showArrow={false} className={'collapse-custom'}>
                <div>
                    {data.map((data, index) => (
                        <div className={index ? 'border-color-bank' : 'none-border'} onClick={() => {
                            history.push(data.link)
                            localStorage.setItem('bankCode', data.code)
                            localStorage.setItem('bankId', data.id)
                        }}>
                            <Typography.Paragraph
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    fontSize: 16,
                                    marginLeft: 30,
                                    color: "#161D24",
                                    fontWeight: 'semi-bold',
                                    alignItems: 'center'
                                }}
                            >
                                {data.name}
                            </Typography.Paragraph>
                            {data.connected === true && (
                                <Image src={connected} preview={false}/>
                            )}
                        </div>
                    ))}
                </div>
            </Panel>)
    })

    return (
        <>
            <Collapse accordion onChange={callback}>
                {data}
            </Collapse>
        </>
    );
});
