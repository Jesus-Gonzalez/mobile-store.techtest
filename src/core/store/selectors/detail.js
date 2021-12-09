import { createSelector } from "reselect";

const detailSelector = (state) => state.detail;

export const state = createSelector(detailSelector, (state) => state);
