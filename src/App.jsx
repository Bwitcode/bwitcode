import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact"
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  const location = useLocation();
  return (
    <div className="w-screen min-h-screen overscroll-none text-primary bg-primary font-krub text-base">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
