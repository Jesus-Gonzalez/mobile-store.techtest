import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";

import {
  ProductOptionList,
  ProductOption,
  ProductOptionLabel,
  ProductOptionWrapper,
} from "./template";
import { ProductOptionsContext } from "../context";

const labels = {
  colors: "Color",
  storages: "Storage",
};

const ProductOptionSelector = (props) => {
  const { option, optionKey } = props;

  const { selectedOptions, selectOption } = useContext(ProductOptionsContext);

  const selectedOption = selectedOptions[optionKey];

  const handleClickOption = useCallback(
    (item) => selectOption(optionKey, item),
    [selectOption]
  );

  return (
    <ProductOptionWrapper>
      <ProductOptionLabel>{labels[optionKey]}</ProductOptionLabel>
      <ProductOptionList>
        {option.map((item) => (
          <ProductOption
            key={item.code}
            selected={selectedOption === item}
            onClick={() => handleClickOption(item)}
          >
            {item.name}
          </ProductOption>
        ))}
      </ProductOptionList>
    </ProductOptionWrapper>
  );
};

ProductOptionSelector.propTypes = {
  option: PropTypes.array,
  optionKey: PropTypes.string,
};

export default ProductOptionSelector;
