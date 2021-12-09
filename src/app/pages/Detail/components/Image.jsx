import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";

const Image = () => {
  const { item } = useSelector(selectors.detail.state);

  return <img src={item.imgUrl} />;
};

export default Image;
