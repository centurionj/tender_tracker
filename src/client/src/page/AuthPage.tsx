import AuthForm from "../components/AuthForm.tsx";
import {Flex, Layout, Typography} from "antd";
import {Link, useLocation} from "react-router-dom";
import {RoutePath} from "../router/routes.tsx";
import styled from "styled-components";
import MainFooter from "../components/MainFooter.tsx";
import {EisIcon} from "../../img/EisIcon.tsx";
import H1Typography from "../components/UI/H1Typography.ts";
import RegistrationForm from "../components/RegistrationForm.tsx";

const {Content} = Layout;

const MainFlex = styled(Flex)`
    width: 100%;
    margin: 30px 15px;
    gap: 25px;
    @media (max-width: 430px) {
        margin: 25px 15px;
        gap: 20px
    }
    @media (max-width: 380px) {
        margin: 15px 15px;
        gap: 15px
    }
`;


const AuthPage = () => {
    const location = useLocation()
    const isRegistration = location.pathname === RoutePath.registration

    return (
        <Layout>
            {/*<Header style={{*/}
            {/*    textAlign: 'center',*/}
            {/*    color: '#fff',*/}
            {/*    height: 48,*/}
            {/*    backgroundColor: '#4096ff',*/}
            {/*}}>*/}
            {/*    <Menu>*/}

            {/*    </Menu>*/}
            {/*</Header>*/}
            <Content style={{display: "flex", minHeight: 'calc(100vh - 96px)',}}>
                <div
                    style={{
                        minHeight: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        flexGrow: 1
                    }}>
                    <MainFlex vertical align={"center"} justify={"center"}>
                        <EisIcon style={{fontSize: '100px'}}/>
                        <div style={{textAlign: "center"}}>
                            {isRegistration ?
                                <>
                                    <H1Typography>
                                        Зарегистрироваться
                                    </H1Typography>
                                    <Typography.Title level={5} style={{fontWeight: 500, margin: 8}}>
                                        Зарегистрируйтесь сейчас и мгновенно получите бесплатный доступ
                                    </Typography.Title>
                                </> :
                                <H1Typography>
                                    Войти
                                </H1Typography>
                            }
                        </div>
                        {isRegistration ? <RegistrationForm/> : <AuthForm/>}
                        <Typography style={{
                            fontSize: 16,
                            fontWeight: 400,
                            display: "flex",
                            flexFlow: 'row wrap',
                            alignItems: "center",
                            justifyContent: 'center',
                            gap: 4
                        }}>{isRegistration ?
                            <>У вас уже есть учетная запись? {' '}<Link
                                to={RoutePath.login}>Войдите здесь</Link></> :
                            <>У вас ещё нет учетной записи? {' '}<Link
                                to={RoutePath.registration}>Зарегистрируйтесь здесь</Link></>}
                        </Typography>
                    </MainFlex>
                </div>
            </Content>
            <MainFooter/>
        </Layout>
    );
};

export default AuthPage;
