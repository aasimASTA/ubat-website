import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";  // Import global styles
import Logo from "../assets/images/UBATLogo.jpg";
import { useLanguage } from "../config/LanguageContext";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { switchLanguage,language} = useLanguage();
 
  // const categories = [
  //   { name: "Belief (Aqīdah)", count: 515, slug: "belief-aqidah" },
  //   { name: "Tawheed", count: 42, slug: "tawheed" },
  //   { name: "Biographies", count: 68, slug: "biographies" },
  //   { name: "Books Taught", count: 653, slug: "books-taught" },
  //   { name: "40 Hadith By Abu Idrees", count: 1, slug: "40-hadith" },
  // ];

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

  const renderDropdown = (title,links, closeMenu) => (
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
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg sticky-top main-navbar ${language === "ta" ? "tamil-font" : ""}` }id={`navbar1`}>
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
              {renderDropdown(language === "en" ? "Khutbah" : "குத்பா", [
  {
    to: "/jumuah",
    text: language === "en" ? "Jumuah" : "ஜுமுஆ",
    description: language === "en" ? "Listen to the Friday Khutbah and gain knowledge." : "ஜுமுஆ குத்பா கேட்கவும் அறிவைப் பெறுங்கள்."
  },
  {
    to: "/nikkah",
    text: language === "en" ? "Nikkah" : "நிக்காஹ்",
    description: language === "en" ? "Learn about the Islamic wedding ceremony and its significance." : "இஸ்லாமிய மணமுறையும் அதன் முக்கியத்துவமும் பற்றி கற்றுக்கொள்ளுங்கள்."
  },
  {
    to: "/funeral",
    text: language === "en" ? "Funeral" : "ஜனாஸா",
    description: language === "en" ? "Understand the Islamic rites and practices for funerals." : "இஸ்லாமிய இறுதி உரிமைகளையும் பழக்கவழக்கங்களையும் புரிந்துகொள்ளுங்கள்."
  },
  {
    to: "/public-lecture",
    text: language === "en" ? "Eid" : "ஈத்  ",
    description: language === "en" ? "Attend insightful Islamic lectures on various topics." : "பல்வேறு தலைப்புகளில் முக்கியமான இஸ்லாமிய சொற்பொழிவுகளைக் கேளுங்கள்."
  }
], closeMenu)}


{renderDropdown(language === "en" ? "Kithab" : "கிதாப் ", [
  {
    to: "/aqeedah",
    text: language === "en" ? "Aqeedah" : "அகீதா",  // English / Tamil
    description: language === "en" ? "Learn about the core beliefs and principles of Islamic faith." : "இஸ்லாமிய நம்பிக்கைகள் மற்றும் கொள்கைகள் பற்றி அறிக."  // English / Tamil
  },
  {
    to: "/manhaj",
    text: language === "en" ? "Manhaj" : "மன்ஹாஜ்",  // English / Tamil
    description: language === "en" ? "Understand the correct methodology in practicing and preaching Islam." : "இஸ்லாம் பயிற்சி மற்றும் வினை செய்யும் முறையை புரிந்துகொள்ளவும்."  // English / Tamil
  },
  {
    to: "/fiqh",
    text: language === "en" ? "Fiqh" : "ஃபிக்ஹ்",  // English / Tamil
    description: language === "en" ? "Explore Islamic jurisprudence and its application in daily life." : "இஸ்லாமிய சட்டம் மற்றும் அதன் தினசரி வாழ்க்கையில் பயன்பாடு பற்றி ஆராய்க."  // English / Tamil
  },
  {
    to: "/hadith",
    text: language === "en" ? "Hadith" : "ஹதீஸ்",  // English / Tamil
    description: language === "en" ? "Study the sayings and actions of Prophet Muhammad (ﷺ)." : "பிரபரத் முகம்மது (ﷺ) அவர்களின் சொல்லுகளையும் செயல்களையும் படியுங்கள்."  // English / Tamil
  },
  {
    to: "/tafseer",
    text: language === "en" ? "Tafseer" : "தஃப்சீர்",  // English / Tamil
    description: language === "en" ? "Gain insights into the interpretation and meaning of the Quran." : "குரான் பொருளை மற்றும் அதன் விளக்கம் பற்றி பூரணமாக புரிந்துகொள்ளுங்கள்."  // English / Tamil
  }
], closeMenu)}


{renderDropdown( language === "en" ? "Ibadah" : "இபாதா ", [
  {
    to: "/prayer",
    text: language === "en" ? "Prayer" : "தொழுகை",
    description: language === "en"
      ? "Learn the correct way to perform daily prayers (Salah)."
      : "தினசரி தொழுகைகளை சரியான முறையில் படிக்க கற்றுக்கொள்ளுங்கள்."
  },
  {
    to: "/zakat",
    text: language === "en" ? "Zakat" : "ஜகாத்",
    description: language === "en"
      ? "Understand the importance of charity and how to calculate Zakat."
      : "தானத்தின் முக்கியத்துவம் மற்றும் சகாதாவை கணக்கிடும் முறை பற்றி அறிக."
  },
  {
    to: "/hajj",
    text: language === "en" ? "Hajj" : "ஹஜ்",
    description: language === "en"
      ? "Discover the rituals and significance of the pilgrimage to Mecca."
      : "மக்கா ஹஜ் யாத்திரையின் சடங்குகள் மற்றும் முக்கியத்துவத்தை அறியுங்கள்."
  },
  {
    to: "/umrah",
    text: language === "en" ? "Umrah" : "உம்ரா",
    description: language === "en"
      ? "Learn about the spiritual journey of Umrah and its practices."
      : "உம்ரா யாத்திரையின் ஆன்மீக பயணம் மற்றும் நடைமுறைகளை அறிக."
  },
  {
    to: "/fasting",
    text: language === "en" ? "Fasting" : "நோன்பு",
    description: language === "en"
      ? "Explore the rulings and virtues of fasting in Ramadan and beyond."
      : "ரமலான் மற்றும் பிற நாட்களில் உண்ணாவிரதத்தின் விதிகள் மற்றும் فضல்களைப் பற்றி அறிக."
  },
  {
    to: "/dhikr",
    text: language === "en" ? "Dhikr" : "திக்ர்",
    description: language === "en"
      ? "Enhance your remembrance of Allah through Dhikr and supplications."
      : "திக்ர் மற்றும் துவாவுகள் மூலம் அல்லாஹ்வை நினைப்பதை மேம்படுத்துங்கள்."
  }
], closeMenu)}


{renderDropdown(language === "en" ? "Purification" : "ப்யூரிபிகேஷன்", [
  {
    to: "/heart",
    text: language === "en" ? "Heart" : "ஹார்ட்",
    description: language === "en"
      ? "Cleanse your heart from impurities through sincere worship."
      : "மனமார்ந்த இறைபூஜையின் மூலம் இதயத்தை அகழ்வுகளிலிருந்து தூய்மைப்படுத்துங்கள்."
  },
  {
    to: "/taubah",
    text: language === "en" ? "Taubah" : "தவ்பா",
    description: language === "en"
      ? "Learn the correct way of seeking repentance and returning to Allah."
      : "தவப்பெயர்ச்சி கேட்டு அல்லாஹ்விடம் திரும்பும் முறையை அறிக."
  },
  {
    to: "/taqwah",
    text: language === "en" ? "Taqwah" : "தக்வா",
    description: language === "en"
      ? "Strengthen your mindfulness and awareness of Allah in all actions."
      : "அல்லாஹ்வின் பயத்தை மற்றும் விழிப்புணர்வை உங்கள் செயல்களில் வலுப்படுத்துங்கள்."
  },
  {
    to: "/istighfar",
    text: language === "en" ? "Istighfar" : "இஸ்திக்ஃபார்",
    description: language === "en"
      ? "Understand the importance of seeking forgiveness in daily life."
      : "தினசரி வாழ்வில் மன்னிப்பு கேட்பதன் முக்கியத்துவத்தை உணருங்கள்."
  }
], closeMenu)}


{renderDropdown(language === "en" ? "Family & Society" : "குடும்பம் & சமூகம்", [
  {
    to: "/men",
    text: language === "en" ? "Men" : "ஆண்கள்",
    description: language === "en"
      ? "Explore the roles, responsibilities, and virtues of men in Islam."
      : "இஸ்லாமில் ஆண்களின் பொறுப்புகள் மற்றும் நற்குணங்களை ஆராயுங்கள்."
  },
  {
    to: "/women",
    text: language === "en" ? "Women" : "பெண்கள்",
    description: language === "en"
      ? "Learn about the status, rights, and duties of women in Islam."
      : "இஸ்லாமில் பெண்களின் நிலை, உரிமைகள் மற்றும் கடமைகளை அறிக."
  },
  {
    to: "/children",
    text: language === "en" ? "Children" : "குழந்தைகள்",
    description: language === "en"
      ? "Understand Islamic teachings on raising righteous children."
      : "நல்லொழுக்கமான குழந்தைகளை வளர்க்கும் இஸ்லாமிய வழிகாட்டுதல்களை புரிந்துகொள்ளுங்கள்."
  },
  {
    to: "/family",
    text: language === "en" ? "Family" : "குடும்பம்",
    description: language === "en"
      ? "Discover ways to maintain harmony and strong family ties."
      : "சமரசத்தையும் உறுதியான குடும்ப பிணைப்புகளையும் நிலைநிறுத்தும் வழிகளை தெரிந்துகொள்ளுங்கள்."
  },
  {
    to: "/society",
    text: language === "en" ? "Society" : "சமூகம்",
    description: language === "en"
      ? "Contribute positively to society through Islamic values."
      : "இஸ்லாமிய மதிப்பீடுகள் மூலம் சமூகத்தில் நேர்மறையான பங்களிப்பை வழங்குங்கள்."
  },
  {
    to: "/political-talk",
    text: language === "en" ? "Political Talk" : "அரசியல்",
    description: language === "en"
      ? "Engage in discussions on Islamic perspectives on politics and governance."
      : "அரசியல் மற்றும் நிர்வாகம் குறித்த இஸ்லாமிய அணுகுமுறைகளைப் பற்றி விவாதிக்கவும்."
  }
], closeMenu)}


{renderDropdown( language === "en" ? "Biography" : "பயோகிராபி", [
  {
    to: "/prophet",
    text: language === "en" ? "Prophet" : "ப்ராபட்ஸ்",
    description: language === "en"
      ? "Study the life, teachings, and character of Prophet Muhammad (ﷺ)."
      : "நபி முகம்மது (ﷺ) அவர்களின் வாழ்க்கை, போதனைகள் மற்றும் நற்குணங்களை அறிக."
  },
  {
    to: "/sahabha",
    text: language === "en" ? "Sahabha" : "சஹாபா",
    description: language === "en"
      ? "Learn about the companions of the Prophet and their contributions to Islam."
      : "நபி அவர்களின் துணைவர்கள் மற்றும் அவர்கள் இஸ்லாத்துக்காக செய்த பங்களிப்புகளை அறிக."
  },
  {
    to: "/ulama",
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
  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}onClick={closeMenu}
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

// {/* <div className="search-bar-container py-3 bg-light shadow-sm sticky-top">
//   <div className="container">
//     <div className="row g-2 justify-content-center">
//       <div className="col-12 col-md-5">
//         <div className="position-relative">
//           <input
//             type="text"
//             className="form-control rounded-pill pe-5"
//             placeholder="Eg: ஸஹாபா, aqeedha"
//           />
//           <i
//             className="bi bi-search position-absolute text-muted"
//             style={{
//               top: '50%',
//               right: '15px',
//               transform: 'translateY(-50%)',
//               cursor: 'pointer',
//             }}
//           ></i>
//         </div>
//       </div>
//       <div className="col-12 col-md-4">
//         <select className="form-select rounded-pill" defaultValue="">
//           <option value="" disabled>Select Category</option>
//           {categories.map((cat, index) => (
//             <option key={index} value={cat.slug}>
//               {cat.name} ({cat.count})
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   </div>
// </div> */}


      // {/* <div className="search-bar-container py-3 bg-light shadow-sm sticky-top">
      //   <div className="container">
      //     <div className="row justify-content-center">
      //       <div className="col-12 col-md-8 position-relative">
      //         <input
      //           type="text"
      //           className="form-control rounded-pill ps-4 pe-5"
      //           placeholder="Eg: ஸஹாபா, aqeedha"
      //         />
      //         <i
      //           className="bi bi-search position-absolute text-muted"
      //           style={{
      //             top: '50%',
      //             right: '25px',
      //             transform: 'translateY(-50%)',
      //             cursor: 'pointer',
      //             fontSize: '1.25rem',
      //           }}
      //         ></i>
      //       </div>
      //     </div>
      //   </div>
      // </div> */}
// function renderDropdown(title, links ,closeMenu) {
//   return (
//     <li className="nav-item">
//       <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">{title}</a>
//       <div className="dropdown-menu custom-dropdown p-3">
//         <div className="row">
//           {links.map((link, index) => (
//             <div className="col-md-4" key={index}>
//               <Link to={link.to} onClick={closeMenu} >{link.text}</Link>
//               <p>{link.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </li>
//   );
// }



