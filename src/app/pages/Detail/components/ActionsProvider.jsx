import React from "react";
import PropTypes from "prop-types";

import { ProductOptionsContext } from "../context";
import { useProductOptionsProvider } from "../hooks";

const ActionsProvider = ({ children }) => {
  const productOptionsProviderValue = useProductOptionsProvider();

  return (
    <ProductOptionsContext.Provider value={productOptionsProviderValue}>
      {children}
    </ProductOptionsContext.Provider>
  );
};

ActionsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ActionsProvider;
