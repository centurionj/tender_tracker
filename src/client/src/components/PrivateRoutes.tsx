import {Navigate, Outlet} from 'react-router-dom'

import {RoutePath} from '../router/routes'
import {Flex, Spin} from "antd";
import MainLayout from "./MainLayout.tsx";

const PrivateRoutes = () => {
    // const { isLoading } = authApi.useRefreshQuery()
    // const isAuth = useAppSelector(getIsAuth)

    const isAuth = true

    if (false)
        return (
            <Flex align="center" gap="middle">
                <Spin/>
            </Flex>
        )

    return isAuth ? <MainLayout><Outlet/></MainLayout> : <Navigate to={RoutePath.login}/>
}

export default PrivateRoutes
