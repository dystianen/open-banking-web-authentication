import { observer } from "mobx-react-lite";
import { Typography } from "antd";
import { styles } from "../styles";
const { Title, Text } = Typography;

export const Heading = observer((props) => {
    const { title } = props;
    return (
        <>
            <Title strong level={2} style={styles.heading}>
                Congratulations! <br /> Your {title} account is successfully connected.
            </Title>
            <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut.
            </Text>
        </>
    )
})