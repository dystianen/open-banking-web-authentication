import { observer } from "mobx-react-lite";
import { Typography } from "antd";
const { Title, Text } = Typography;

export const Heading = observer((props) => {
    const { title } = props;
    return (
        <>
            <Title level={2} style>
                Congratulations! Your {title}account is successfully connected.
            </Title>
            <Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut.
            </Text>
        </>
    )
})