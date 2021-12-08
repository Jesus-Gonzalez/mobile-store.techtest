import React from "react";

import Search from "./Search";
import List from "./List";
import { ContentWrapper } from "./template";

const View = () => {
  return (
    <ContentWrapper>
      <Search />
      <List />
    </ContentWrapper>
  );
};

export default View;
