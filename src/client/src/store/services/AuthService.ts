import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Dispatch} from '@reduxjs/toolkit'
import {AuthRequest, AuthResponse} from '../../models/response/AuthTypes'
import {logout, setAuth} from '../reducers/AuthSlice'

export const baseUrl = import.meta.env.VITE_BASE_URL + 'api/v1/users'

export const authApi = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: build => ({
        login: build.mutation<AuthResponse, AuthRequest>({
            query: ({email, password}) => ({
                url: '/token',
                method: 'POST',
                body: {email, password},
                credentials: 'include',
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    console.log('Фунция login отработала успешно:', data)
                    // handleAuthSuccess(dispatch, data)
                } catch (error) {
                    console.error('Ошибка во время выполнения login:', error)
                }
            },
        }),

        registration: build.mutation<AuthResponse, AuthRequest>({
            query: body => ({
                url: '/registration',
                method: 'POST',
                body,
                credentials: 'include',
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    handleAuthSuccess(dispatch, data)
                } catch (error) {
                    console.error('Ошибка во время выполнения registration:', error)
                }
            },
        }),

        logout: build.mutation<void, void>({
            query: () => ({
                url: '/logout',
                method: 'POST',
                credentials: 'include',
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    localStorage.removeItem('token')
                    dispatch(logout())
                } catch (error) {
                    // console.error('Ошибка во время выполнения logout:', error)
                }
            },
        }),

        refresh: build.query<AuthResponse, void>({
            query: () => ({
                url: '/refresh',
                credentials: 'include',
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    handleAuthSuccess(dispatch, data)
                } catch (error: any) {
                    if (error?.status === 401) {
                        localStorage.removeItem('token')
                        dispatch(logout())
                    } else {
                        console.error('Ошибка во время выполнения refresh:', error)
                    }
                }
            },
        }),
    }),
})

export function handleAuthSuccess(
    dispatch: Dispatch,
    data: AuthResponse
): void {
    localStorage.setItem('token', data.accessToken)
    dispatch(setAuth(data.accessToken))
}