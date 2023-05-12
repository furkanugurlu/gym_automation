import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Branches,
  Categories,
  CreateCategories,
  Coaches,
  Home,
  Members,
  ToolsCreate,
  Tools,
} from "./pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/create-categories" element={<CreateCategories />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </BrowserRouter>
  );
}
