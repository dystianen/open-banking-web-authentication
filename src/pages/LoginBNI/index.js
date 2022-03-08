import React, {useState} from "react";
import {
    Button,
    Card,
    Form,
    Image,
    Input,
    Typography,
} from "antd";
import LogoBNI from "../../assets/logo/BNI.png";
import Trustlink from "../../assets/logo/trustlink.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {FixedTopBar} from "../../component/Header/FixedTopBar";
import {styles} from "./Style";
import {SlidesLoginPage} from "../../component/Slides/SlidesLoginPage";
import {observer} from "mobx-react";
import {BottomSheet} from "react-spring-bottom-sheet";

const {Title} = Typography;

export const LoginBNI = observer(() => {
    const [open, setOpen] = useState(false);

    const onOpenSheet = (value) => {
        setOpen(value)
    }

    const onDismiss = () => {
        setOpen(false)
    }

    return (
        <>
            <FixedTopBar/>
            <Card style={styles.card}>
                <div style={styles.container}>
                    <div style={styles.nav}>
                        <Button
                            type="link"
                            icon={
                                <FontAwesomeIcon icon={faArrowLeft} style={styles.navButton}/>
                            }
                            onClick={() => {
                            }}
                        />
                        <Button
                            type="link"
                            icon={<FontAwesomeIcon icon={faXmark} style={styles.navButton}/>}
                            onClick={() => {
                            }}
                        />
                    </div>

                    <div style={styles.logo}>
                        <Image src={LogoBNI} style={{width: "10em"}}/>
                        <Title level={5} style={{marginTop: "20px"}} strong>
                            Insert your credentials to start.
                        </Title>
                    </div>

                    <Form layout={"vertical"}>
                        <Form.Item name={"email"} label={"Email"}>
                            <Input style={styles.input} placeholder={"email@example.com"}/>
                        </Form.Item>
                        <Form.Item name={"password"} label={"Password"}>
                            <Input.Password style={styles.input}/>
                        </Form.Item>
                        <div style={styles.forgotPassword}>
                            <Button
                                type="link"
                                style={{color: "#93969B"}}
                                onClick={() => {
                                }}
                            >
                                Forgot password ?
                            </Button>
                        </div>
                        <Button
                            style={{backgroundColor: "#93969B", color: "#FFFFFF"}}
                            block
                            size="large"
                        >
                            Connect Account
                        </Button>
                    </Form>
                </div>

                <SlidesLoginPage onOpenSheet={onOpenSheet} />

                <div style={styles.footer}>
                    <Title level={5} style={{letterSpacing: "3px"}}>
                        POWERED BY
                    </Title>
                    <Image src={Trustlink}/>
                </div>

                <BottomSheet
                    open={open}
                    onDismiss={onDismiss}
                    snapPoints={({ maxHeight }) => maxHeight / 2}
                >My awesome content here</BottomSheet>
            </Card>
        </>
    );
});
