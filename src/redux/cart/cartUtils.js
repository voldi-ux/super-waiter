export const updateCartItem = (items, item) => {
  items.some((ITEM, index) => {
    if (ITEM._id === item._id) {
      items[index] = item;
      return true;
    }
  });

  return items;
};

export const increment = (items, id) => {
  items.some((ITEM, index) => {
    if (ITEM._id === id) {
      ITEM.qty += 1;
      items[index] = ITEM;
      return true;
    }
  });
  return items;
};

export const decrement = (items, id) => {
  items.some((ITEM, index) => {
    if (ITEM._id === id) {
      if (ITEM.qty > 1) {
        ITEM.qty -= 1;
        items[index] = ITEM;
      }
      return true;
    }
  });

  return items;
};

export const addCartItem = (state, item) => {
  const itemExistInCart = state.items.some(ITEM => ITEM._id === item._id);

  if (itemExistInCart) {
    state.modalVisible = true;
  } else {
  state.items.push(item);

  }
  return state
};

export const removeCartItem = (items, id) => {
  return items.filter(ITEM => ITEM._id !== id);
};

export const getCartTotal = function (items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.addOns.length) {
      item.addOns.forEach(add => (total += add.price));
    }
    total += item.price * item.qty;
  }

  return total;
};
