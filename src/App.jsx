import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
const App = () => {
  const location = useLocation();

  return (
    <div className="w-screen min-h-screen overscroll-none text-primary bg-primary font-krub">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
