import {RouteProps} from 'react-router-dom'

import MainPage from '../page/MainPage'
import AuthPage from '../page/AuthPage'
import UserPage from "../page/UserPage.tsx";
import SearchPage from "../page/SearchPage.tsx";
import SettingsPage from "../page/SettingsPage.tsx";

export enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
    REGISTRATION = 'registration',
    USER = 'user',
    SEARCH = 'search',
    SETTINGS = 'settings'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTRATION]: '/registration',
    [AppRoutes.USER]: '/user',
    [AppRoutes.SEARCH]: '/search',
    [AppRoutes.SETTINGS]: '/settings',
}

export const routes: RouteProps[] = [
    {path: RoutePath.registration, element: <AuthPage/>},
    {path: RoutePath.login, element: <AuthPage/>},
]

export const privateRoutes: RouteProps[] = [
    {path: RoutePath.main, element: <MainPage/>},
    {path: RoutePath.search, element: <SearchPage/>},
    {path: RoutePath.user, element: <UserPage/>},
    {path: RoutePath.settings, element: <SettingsPage/>},
]
