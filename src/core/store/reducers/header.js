import { SET_BREADCRUMBS } from "../actions";

const initialState = {
  breadcrumbs: [],
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case SET_BREADCRUMBS: {
      return {
        ...state,
        breadcrumbs: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default header;
