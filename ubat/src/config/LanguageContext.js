import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default

  // ✅ Load language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const switchLanguage = (lang) => {
    // ✅ Use the same key for consistency
    localStorage.setItem("language", lang);

    const params = new URLSearchParams(window.location.search);
    if (params.get("search")) {
      window.location.href = "/"; // Force full reload to homepage
    } else {
      setLanguage(lang); // Only switch without reload if not searching
    }
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
