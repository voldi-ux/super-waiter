import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../userRedux/userSlice';
import appData from '../appData/appData';
import cart from '../cart/cartRedux';


export const store = configureStore({
    reducer: {
        user: userSlice,
        data: appData,
        cart
    }
})

