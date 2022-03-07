import React from 'react';
import { observer } from 'mobx-react-lite';
import { Affix, Typography } from 'antd';
import LockFilled from "../../assets/images/lockfilled.png";

export const FixedTopBar = observer(() => {
    return (
        <Affix style={{ backgroundColor: "#CBDFFF", width: "100%" }} offsetTop={0}>
            <Typography.Paragraph strong style={{ textAlign: "center", color: "#145FD9", marginTop: 8, marginBottom: 8 }}>
                <img style={{ width: 15 }} src={LockFilled} /> You’re In Secure Connection
            </Typography.Paragraph>
        </Affix>
    );
});
