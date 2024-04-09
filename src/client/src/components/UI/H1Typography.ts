import styled from "styled-components";
import {Typography} from "antd";


const H1Typography = styled(Typography.Title)`
    margin-top: 0px !important;
    font-weight: 400 !important;

    @media (max-width: 768px) {
        font-size: 31px !important;
    }

    @media (max-width: 450px) {
        font-size: 27px !important;
    }

    @media (max-width: 320px) {
        font-size: 24px !important;
    }
`;

export default H1Typography