import React from "react";
import About from "./pages/About.tsx";
import Endeavours from "./pages/Endeavours.tsx";
import Hangout from "./pages/Hangout.tsx";
import { createRoot } from "react-dom/client";
import "../src/stylesheets/global.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const container = document.querySelector(".root")!;
const root = createRoot(container);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/endeavours" element={<Endeavours />} />
      <Route path="/hangout" element={<Hangout />} />
    </Routes>
  </Router>
);
