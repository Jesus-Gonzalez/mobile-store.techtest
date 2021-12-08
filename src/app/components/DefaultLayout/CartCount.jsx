import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";

import { CartCountComponent } from "./template";

const CartCount = () => {
  const cartCount = useSelector(selectors.cart.cartCount);

  return <CartCountComponent>{cartCount}</CartCountComponent>;
};

export default CartCount;
