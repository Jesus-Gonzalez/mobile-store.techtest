import React from "react";
import { Provider as StoreProvider } from "react-redux";

import { store } from "./core/store";

function App() {
  return <StoreProvider store={store}></StoreProvider>;
}

export default App;
