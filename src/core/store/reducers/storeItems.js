import {
  REQUEST_STORE_ITEMS,
  LOADED_STORE_ITEMS,
  ERROR_STORE_ITEMS,
} from "../actions";

const initialState = {
  error: false,
  items: [],
  loading: false,
};

const storeItems = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STORE_ITEMS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOADED_STORE_ITEMS: {
      return {
        ...state,
        loading: false,
        error: false,
        items: action.payload.items,
      };
    }
    case ERROR_STORE_ITEMS: {
      return {
        ...state,
        loading: false,
        error: true,
        items: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default storeItems;
