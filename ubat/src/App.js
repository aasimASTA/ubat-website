import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./config/LanguageContext"; // ✅ Import LanguageProvider
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

function App() {
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    if (popupActive) {
      document.body.classList.add("popup-active");
    } else {
      document.body.classList.remove("popup-active");
    }
  }, [popupActive]);

  return (
    
      <LanguageProvider> {/* ✅ Wrap with LanguageProvider */}
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
      </LanguageProvider>
    
  );
}

export default App;
