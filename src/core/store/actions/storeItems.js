import * as API from "app/api";

export const REQUEST_STORE_ITEMS = "storeItems::requestStoreItems";
export const LOADED_STORE_ITEMS = "storeItems::loadedStoreItems";
export const ERROR_STORE_ITEMS = "storeItems::errorStoreItems";

export const requestStoreItems = () => ({
  type: REQUEST_STORE_ITEMS,
});

export const loadedStoreItems = (items) => ({
  type: LOADED_STORE_ITEMS,
  payload: { items },
});

export const errorStoreItems = () => ({
  type: ERROR_STORE_ITEMS,
});

export const fetchStoreItems = () => {
  return async (dispatch) => {
    dispatch(requestStoreItems());
    try {
      const items = await API.storeItems.fetchItems();
      dispatch(loadedStoreItems(items));
    } catch {
      dispatch(errorStoreItems());
    }
  };
};
