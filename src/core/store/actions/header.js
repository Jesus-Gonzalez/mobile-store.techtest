export const SET_BREADCRUMBS = "header::setBreadcrumbs";

export const setBreadcrumbs = (breadcrumbs) => ({
  type: SET_BREADCRUMBS,
  payload: breadcrumbs,
});
