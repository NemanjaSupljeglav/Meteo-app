//React
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/parts/Navbar";

//Pages
import Home from "./pages/home";
import Details from "./pages/details";
import Settings from "./pages/settings";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}
