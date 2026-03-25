import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import DemosPage from "../pages/portfolio";
import ScrollToHash from "./ScrollToHash";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/demos" element={<DemosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
