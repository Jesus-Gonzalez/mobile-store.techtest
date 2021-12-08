import { useContext } from "react";

import { SearchContext } from "core/context";

export const useSearch = () => {
  const { searchText, setSearchText } = useContext(SearchContext);

  return {
    searchText,
    setSearchText,
  };
};
