import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";
import { ItemImage } from "./template";

const Image = () => {
  const { item } = useSelector(selectors.detail.state);

  return (
    <ItemImage
      src={item.imgUrl}
      alt={`Device image: ${item.brand} ${item.model}`}
    />
  );
};

export default Image;
