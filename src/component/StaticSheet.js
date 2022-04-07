import {observer} from "mobx-react-lite";
import {Col, Row} from "antd";
import React from "react";

export const StaticSheet = observer((props) => {
    const {data} = props;

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Row style={{maxWidth: '520px'}}>
                <Col span={24}>
                    <h1 style={{textAlign: 'center'}}>Resmi dan Aman</h1>
                    <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque finibus enim.</p>
                </Col>
                <Col>
                    {
                        data.map((it, index) => (
                            <Row justify={'space-around'} style={{padding: 15}} key={index}>
                                <Col span={3}>
                                    <img src={it.image} alt="Iso Logo" style={{width: 50}}/>
                                </Col>
                                <Col span={18}>
                                    <p style={{textAlign: 'left', margin: 'auto'}}>{it.description}</p>
                                </Col>
                            </Row>
                        ))
                    }
                </Col>
            </Row>
        </div>
    )
})
