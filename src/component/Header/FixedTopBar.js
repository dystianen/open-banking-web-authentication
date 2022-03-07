import React from 'react';
import { observer } from 'mobx-react-lite';
import { Affix, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUnlockKeyhole
} from "@fortawesome/free-solid-svg-icons"

export const FixedTopBar = observer(() => {
    return (
        <div style={{ backgroundColor: "#CBDFFF", width: "100%", top: 0 }}>
            <Typography.Paragraph strong style={{ textAlign: "center", color: "#145FD9", marginTop: 8, marginBottom: 8 }}>
                <FontAwesomeIcon style={{ marginRight: '1.2em' }} icon={faUnlockKeyhole} /> You’re In Secure Connection
            </Typography.Paragraph>
        </div>
    );
});
