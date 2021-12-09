import { createContext } from "react";

const ProductOptionsContext = createContext({
  selectedOptions: "",
  selectOption: () => {},
});

export default ProductOptionsContext;
