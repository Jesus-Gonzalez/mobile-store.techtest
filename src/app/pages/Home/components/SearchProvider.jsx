import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

import { SearchContext } from "../context";

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const providerValue = useMemo(
    () => ({ searchText, setSearchText }),
    [searchText, setSearchText]
  );

  return (
    <SearchContext.Provider value={providerValue}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default SearchProvider;
