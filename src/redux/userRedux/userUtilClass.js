

export default class User {
  static userLogin(state, user) {
    state.info = user.info;
    state.orders = user.orders;
    state.ordered = user.ordered;
    state.favorites = user.favorites;
    return state;
  }

  static userLogout(state) {
    state.info = null;
    state.orders = null;
    state.ordered = null;
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
}
