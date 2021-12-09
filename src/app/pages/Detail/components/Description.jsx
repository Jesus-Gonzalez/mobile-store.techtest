import React from "react";

import { Card, CardTitle, List, Feature } from "./template";
import { useDescription } from "../hooks";

const Description = () => {
  const { features } = useDescription();

  return (
    <Card>
      <CardTitle>Description</CardTitle>
      <List>
        {features.map((feature) => (
          <Feature key={feature.label}>
            {feature.label}: {feature.value}
          </Feature>
        ))}
      </List>
    </Card>
  );
};

export default Description;
