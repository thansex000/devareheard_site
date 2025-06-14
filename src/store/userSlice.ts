import { getCookie, setCookie } from '@/lib/cookieUtil'
import type { IStoreUser, IUser } from '@/models/IUser'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialUserState: IStoreUser = {
    accesstoken: getCookie('accessToken') || '',
    // refreshToken: getCookie('refreshToken') || '',
    user: getCookie('user') ? JSON.parse(getCookie('user') || '') as IUser : {
        id: '',
        username: '',
        password: '',
        refreshtoken: '',
        created_at: new Date(),
        updated_at: new Date(),
    }
}


const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialUserState,
    reducers: {
        login: (state, action: PayloadAction<IStoreUser>) => {
            state.accesstoken = action.payload.accesstoken
            state.user = action.payload.user

            setCookie('accessToken', action.payload.accesstoken, 1) // 1 hour
            setCookie('user', JSON.stringify(action.payload.user), 1) // 1hour
            setCookie('refreshToken', action.payload.user.refreshtoken, 1)// 1hour
        },
        logout: (state) => {
            state.accesstoken = ''
            state.user = {
                id: '',
                username: '',
                password: '',
                refreshtoken: '',
                created_at: new Date(),
                updated_at: new Date(),
            }

            setCookie('accessToken', '', -1)
            setCookie('user', '', -1)
            setCookie('refreshToken', '', -1)
        },
        updateUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            setCookie('user', JSON.stringify(action.payload), 1) // 1hour
        },

    },
})

export const { login, logout, updateUser } = userSlice.actions
export default userSlice.reducer