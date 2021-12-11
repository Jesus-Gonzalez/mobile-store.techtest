import React from "react";

import { AddToCartButton } from "./template";
import { useAddToCart } from "../hooks";

const AddToCart = () => {
  const { handleClickAddToCart } = useAddToCart();

  return (
    <AddToCartButton onClick={handleClickAddToCart}>
      Add To Cart
    </AddToCartButton>
  );
};

export default AddToCart;
