import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store, RootRoute } from "./core";

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <RootRoute />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
