import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const cartCount = createSelector(cartSelector, (cart) => cart.length);
