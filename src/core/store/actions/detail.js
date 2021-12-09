import * as API from "app/api";

export const REQUEST_DETAIL = "detail::requestDetail";
export const LOADED_DETAIL = "detail::loadedDetail";
export const ERROR_DETAIL = "detail::errorDetail";

export const requestDetail = () => ({
  type: REQUEST_DETAIL,
});

export const loadedDetail = (item) => ({
  type: LOADED_DETAIL,
  payload: { item },
});

export const errorDetail = () => ({
  type: ERROR_DETAIL,
});

export const fetchDetail = (itemId) => {
  return async (dispatch) => {
    dispatch(requestDetail());
    try {
      const item = await API.detail.fetchItem(itemId);
      dispatch(loadedDetail(item));
    } catch {
      dispatch(errorDetail());
    }
  };
};
