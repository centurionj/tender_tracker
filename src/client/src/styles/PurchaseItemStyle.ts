import styled from "styled-components";
import {Flex} from "antd";

export const MainFlex = styled(Flex)`
     @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const FirstFlex = styled(Flex)`
    max-width: 70%;
     @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const CostFlex = styled(Flex)`
    gap: 16px;
    border-left: 1px solid #e4e7f2;
     @media (max-width: 768px) {
        width: 100%;
        flex-flow: row wrap;
        justify-content: space-between;
        row-gap: 8px;
        column-gap: 16px;
        border-top: 1px solid #e4e7f2;
        border-left: 0px;
    }
`;

export const CostDateFlex = styled(Flex)`
    gap: 10px;
     @media (max-width: 768px) {
        flex-flow: row wrap;
        align-items: flex-start;
        gap: 16px
    }
`;