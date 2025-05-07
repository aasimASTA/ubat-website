// // src/config/LanguageContext.js

// import React, { createContext, useState, useContext } from 'react';

// // 1. Create the context
// const LanguageContext = createContext();

// // 2. Create a provider component
// export const LanguageProvider = ({ children }) => {
//   // 3. Set the default language to English ('en')
//   const [language, setLanguage] = useState('en');

//   // 4. Toggle function to switch language
//   const switchLanguage = (lang) => {
//     setLanguage((prevLang) => (prevLang === "en" ? "ta" : "en"));; // Accepts 'en' or 'ta'
//   };

//   return (
//     // 5. Provide both language state and toggle function to all children
//     <LanguageContext.Provider value={{ language, switchLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // 6. Custom hook to use the language context
// export const useLanguage = () => useContext(LanguageContext);

import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  // Switch language and reload the page
  const switchLanguage = (lang) => {
    localStorage.setItem('language', lang);
    window.location.reload(); // reload triggers reinitialization
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

