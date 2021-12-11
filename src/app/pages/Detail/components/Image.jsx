import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";
import { ItemImage } from "./template";

const Image = () => {
  const { item } = useSelector(selectors.detail.state);

  return <ItemImage src={item.imgUrl} />;
};

export default Image;
