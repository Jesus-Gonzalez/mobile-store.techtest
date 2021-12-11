import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "./app/components";
import { store, RootRoute } from "./core";

function App() {
  return (
    <StoreProvider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <RootRoute />
        </BrowserRouter>
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default App;
