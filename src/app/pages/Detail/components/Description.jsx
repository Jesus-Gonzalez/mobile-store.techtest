import React from "react";

import {
  DescriptionContainer,
  DescriptionTitle,
  FeatureList,
  Feature,
} from "./template";
import { useDescription } from "../hooks";

const Description = () => {
  const { features } = useDescription();

  return (
    <DescriptionContainer>
      <DescriptionTitle>Description</DescriptionTitle>
      <FeatureList>
        {features.map((feature) => (
          <Feature key={feature.label}>
            {feature.label}: {feature.value}
          </Feature>
        ))}
      </FeatureList>
    </DescriptionContainer>
  );
};

export default Description;
