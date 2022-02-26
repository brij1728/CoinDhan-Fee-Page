import * as React from "react";

import { Route, Routes } from "react-router-dom";

import { FeePage } from "../pages/FeePage";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<FeePage />} />
    </Routes>
  );
};
