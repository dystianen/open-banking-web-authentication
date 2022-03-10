import React, { useState, useEffect } from "react";
import { Button, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import { styles } from "./Style";
import FooterPageLogin from "./../Footer/FooterPageLogin";
import { useHistory } from "react-router-dom";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export const PageLogin = ({ children, linking = true, goback = true }) => {
  let history = useHistory();

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: `${windowDimensions >= 520 ? 520 : windowDimensions}px`,
        }}
      >
        <FixedTopBar />
        <Card style={styles.card}>
          <div style={styles.container}>
            {linking && (
              <div style={goback ? styles.nav : styles.nav2}>
                {goback && (
                  <Button
                    type="link"
                    icon={
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={styles.navButton}
                      />
                    }
                    onClick={() => {
                      history.goBack();
                    }}
                  />
                )}
                <Button
                  type="link"
                  icon={
                    <FontAwesomeIcon icon={faXmark} style={styles.navButton} />
                  }
                  onClick={() => {
                    history.push("term-condition");
                  }}
                />
              </div>
            )}
            {children}
            <FooterPageLogin />
          </div>
        </Card>
      </div>
    </div>
  );
};
