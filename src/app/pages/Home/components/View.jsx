import React from "react";

import { Breadcrumbs } from "app/components";

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
        <Breadcrumbs>Home</Breadcrumbs>
        <Search />
        <List />
      </ContentWrapper>
    </SearchProvider>
  );
};

export default View;
