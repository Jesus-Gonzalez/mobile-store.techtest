import { SET_CART_ITEM_COUNT } from "../actions";

const persistedCount = sessionStorage.getItem("mobile-store.cart.count");

const initialState = {
  count: persistedCount ?? 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEM_COUNT: {
      return { ...state, count: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default cart;
