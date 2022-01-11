import {createSlice} from '@reduxjs/toolkit';
import {
  updateCartItem,
  removeCartItem,
  addCartItem,
  increment,
  decrement,
  getCartTotal,
  addInstruction,
} from './cartUtils';

const initialState = {
  items: [],
  modalVisible: false,
  orderInstrunction: '',
  address: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateItem: (state, action) => {
      state.items = updateCartItem(state.items, action.payload);
    },
    removeItem: (state, action) => {
      state.items = removeCartItem(state.items, action.payload);
    },
    addItem: (state, action) => {
      state = addCartItem(state, action.payload);
    },

    incrementItem: (state, action) => {
      state.items = increment(state.items, action.payload);
    },

    decrementItem: (state, action) => {
      state.items = decrement(state.items, action.payload);
    },

    //
    setModalVisibilty: (state, action) => {
      state.modalVisible = action.payload;
    },

    setOrderInstruction: (state, action) => {
      state = addInstruction(state, action.payload);
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },
    onOrderSuccesss: (state, action) => {
      state.orderInstrunction = '';
      state.items = [];
    },

    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  decrementItem,
  incrementItem,
  removeItem,
  updateItem,
  setModalVisibilty,
  setOrderInstruction,
  setAddress,
  onOrderSuccesss,
  clearCart
} = cartSlice.actions;

//selectors
export const selectCartItems = ({cart: {items}}) => items;
export const selectTotal = ({cart: {items}}) => getCartTotal(items);
export const selectVisible = ({cart: {modalVisible}}) => modalVisible;
export const selectInstruction = ({cart: {orderInstrunction}}) =>
  orderInstrunction;

//thunks

export default cartSlice.reducer;
