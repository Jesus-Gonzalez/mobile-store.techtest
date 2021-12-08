import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from "../actions";

const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      return state.concat(action.payload.item);
    }
    case REMOVE_ITEM_FROM_CART: {
      const index = state.findIndex(
        (item) => item.id === action.payload.item.id
      );
      return [...state.slice(0, index), ...state.slice(index)];
    }
    case CLEAR_CART: {
      return [];
    }

    default: {
      return state;
    }
  }
};

export default cart;
