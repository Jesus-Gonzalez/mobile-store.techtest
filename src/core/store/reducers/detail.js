import { REQUEST_DETAIL, LOADED_DETAIL, ERROR_DETAIL } from "../actions";

const initialState = {
  error: false,
  items: [],
  loading: false,
};

const storeItems = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DETAIL: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOADED_DETAIL: {
      return {
        ...state,
        loading: false,
        error: false,
        item: action.payload.item,
      };
    }
    case ERROR_DETAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        item: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default storeItems;
