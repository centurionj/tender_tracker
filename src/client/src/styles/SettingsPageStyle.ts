import styled from "styled-components";
import {Collapse as CollapseAntd, Typography} from "antd";

export const Collapse = styled(CollapseAntd)`
    > div.ant-collapse-item {
        padding: 26px 0;
        border-bottom: 1px solid #e4e7f2;
    }
`;

export const TypographyInput = styled(Typography)`
    font-weight: 500;
    margin-bottom: 8px;
`;
