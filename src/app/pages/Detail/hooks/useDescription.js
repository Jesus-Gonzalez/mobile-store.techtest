import { useMemo } from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";

export const useDescription = () => {
  const { item } = useSelector(selectors.detail.state);

  const features = useMemo(() => [
    {
      label: "Brand",
      value: item.brand,
    },
    {
      label: "Model",
      value: item.model,
    },
    {
      label: "CPU",
      value: item.cpu,
    },
    {
      label: "RAM",
      value: item.ram,
    },
    {
      label: "Display",
      value: item.displayResolution,
    },
    {
      label: "Release Date",
      value: item.announced,
    },
  ]);

  return {
    features,
  };
};
