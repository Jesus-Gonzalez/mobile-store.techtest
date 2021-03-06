import React from "react";

import Image from "./Image";
import Description from "./Description";
import Actions from "./Actions";
import { Column, Product, ProductWrapper } from "./template";
import { useDetail } from "../hooks";

const View = () => {
  const { loading, error, item } = useDetail();

  if (loading || !item) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error occured</h2>;
  }

  return (
    <ProductWrapper>
      <Product>
        <Column>
          <Image />
        </Column>

        <Column>
          <Description />
          <Actions />
        </Column>
      </Product>
    </ProductWrapper>
  );
};

export default View;
