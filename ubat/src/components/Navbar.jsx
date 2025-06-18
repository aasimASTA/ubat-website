import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";  // Import global styles
import Logo from "../assets/images/UBATLogo.jpg";
import { useLanguage } from "../config/LanguageContext";

const Navbar = () => {
  const { switchLanguage, language } = useLanguage();
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();


 const handleSearchSubmit = (e) => {
  e.preventDefault();
  if (searchText.trim()) {
    navigate(`/?search=${encodeURIComponent(searchText.trim().toLowerCase())}`);
    setShowSearch(false);
    setSearchText("");
  }
};



  const socialLinks = [
    { icon: "bi-twitter-x", url: "https://twitter.com" },
    { icon: "bi-facebook", url: "https://facebook.com" },
    { icon: "bi-instagram", url: "https://instagram.com" },
    { icon: "bi-linkedin", url: "https://linkedin.com" },
  ];

  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  const renderDropdown = (title, links, closeMenu) => (
    <li className="nav-item">
      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">{title}</a>
      <div className="dropdown-menu custom-dropdown p-3">
        <div className="row">
          {links.map((link, index) => (
            <div className="col-md-4" key={index}>
              <Link to={link.to} onClick={closeMenu} >{link.text}</Link>
              <p>{link.description}</p>
            </div>
          ))}
        </div>
      </div>
    </li>
  );


  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg top-nav">
        <div className="container-fluid top-navbar d-flex flex-wrap align-items-center justify-content-between py-2">
          <div className="d-flex">
            <a href="#" className="text-white mx-2 " onClick={() => switchLanguage("en")}>
              <i className="bi bi-translate "></i>  English
            </a>
            <a href="#" className="text-white mx-2" onClick={() => switchLanguage("ta")}>
              <i className="bi bi-translate"></i> தமிழ்
            </a>
          </div>
          {/* Contact Info and Social Icons */}
          <div className="d-flex align-items-center flex-wrap">
            <a href="#" className="text-white me-2"><i className="bi bi-telephone"></i> +9472 2251277  &nbsp;
              <span className="text-white mx-1 d-none d-md-inline">|</span></a>

            <a href="mailto:cist@ahlulhadith.in" className="text-white me-2" target="_blank" rel="noopener noreferrer">✉ cist@ahlulhadith.in</a>

            {/* Social Icons */}
            <div className="d-flex mt-2 mt-md-0">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-white mx-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bi ${link.icon}`}></i>

                </a>
              ))}
              {!showSearch && (
                <i
                  className="bi bi-search text-white ms-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowSearch(true)}
                ></i>

              )}

            </div>
            <div className="search-container">


              {showSearch && (
                <form onSubmit={handleSearchSubmit} className="d-flex align-items-center position-relative">
                  <input
                    type="text"
                    className="search rounded-pill"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Eg: ஸஹாபா, aqeedah"
                  />
                  <button type="submit" className="btn position-absolute end-0 me-2 p-0">
                    <i className="bi bi-search text-black"></i>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg sticky-top main-navbar ${language === "ta" ? "tamil-font" : ""}`} id={`navbar1`}>
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="UBAT" height="55" />
          </Link>

          {/* Mobile Toggle Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-center">
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={closeMenu}

              >
                {language === "en" ? "Home" : "ஹோம்"}
              </NavLink>


              {/* Dropdown Menus */}
              {
                renderDropdown(language === "en" ? "Khutbah" : "குத்பா", [
                  {
                    to: "/category/jumuah",
                    text: language === "en" ? "Jumuah" : "ஜுமுஆ",
                    description: language === "en"
                      ? "Listen to the Friday Khutbah and gain knowledge."
                      : "ஜுமுஆ குத்பா கேட்கவும் அறிவைப் பெறுங்கள்."
                  },
                  {
                    to: "/category/nikkah",
                    text: language === "en" ? "Nikkah" : "நிக்காஹ்",
                    description: language === "en"
                      ? "Learn about the Islamic wedding ceremony and its significance."
                      : "இஸ்லாமிய மணமுறையும் அதன் முக்கியத்துவமும் பற்றி கற்றுக்கொள்ளுங்கள்."
                  },
                  {
                    to: "/category/funeral",
                    text: language === "en" ? "Funeral" : "ஜனாஸா",
                    description: language === "en"
                      ? "Understand the Islamic rites and practices for funerals."
                      : "இஸ்லாமிய இறுதி உரிமைகளையும் பழக்கவழக்கங்களையும் புரிந்துகொள்ளுங்கள்."
                  },
                  {
                    to: "/category/eid",
                    text: language === "en" ? "Eid" : "ஈத்",
                    description: language === "en"
                      ? "Attend insightful Islamic lectures on various topics."
                      : "பல்வேறு தலைப்புகளில் முக்கியமான இஸ்லாமிய சொற்பொழிவுகளைக் கேளுங்கள்."
                  }
                ], closeMenu)
              }



              {renderDropdown(language === "en" ? "Kithab" : "கிதாப் ", [
                {
                  to: "/category/aqeedah",
                  text: language === "en" ? "Aqeedah" : "அகீதா",  // English / Tamil
                  description: language === "en" ? "Learn about the core beliefs and principles of Islamic faith." : "இஸ்லாமிய நம்பிக்கைகள் மற்றும் கொள்கைகள் பற்றி அறிக."  // English / Tamil
                },
                {
                  to: "/category/manhaj",
                  text: language === "en" ? "Manhaj" : "மன்ஹஜ்",  // English / Tamil
                  description: language === "en" ? "Understand the correct methodology in practicing and preaching Islam." : "இஸ்லாம் பயிற்சி மற்றும் வினை செய்யும் முறையை புரிந்துகொள்ளவும்."  // English / Tamil
                },
                {
                  to: "/category/fiqh",
                  text: language === "en" ? "Fiqh" : "ஃபிக்ஹ்",  // English / Tamil
                  description: language === "en" ? "Explore Islamic jurisprudence and its application in daily life." : "இஸ்லாமிய சட்டம் மற்றும் அதன் தினசரி வாழ்க்கையில் பயன்பாடு பற்றி ஆராய்க."  // English / Tamil
                },
                {
                  to: "/category/hadith",
                  text: language === "en" ? "Hadith" : "ஹதீஸ்",  // English / Tamil
                  description: language === "en" ? "Study the sayings and actions of Prophet Muhammad (ﷺ)." : "பிரபரத் முகம்மது (ﷺ) அவர்களின் சொல்லுகளையும் செயல்களையும் படியுங்கள்."  // English / Tamil
                },
                {
                  to: "/category/tafseer",
                  text: language === "en" ? "Tafseer" : "தஃப்சீர்",  // English / Tamil
                  description: language === "en" ? "Gain insights into the interpretation and meaning of the Quran." : "குரான் பொருளை மற்றும் அதன் விளக்கம் பற்றி பூரணமாக புரிந்துகொள்ளுங்கள்."  // English / Tamil
                }
              ], closeMenu)}


              {renderDropdown(language === "en" ? "Ibadah" : "இபாதா ", [
                {
                  to: "/category/prayer",
                  text: language === "en" ? "Prayer" : "தொழுகை",
                  description: language === "en"
                    ? "Learn the correct way to perform daily prayers (Salah)."
                    : "தினசரி தொழுகைகளை சரியான முறையில் படிக்க கற்றுக்கொள்ளுங்கள்."
                },
                {
                  to: "/category/zakat",
                  text: language === "en" ? "Zakat" : "ஜகாத்",
                  description: language === "en"
                    ? "Understand the importance of charity and how to calculate Zakat."
                    : "தானத்தின் முக்கியத்துவம் மற்றும் சகாதாவை கணக்கிடும் முறை பற்றி அறிக."
                },
                {
                  to: "/category/hajj",
                  text: language === "en" ? "Hajj" : "ஹஜ்",
                  description: language === "en"
                    ? "Discover the rituals and significance of the pilgrimage to Mecca."
                    : "மக்கா ஹஜ் யாத்திரையின் சடங்குகள் மற்றும் முக்கியத்துவத்தை அறியுங்கள்."
                },
                {
                  to: "/category/umrah",
                  text: language === "en" ? "Umrah" : "உம்ரா",
                  description: language === "en"
                    ? "Learn about the spiritual journey of Umrah and its practices."
                    : "உம்ரா யாத்திரையின் ஆன்மீக பயணம் மற்றும் நடைமுறைகளை அறிக."
                },
                {
                  to: "/category/fasting",
                  text: language === "en" ? "Fasting" : "நோன்பு",
                  description: language === "en"
                    ? "Explore the rulings and virtues of fasting in Ramadan and beyond."
                    : "ரமலான் மற்றும் பிற நாட்களில் உண்ணாவிரதத்தின் விதிகள் மற்றும் فضல்களைப் பற்றி அறிக."
                },
                {
                  to: "/category/dhikr",
                  text: language === "en" ? "Dhikr" : "திக்ர்",
                  description: language === "en"
                    ? "Enhance your remembrance of Allah through Dhikr and supplications."
                    : "திக்ர் மற்றும் துவாவுகள் மூலம் அல்லாஹ்வை நினைப்பதை மேம்படுத்துங்கள்."
                }
              ], closeMenu)}


              {renderDropdown(language === "en" ? "Purification" : "ப்யூரிபிகேஷன்", [
                {
                  to: "/category/heart",
                  text: language === "en" ? "Heart" : "ஹார்ட்",
                  description: language === "en"
                    ? "Cleanse your heart from impurities through sincere worship."
                    : "மனமார்ந்த இறைபூஜையின் மூலம் இதயத்தை அகழ்வுகளிலிருந்து தூய்மைப்படுத்துங்கள்."
                },
                {
                  to: "/category/taubah",
                  text: language === "en" ? "Taubah" : "தவ்பா",
                  description: language === "en"
                    ? "Learn the correct way of seeking repentance and returning to Allah."
                    : "தவப்பெயர்ச்சி கேட்டு அல்லாஹ்விடம் திரும்பும் முறையை அறிக."
                },
                {
                  to: "/category/taqwah",
                  text: language === "en" ? "Taqwah" : "தக்வா",
                  description: language === "en"
                    ? "Strengthen your mindfulness and awareness of Allah in all actions."
                    : "அல்லாஹ்வின் பயத்தை மற்றும் விழிப்புணர்வை உங்கள் செயல்களில் வலுப்படுத்துங்கள்."
                },
                {
                  to: "/category/istighfar",
                  text: language === "en" ? "Istighfar" : "இஸ்திக்ஃபார்",
                  description: language === "en"
                    ? "Understand the importance of seeking forgiveness in daily life."
                    : "தினசரி வாழ்வில் மன்னிப்பு கேட்பதன் முக்கியத்துவத்தை உணருங்கள்."
                }
              ], closeMenu)}


              {renderDropdown(language === "en" ? "Family & Society" : "குடும்பம் & சமூகம்", [
                {
                  to: "/category/men",
                  text: language === "en" ? "Men" : "ஆண்கள்",
                  description: language === "en"
                    ? "Explore the roles, responsibilities, and virtues of men in Islam."
                    : "இஸ்லாமில் ஆண்களின் பொறுப்புகள் மற்றும் நற்குணங்களை ஆராயுங்கள்."
                },
                {
                  to: "/category/women",
                  text: language === "en" ? "Women" : "பெண்கள்",
                  description: language === "en"
                    ? "Learn about the status, rights, and duties of women in Islam."
                    : "இஸ்லாமில் பெண்களின் நிலை, உரிமைகள் மற்றும் கடமைகளை அறிக."
                },
                {
                  to: "/category/children",
                  text: language === "en" ? "Children" : "குழந்தைகள்",
                  description: language === "en"
                    ? "Understand Islamic teachings on raising righteous children."
                    : "நல்லொழுக்கமான குழந்தைகளை வளர்க்கும் இஸ்லாமிய வழிகாட்டுதல்களை புரிந்துகொள்ளுங்கள்."
                },
                {
                  to: "/category/family",
                  text: language === "en" ? "Family" : "குடும்பம்",
                  description: language === "en"
                    ? "Discover ways to maintain harmony and strong family ties."
                    : "சமரசத்தையும் உறுதியான குடும்ப பிணைப்புகளையும் நிலைநிறுத்தும் வழிகளை தெரிந்துகொள்ளுங்கள்."
                },
                {
                  to: "/category/society",
                  text: language === "en" ? "Society" : "சமூகம்",
                  description: language === "en"
                    ? "Contribute positively to society through Islamic values."
                    : "இஸ்லாமிய மதிப்பீடுகள் மூலம் சமூகத்தில் நேர்மறையான பங்களிப்பை வழங்குங்கள்."
                },
                {
                  to: "/category/political-talk",
                  text: language === "en" ? "Political Talk" : "அரசியல்",
                  description: language === "en"
                    ? "Engage in discussions on Islamic perspectives on politics and governance."
                    : "அரசியல் மற்றும் நிர்வாகம் குறித்த இஸ்லாமிய அணுகுமுறைகளைப் பற்றி விவாதிக்கவும்."
                }
              ], closeMenu)}


              {renderDropdown(language === "en" ? "Biography" : "பயோகிராபி", [
                {
                  to: "/category/prophet",
                  text: language === "en" ? "Prophet" : "ப்ராபட்ஸ்",
                  description: language === "en"
                    ? "Study the life, teachings, and character of Prophet Muhammad (ﷺ)."
                    : "நபி முகம்மது (ﷺ) அவர்களின் வாழ்க்கை, போதனைகள் மற்றும் நற்குணங்களை அறிக."
                },
                {
                  to: "/category/sahabha",
                  text: language === "en" ? "Sahabha" : "சஹாபா",
                  description: language === "en"
                    ? "Learn about the companions of the Prophet and their contributions to Islam."
                    : "நபி அவர்களின் துணைவர்கள் மற்றும் அவர்கள் இஸ்லாத்துக்காக செய்த பங்களிப்புகளை அறிக."
                },
                {
                  to: "/category/ulama",
                  text: language === "en" ? "Ulama" : "உலமா",
                  description: language === "en"
                    ? "Explore the lives and legacies of Islamic scholars and leaders."
                    : "இஸ்லாமிய அறிவாளிகள் மற்றும் தலைவர்களின் வாழ்க்கை வரலாறுகளையும் பங்களிப்புகளையும் அறிக."
                }
              ], closeMenu)}


              <li className="nav-item"><NavLink
                to="/about"
                end
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeMenu}
              >
                {language === "en" ? "About" : "அபௌட்"}
              </NavLink>
              </li>
              <li className="nav-item"><NavLink
                to="/contact"
                end
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeMenu}
              >
                {language === "en" ? "Contact" : "தொடர்பு"}
              </NavLink>
              </li>
              <li className="nav-item ms-3 mt-1">
                <Link className="btn btn-primary donate-btn" to="/donation" onClick={closeMenu}>   {language === "en" ? "Donate" : "டொனேட்"} </Link>
              </li>



            </ul>

          </div>
        </div>
      </nav>



    </>
  );
};
export default Navbar;
