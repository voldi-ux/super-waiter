import {configureStore}from '@reduxjs/toolkit'
import userSlice from '../userRedux/userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})

