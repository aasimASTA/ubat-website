import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";  // Import global styles
import Logo from "../assets/images/UBATLogo.jpg";
import { useLanguage } from "../config/LanguageContext";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { switchLanguage } = useLanguage();

  const categories = [
    { name: "Belief (Aqīdah)", count: 515, slug: "belief-aqidah" },
    { name: "Tawheed", count: 42, slug: "tawheed" },
    { name: "Biographies", count: 68, slug: "biographies" },
    { name: "Books Taught", count: 653, slug: "books-taught" },
    { name: "40 Hadith By Abu Idrees", count: 1, slug: "40-hadith" },
  ];

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
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top main-navbar" id="navbar1">
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
              <li className="nav-item"><NavLink
  to="/"
  end
  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeMenu}
>
  Home
</NavLink>
</li>

              {/* Dropdown Menus */}
              {renderDropdown("Khutba", [
                { to: "/jumuah", text: "Jumuah", description: "Listen to the Friday Khutbah and gain knowledge." },
                { to: "/nikkah", text: "Nikkah", description: "Learn about the Islamic wedding ceremony and its significance." },
                { to: "/funeral", text: "Funeral", description: "Understand the Islamic rites and practices for funerals." },
                { to: "/public-lecture", text: "Public Lecture", description: "Attend insightful Islamic lectures on various topics." }
              ], closeMenu)}

              {renderDropdown("Kithab", [
                { to: "/aqeedah", text: "Aqeedah", description: "Learn about the core beliefs and principles of Islamic faith." },
                { to: "/manhaj", text: "Manhaj", description: "Understand the correct methodology in practicing and preaching Islam." },
                { to: "/fiqh", text: "Fiqh", description: "Explore Islamic jurisprudence and its application in daily life." },
                { to: "/hadith", text: "Hadith", description: "Study the sayings and actions of Prophet Muhammad (ﷺ)." },
                { to: "/tafseer", text: "Tafseer", description: "Gain insights into the interpretation and meaning of the Quran." }
              ], closeMenu)}

              {renderDropdown("Ibadah", [
                { to: "/prayer", text: "Prayer", description: "Learn the correct way to perform daily prayers (Salah)." },
                { to: "/zakat", text: "Zakat", description: "Understand the importance of charity and how to calculate Zakat." },
                { to: "/hajj", text: "Hajj", description: "Discover the rituals and significance of the pilgrimage to Mecca." },
                { to: "/umrah", text: "Umrah", description: "Learn about the spiritual journey of Umrah and its practices." },
                { to: "/fasting", text: "Fasting", description: "Explore the rulings and virtues of fasting in Ramadan and beyond." },
                { to: "/dhikr", text: "Dhikr", description: "Enhance your remembrance of Allah through Dhikr and supplications." }
              ], closeMenu)}

              {renderDropdown("Purification", [
                { to: "/heart", text: "Heart", description: "Cleanse your heart from impurities through sincere worship." },
                { to: "/taubah", text: "Taubah", description: "Learn the correct way of seeking repentance and returning to Allah." },
                { to: "/taqwah", text: "Taqwah", description: "Strengthen your mindfulness and awareness of Allah in all actions." },
                { to: "/istighfar", text: "Istighfar", description: "Understand the importance of seeking forgiveness in daily life." }
              ], closeMenu)}

              {renderDropdown("Family & Society", [
                { to: "/men", text: "Men", description: "Explore the roles, responsibilities, and virtues of men in Islam." },
                { to: "/women", text: "Women", description: "Learn about the status, rights, and duties of women in Islam." },
                { to: "/children", text: "Children", description: "Understand Islamic teachings on raising righteous children." },
                { to: "/family", text: "Family", description: "Discover ways to maintain harmony and strong family ties." },
                { to: "/society", text: "Society", description: "Contribute positively to society through Islamic values." },
                { to: "/political-talk", text: "Political Talk", description: "Engage in discussions on Islamic perspectives on politics and governance." }
              ], closeMenu)}

              {renderDropdown("Biography", [
                { to: "/prophet", text: "Prophet", description: "Study the life, teachings, and character of Prophet Muhammad (ﷺ)." },
                { to: "/sahabha", text: "Sahabha", description: "Learn about the companions of the Prophet and their contributions to Islam." },
                { to: "/ulama", text: "Ulama", description: "Explore the lives and legacies of Islamic scholars and leaders." }
              ], closeMenu)}

              <li className="nav-item"><NavLink
  to="/about"
  end
  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeMenu}
>
  About
</NavLink>
</li>
              <li className="nav-item"><NavLink
  to="/contact"
  end
  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}onClick={closeMenu}
>
  Contact
</NavLink>
</li>
              <li className="nav-item ms-3 mt-1">
                <Link className="btn btn-primary donate-btn" to="/donation" onClick={closeMenu}>Donate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="search-bar-container py-3 bg-light shadow-sm sticky-top">
  <div className="container">
    <div className="row g-2 justify-content-center">
      <div className="col-12 col-md-5">
        <div className="position-relative">
          <input
            type="text"
            className="form-control rounded-pill pe-5"
            placeholder="Eg: ஸஹாபா, aqeedha"
          />
          <i
            className="bi bi-search position-absolute text-muted"
            style={{
              top: '50%',
              right: '15px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          ></i>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <select className="form-select rounded-pill" defaultValue="">
          <option value="" disabled>Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat.slug}>
              {cat.name} ({cat.count})
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
</div> */}


      {/* <div className="search-bar-container py-3 bg-light shadow-sm sticky-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 position-relative">
              <input
                type="text"
                className="form-control rounded-pill ps-4 pe-5"
                placeholder="Eg: ஸஹாபா, aqeedha"
              />
              <i
                className="bi bi-search position-absolute text-muted"
                style={{
                  top: '50%',
                  right: '25px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '1.25rem',
                }}
              ></i>
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
};

function renderDropdown(title, links ,closeMenu) {
  return (
    <li className="nav-item">
      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">{title}</a>
      <div className="dropdown-menu custom-dropdown p-3">
        <div className="row">
          {links.map((link, index) => (
            <div className="col-md-4" key={index}>
              <Link to={link.to} onClick={closeMenu}>{link.text}</Link>
              <p>{link.description}</p>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

export default Navbar;
