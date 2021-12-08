import React from "react";

import { useSearch } from "../hooks";

const Search = () => {
  const { setSearchText } = useSearch();
  const handleChangeSearch = (event) => setSearchText(event.target.value);

  return <input type="search" onChange={handleChangeSearch} />;
};

export default Search;
