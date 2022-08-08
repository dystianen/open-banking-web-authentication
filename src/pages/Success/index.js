import { observer } from "mobx-react-lite";
import { PageLogin } from "../../component/Layouts/PageLogin";
import { Button } from "antd";

// Components
import { Heading } from "./components/Heading";

// Assets
import blueDotsCombined from "../../assets/images/blue-dots-combined.svg";
import { styles } from "./styles";
import {useHistory, useLocation} from "react-router-dom";
import {appConfig} from "../../config/app";
import queryString from "querystring";

export const Success = observer((props) => {
    const history = useHistory();
    const { message } = props
    const {search} = useLocation();
    // let deleteFirstCharacter = search.substr(1) // Delete character ?
    // const query = queryString.parse(deleteFirstCharacter)

    return (
        <PageLogin linking={false}>
            <img src={blueDotsCombined} alt="Background Dots" />

            <Heading strong title={message} />

            <Button size="large" block style={styles.buttonConnect} onClick={() => history.push(`/bank-list${search}`)}>
                Connect another account
            </Button>
            <Button
                size="large"
                block
                style={styles.buttonDone}
                onClick={() => window.open(`${appConfig.urlBilling}/open-finance/customer/${localStorage.getItem('customerId')}`)}>
                Done
            </Button>
        </PageLogin>
    )
})
