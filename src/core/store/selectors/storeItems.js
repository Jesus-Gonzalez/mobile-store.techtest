import { createSelector } from "reselect";

const storeItemsSelector = (state) => state.storeItems;

export const state = createSelector(storeItemsSelector, (cart) => cart);
