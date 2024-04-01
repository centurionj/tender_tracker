import {FC} from "react";
import {Flex} from 'antd';
import styled from "styled-components";
import H1Typography from "../components/UI/H1Typography.ts";

const Container = styled(Flex)`
    margin: 0 40px;
    @media (max-width: 768px) {
        margin: 0 32px
    };
    @media (max-width: 450px) {
        margin: 0 24px
    }
    @media (max-width: 330px) {
        margin: 0 16px
    }
`;

const MainPage: FC = () => {
    return (
        <Flex justify={"center"} style={{margin: 'auto'}}>
            <Container style={{maxWidth: '900px', width: '100%'}} vertical>
                <H1Typography>
                    Документация
                </H1Typography>

            </Container>
        </Flex>
    );
};

export default MainPage;