import { createContext } from "react";

const StoreContext = createContext({
  searchText: "",
  setSearchText: () => {},
});

export default StoreContext;
