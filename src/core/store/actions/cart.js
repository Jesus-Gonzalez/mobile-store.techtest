export const ADD_ITEM_TO_CART = "cart::addItemToCart";
export const REMOVE_ITEM_FROM_CART = "cart::removeItemFromCart";
export const CLEAR_CART = "cart::clearCart";

export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: { item },
});

export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: { item },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
