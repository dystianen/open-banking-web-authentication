import { observer } from "mobx-react-lite";
import { PageLogin } from "../../component/Layouts/PageLogin";
import { Button } from "antd";

// Components
import { Heading } from "./components/Heading";

// Assets
import blueDotsCombined from "../../assets/images/blue-dots-combined.svg";
import { styles } from "./styles";
import {useHistory} from "react-router-dom";
import {appConfig} from "../../config/app";

export const Success = observer((props) => {
    const history = useHistory();
    const { message } = props
    return (
        <PageLogin linking={false}>
            <img src={blueDotsCombined} alt="Background Dots" />

            <Heading strong title={message} />

            <Button size="large" block style={styles.buttonConnect} onClick={() => history.push('/bank-list')}>
                Connect another account
            </Button>
            <Button size="large" block style={styles.buttonDone} onClick={() => window.open(`https://openbanking.k3s.bangun-kreatif.com/open-banking/customer/${localStorage.getItem('customer_ref_id')}`)}>
                Done
            </Button>
        </PageLogin>
    )
})