import { useContext } from "react";

import { ProductOptionsContext } from "../context";

export const useProductOptions = () => {
  const { selectedOptions, selectOption } = useContext(ProductOptionsContext);

  return { selectedOptions, selectOption };
};
