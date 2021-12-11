import React from "react";

import { useSearch } from "../hooks";
import { SearchInput } from "./template";

const Search = () => {
  const { setSearchText } = useSearch();
  const handleChangeSearch = (event) => setSearchText(event.target.value);

  return (
    <SearchInput placeholder="Filter devices" onChange={handleChangeSearch} />
  );
};

export default Search;
