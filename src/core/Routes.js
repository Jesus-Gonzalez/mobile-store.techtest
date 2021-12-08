import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage, DetailPage } from "../app/pages";

const RootRoute = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/detail" element={<DetailPage />} />
  </Routes>
);

export default RootRoute;
