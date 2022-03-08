import React from "react";
import { observer } from "mobx-react-lite";
import { Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { Color } from "./../../styles/Color";

export const FixedTopBar = observer(() => {
  return (
    <div style={{ backgroundColor: Color.blueSky, width: "100%" }}>
      <Typography.Paragraph
        strong
        style={{
          textAlign: "center",
          color: Color.blueDark,
          paddingTop: 4,
          marginBottom: 0,
          height: "40px",
        }}
      >
        <FontAwesomeIcon
          style={{ marginRight: "1.2em" }}
          icon={faUnlockKeyhole}
        />
        <span style={{ color: Color.blueDark }}>
          You're In Secure Connection
        </span>
      </Typography.Paragraph>
    </div>
  );
});
