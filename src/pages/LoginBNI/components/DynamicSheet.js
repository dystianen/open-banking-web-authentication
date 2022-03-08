import {observer} from "mobx-react-lite";
import {Col, Row} from "antd";
import React from "react";

export const DynamicSheet = observer((props) => {
  const {data} = props;

  return (
      <Row justify={'center'}>
          <Col>
              <h1 style={{textAlign: 'center'}}>{data?.name}</h1>
              <p style={{textAlign: 'center'}}>{data?.description}</p>
          </Col>
      </Row>
  )
})
