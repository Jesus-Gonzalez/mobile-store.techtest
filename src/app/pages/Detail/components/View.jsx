import React from "react";

import Image from "./Image";
import Description from "./Description";
import { Column, Product } from "./template";

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
    <Product>
      <Column>
        <Image />
      </Column>

      <Column>
        <Description />
        {/* <Actions /> */}
      </Column>
    </Product>
  );
};

export default View;
