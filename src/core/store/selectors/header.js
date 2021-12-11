import { createSelector } from "reselect";

const breadcrumbsSelector = (state) => state.header.breadcrumbs;

export const breadcrumbs = createSelector(
  breadcrumbsSelector,
  (breadcrumbs) => breadcrumbs
);
