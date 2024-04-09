import {Layout} from "antd";
import {ReactNode} from "react";
import MainFooter from "./MainFooter.tsx";
import Header from "./Header.tsx";

const {Content} = Layout;

interface HeaderProps {
    children: ReactNode;
}


const MainLayout = ({children}: HeaderProps) => {
    return (

        <Layout>
            <Header/>
            <Content style={{minHeight: '100vh'}}>
                {children}
            </Content>
            <MainFooter/>
        </Layout>
    );
};

export default MainLayout;
