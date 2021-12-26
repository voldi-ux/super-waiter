import { createSlice } from '@reduxjs/toolkit';


//orders are all the previous orders of the user that which have completed and the oredred are the orders that have been not been completed.

const initialState = {
    info: null,
    orders: null,
    ordered:null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state,payload) => {
            state.user  = payload
      }
    }
})


export const { logIn } = userSlice.actions
export default userSlice.reducer