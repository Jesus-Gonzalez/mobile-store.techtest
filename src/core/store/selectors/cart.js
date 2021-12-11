import { createSelector } from "reselect";

const countSelector = (state) => state.cart.count;

export const count = createSelector(countSelector, (count) => count);
