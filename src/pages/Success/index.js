import { observer } from "mobx-react-lite";
import { PageLogin } from "../../component/Layouts/PageLogin";
import { Button } from "antd";
import blueChecklist from "../../assets/images/blue-checklist.svg";
import blueDots from "../../assets/images/blue-dots.svg";
import { Heading } from "./components/Heading";

export const Success = observer(() => {
    return (
        <PageLogin>
            <img src={blueChecklist} alt="Success Icon" />
            <img src={blueDots} alt="Background Dots" />

            <Heading />

            <Button size="large" block>
                Connect another account
            </Button>
            <Button size="large" block>
                Done
            </Button>
        </PageLogin>
    )
})