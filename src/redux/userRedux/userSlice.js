import { createSlice } from '@reduxjs/toolkit';
import User from './userUtilClass';
import {axiosPost} from '../../axios/axios'

//orders are all the previous orders of the user that which have completed and the oredred are the orders that have been not been completed.
const initialState = {
  info: null,
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
        },
       
        clearUserFavs: (state, action) => {
          state.favorites = []
      },
      getOrders: (state, action) => {
           state = User.formatOrders(state,action.payload)
      },
      
      deleteUserOrder: (state, action) => {
        state = User.deleteOrder(state,action.payload)
      }
    }
})

export const {
  logIn,
  logOut,
  addItemToFav,
  removeItemFromFav,
  clearUserFavs,
  getOrders,
  deleteUserOrder,
} = userSlice.actions;


//selectors
export const selectUser = state => state.user.info
export const  selectUserId = ({ user}) =>  user.info._id
export const selectFavs = ({user}) => user.favorites;
export const selectOrders = ({user}) => user.orders;
export const selectOrdered = ({user}) => user.ordered;


//thunks
export const clearFavs = (userId) =>async dispatch => {
  const resp = await axiosPost('clear-user-favorites', { userId });
  console.log(resp)
  if (resp.msg) {
    return
  }

  dispatch(clearUserFavs())
}

export const getUsersOrders = userId =>async dispatch => {
  const res = await axiosPost('get-user-orders', {userId});
  if (!res.msg || !res.err) {
     dispatch(getOrders(res))
  }

}
export const deleteOrder = (userId,orderId) =>async dispatch => {
  const res = await axiosPost('delete-order', {userId, orderId});
  if (!res.msg || !res.err) {
     dispatch(deleteUserOrder(orderId));
  }

}




export default userSlice.reducer