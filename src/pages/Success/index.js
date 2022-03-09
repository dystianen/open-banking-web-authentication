import { observer } from "mobx-react-lite";
import { PageLogin } from "../../component/Layouts/PageLogin";
import { Button } from "antd";

// Components
import { Heading } from "./components/Heading";

// Assets
import blueDotsCombined from "../../assets/images/blue-dots-combined.svg";
import { styles } from "./styles";

export const Success = observer(() => {
    return (
        <PageLogin linking={false}>
            <img src={blueDotsCombined} alt="Background Dots" />

            <Heading strong title={"KlikBCA"} />

            <Button size="large" block style={styles.buttonConnect}>
                Connect another account
            </Button>
            <Button size="large" block style={styles.buttonDone}>
                Done
            </Button>
        </PageLogin>
    )
})