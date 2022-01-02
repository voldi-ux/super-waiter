import {configureStore}from '@reduxjs/toolkit'
import userSlice from '../userRedux/userSlice'
import appData from '../appData/appData'
export const store = configureStore({
    reducer: {
        user: userSlice,
        data: appData
    }
})

