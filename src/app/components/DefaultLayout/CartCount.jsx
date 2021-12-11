import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";

import { CartCountComponent } from "./template";

const CartCount = () => {
  const count = useSelector(selectors.cart.count);

  return <CartCountComponent>Cart Items: {count}</CartCountComponent>;
};

export default CartCount;
