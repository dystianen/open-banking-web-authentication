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
    let deleteFirstCharacter = search.substr(1) // Delete character ?
    const query = queryString.parse(deleteFirstCharacter)
    const onClose = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
    };
    return (
        <PageLogin linking={false}>
            <img src={blueDotsCombined} alt="Background Dots" />

            <Heading strong title={message} />

            <Button size="large" block style={styles.buttonConnect} onClick={() => history.push('/bank-list')}>
                Connect another account
            </Button>
            <Button
                size="large"
                block
                style={styles.buttonDone}
                onClick={() => {
                    query.type !== 'sandbox' ? onClose() : window.open(`https://cdi.k3s.bangun-kreatif.com/open-finance/customer/${localStorage.getItem('customer_ref_id')}`)
                }
            }>
                Done
            </Button>
        </PageLogin>
    )
})
