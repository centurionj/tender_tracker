import styled from "styled-components";
import {Avatar, Flex, Layout, Menu as MenuAntd} from "antd";

const {Header} = Layout;

export const HeaderAntd = styled(Header)`
    @media (max-width: 1024px) {
        height: 50px;
        padding: 24px;
    }
`;

export const Logo = styled(Flex)`
    > span {
        font-size: 50px;
    }
    > div > article {
        font-size: 20px;
        line-height: 1;
    }
    @media (max-width: 1024px) {
        > span {
            font-size: 40px;
        }
        > div > article {
            font-size: 17px;
        }
    }
    @media (max-width: 450px) {
        > span {
            font-size: 30px;
        }
        > div > article {
            font-size: 15px;
        }
    }
`;

export const StyledAvatar = styled(Avatar)`
    color: #fff;
    background-color: #1677ff;
    transition: all 0.3s ease; 
    &:hover {
        background-color: #4096ff;
        cursor: pointer;
    }
`;

export const Menu = styled(MenuAntd)`
     @media (max-width: 1024px) {
        display: none
    }
`;

export const User = styled(Flex)`

    //  @media (max-width: 1024px) {
    //     > span.ant-typography {
    //       display: none
    //     }
    // }
    // @media (max-width: 787px) {
    //     > span {
    //       display: none
    //     }
    // }
    @media (max-width: 1024px) {
       display: none
    }
`;

export const Burger = styled(Flex)`
     @media (min-width: 1025px) {
        display: none
    }
`;