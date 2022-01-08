import { createSlice } from '@reduxjs/toolkit';
import User from './userUtilClass';


//orders are all the previous orders of the user that which have completed and the oredred are the orders that have been not been completed.
const initialState = {
  info: {
    _id: '61d41fa7d95de8082d73c434',
    name: 'vee',
    surname: 'vee',
    email: 'voldi@gmail.com',
    phone: '0628999725',
    orderCount: 0,
  },
  favorites: [],
  orders: [],
  ordered: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
           state = User.userLogin(state,action.payload)
        },
        
        logOut: (state) => {
           state = User.userLogout(state)
        },

        addItemToFav: (state,action) => {
            state = User.userAddToFav(state,action.payload)
        },

        removeItemFromFav: (state,action) => {
          state = User.userRemoveFav(state,action.payload)
        }

    }
})

//selectors
export const selectUser = state => state.user.info
export const  selectUserId = ({ user}) =>  user.info._id
export const selectFavs = ({user}) => user.favorites;
export const selectOrders = ({user}) => user.orders;
export const selectOrdered = ({user}) => user.ordered;


export const { logIn,logOut,addItemToFav,removeItemFromFav } = userSlice.actions
export default userSlice.reducer