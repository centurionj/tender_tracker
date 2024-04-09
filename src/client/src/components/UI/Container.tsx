import {CSSProperties, FC, ReactNode} from 'react';
import styled from "styled-components";
import {Flex} from "antd";

const FlexContainer = styled(Flex)`
    margin: 40px;
    @media (max-width: 768px) {
        margin: 32px
    };
    @media (max-width: 450px) {
        margin: 24px
    }
    @media (max-width: 330px) {
        margin: 16px
    }
`;

interface IContainerProps {
    style?: CSSProperties;
    children: ReactNode;
}

const Container: FC<IContainerProps> = ({style, children}) => {
    return (
        <Flex justify={"center"} style={{margin: 'auto'}}>
            <FlexContainer vertical style={{maxWidth: '900px', width: '100%', ...style}}>
                {children}
            </FlexContainer>
        </Flex>
    );
};

export default Container;