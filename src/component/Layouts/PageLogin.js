import React, { useState, useEffect } from "react";
import { Button, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FixedTopBar } from "../../component/Header/FixedTopBar";
import { styles } from "./Style";
import FooterPageLogin from "./../Footer/FooterPageLogin";
import { useHistory } from "react-router-dom";
import { Particles } from "react-tsparticles";

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
            <div
              style={{
                zIndex: 20,
              }}
            >
              {children}
            </div>
            <Particles
              responsive
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "0",
              }}
              options={{
                // width: "200px",
                fullScreen: {
                  enable: false,
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: false,
                      mode: "push",
                    },
                    onHover: {
                      enable: false,
                      mode: "repulse",
                    },
                    resize: false,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ff6600",
                  },
                  links: {
                    color: "#eb9e6c",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1.5,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 2000,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
            />
            <FooterPageLogin />
          </div>
        </Card>
      </div>
    </div>
  );
};
