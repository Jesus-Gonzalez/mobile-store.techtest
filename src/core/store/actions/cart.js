export const SET_CART_ITEM_COUNT = "cart::setCartItemCount";

export const setCartItemsCountToStore = (count) => ({
  type: SET_CART_ITEM_COUNT,
  payload: count,
});

export const setCartItemsCount = (count) => {
  return (dispatch) => {
    sessionStorage.setItem("mobile-store.cart.count", count);
    dispatch(setCartItemsCountToStore(count));
  };
};
