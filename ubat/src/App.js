import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./config/LanguageContext"; // ✅ use useLanguage hook

// Import files 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Jumuah from "./pages/Jumuah";
import Article from "./pages/JumuahArticle";
import PropheticEducation from "./pages/PropheticEducation";
import "./assets/style.css";

// ✅ Inner App with language context
function AppContent() {
  const [popupActive, setPopupActive] = useState(false);
  const { language } = useLanguage(); // ✅ use hook to get language

  useEffect(() => {
    if (popupActive) {
      document.body.classList.add("popup-active");
    } else {
      document.body.classList.remove("popup-active");
    }
  }, [popupActive]);

  return (
    <div className={language === "tamil" ? "lang-tamil" : "lang-english"}>
      <Router>
        <Navbar popupActive={popupActive} />
        <Routes>
          <Route path="/" element={<Home setPopupActive={setPopupActive} />} />
          <Route path="/about" element={<About setPopupActive={setPopupActive} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donate />} />
          <Route path="/jumuah" element={<Jumuah />} />
          <Route path="/article" element={<Article />} />
          <Route path="/prophet" element={<PropheticEducation />} />
        </Routes>
      </Router>
    </div>
  );
}

// ✅ Main app wrapped in LanguageProvider
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
