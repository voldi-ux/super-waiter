

export default class User {

  static filter(arr, id) {
   return arr.filter(el => el._id !== id)
 }


  static userLogin(state, user) {
    state.info = user.info;
    state.favorites = user.favorites;
    console.log(state.favorites,user.favorites)
    return state;
  }

  static userLogout(state) {
    state.info = null;
    state.orders = [];
    state.ordered = [];
    state.favorites = [];

    return state;
  }

  static userAddToFav(state, favorites) {
    //reach to the server and update the user's favorites array and return an updated user's favourite array
    state.favorites = favorites;
    return state;
  }
  static userRemoveFav(state, favorites) {
    state.favorites = favorites;
    return state;
  }

  static formatOrders(state, orders) {
    const currentOrders = orders.filter(
      order =>
        order.status.toLowerCase() === 'preparing' ||
        order.status.toLowerCase() === 'delivering' ||
        order.status.toLowerCase() === 'received',
    );
    state.ordered = currentOrders;
    state.orders = orders;
    return state;
  }

  static deleteOrder(state, orderId) {
    state.orders = this.filter(state.orders, orderId)
    state.ordered = this.filter(state.ordered, orderId)
    return state;
  }
}


