import React, { useState } from "react";
import { Button, Card, Form, Image, Input, Typography } from "antd";
import LogoBNI from "../../assets/logo/BNI.png";
import Trustlink from "../../assets/logo/trustlink.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import { styles } from "./Style";
import FooterPageLogin from './../Footer/FooterPageLogin';

export const PageLogin = ({ children }) => {
  return (
    <>
      <FixedTopBar />
      <Card style={styles.card}>
        <div style={styles.container}>
          <div style={styles.nav}>
            <Button
              type="link"
              icon={
                <FontAwesomeIcon icon={faArrowLeft} style={styles.navButton} />
              }
              onClick={() => {}}
            />
            <Button
              type="link"
              icon={<FontAwesomeIcon icon={faXmark} style={styles.navButton} />}
              onClick={() => {}}
            />
          </div>
          {children}
          <FooterPageLogin/>
        </div>
      </Card>
    </>
  );
};
