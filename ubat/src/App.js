import React ,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Jumuah from "./pages/Jumuah";
import Article from "./pages/JumuahArticle";


import "./assets/style.css";  // Import the global styles
import PropheticEducation from "./pages/PropheticEducation";
function App() {
  const [popupActive, setPopupActive] = useState(false);

  // Update body class based on popup state
  React.useEffect(() => {
    if (popupActive) {
      document.body.classList.add("popup-active");
    } else {
      document.body.classList.remove("popup-active");
    }
  }, [popupActive]);
  return (
    <Router>
     <Navbar popupActive={popupActive} />
      <Routes>
      <Route path="/" element={<Home setPopupActive={setPopupActive} />} />
        <Route path="/about" element={<About setPopupActive={setPopupActive}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donate />} />
        <Route path="/jumuah" element={<Jumuah />} />
        <Route path="/article" element={<Article />} />
        <Route path="/prophetic" element={<PropheticEducation />} />
      </Routes>
    </Router>
  );
}

export default App;
