import React, { useState, useEffect } from "react";
import { Button, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import { styles } from "./Style";
import FooterPageLogin from "./../Footer/FooterPageLogin";
import {useHistory, useLocation} from "react-router-dom";
import { ParticlesMode } from "./../ParticlesMode";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export const PageLogin = ({
  children,
  linking = true,
  goback = true,
  particles_color = "ff6600",
  particles_line = "#eb9e6c",
  onClose = false
}) => {
  let history = useHistory();
  const {search} = useLocation();
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


  const closeTab = () => {
    window.opener = null;
    window.open("", "_self", "");
    window.close();
  };

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
                      onClose ? closeTab() : history.push(`term-condition${search}`)
                  }}
                />
              </div>
            )}
            <div
              style={{
                zIndex: 3,
                // justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                minHeight: "75vh",
                backgroundColor: '#F6F6F6'
              }}
            >
              {children}
            </div>
            <FooterPageLogin />
            <ParticlesMode
              particles_color={particles_color}
              particles_line={particles_line}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};
