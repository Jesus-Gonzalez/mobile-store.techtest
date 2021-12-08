import React from "react";

import Search from "./Search";
import List from "./List";
import SearchProvider from "./SearchProvider";
import { ContentWrapper } from "./template";
import { useHome } from "../hooks";

const View = () => {
  useHome();

  return (
    <SearchProvider>
      <ContentWrapper>
        <Search />
        <List />
      </ContentWrapper>
    </SearchProvider>
  );
};

export default View;
