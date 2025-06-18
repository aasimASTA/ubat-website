import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./config/LanguageContext";

// Pages & Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

import CategoryPage from "./pages/CategoryPage"; // ✅ Dynamic category page

import "./assets/style.css";

// ✅ Inner app with LanguageContext
function AppContent() {
  const [popupActive, setPopupActive] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    document.body.classList.toggle("popup-active", popupActive);
  }, [popupActive]);

  return (
    <div className={language === "ta" ? "lang-tamil" : "lang-english"}>
      <Router>
        <Navbar popupActive={popupActive} />
        <Routes>
          <Route path="/" element={<Home setPopupActive={setPopupActive} />} />
          <Route path="/about" element={<About setPopupActive={setPopupActive} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donate />} />
          

          {/* ✅ Unified Dynamic Page for All Categories (e.g. jumuah, nikkah, aqeedah, etc.) */}
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

// ✅ App root wrapped with LanguageProvider
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
