import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";

import ActionsProvider from "./ActionsProvider";
import ProductOptionSelector from "./ProductOptionSelector";
import AddToCart from "./AddToCart";
import { Card, CardTitle } from "./template";

const Actions = () => {
  const { item } = useSelector(selectors.detail.state);

  return (
    <ActionsProvider>
      <Card>
        <CardTitle>Actions</CardTitle>

        {Object.keys(item.options).map((key) => (
          <ProductOptionSelector
            key={key}
            option={item.options[key]}
            optionKey={key}
          />
        ))}

        <AddToCart />
      </Card>
    </ActionsProvider>
  );
};

export default Actions;
