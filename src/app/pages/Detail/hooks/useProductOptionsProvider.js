import { useCallback, useMemo, useReducer } from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";

export const useProductOptionsProvider = () => {
  const { item } = useSelector(selectors.detail.state);
  const defaultOptions = Object.keys(item.options).reduce(
    (acc, key) => ({
      ...acc,
      [key]: item.options[key][0],
    }),
    {}
  );

  const [selectedOptions, dispatch] = useReducer((options, { key, value }) => {
    if (!key || !value) return options;

    const nextOptions = { ...options, [key]: value };
    return nextOptions;
  }, defaultOptions);

  const selectOption = useCallback(
    (key, value) => dispatch({ key, value }),
    [dispatch]
  );

  return useMemo(
    () => ({ selectedOptions, selectOption }),
    [selectedOptions, selectOption]
  );
};
