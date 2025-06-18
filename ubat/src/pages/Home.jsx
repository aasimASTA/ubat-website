import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLanguage } from "../config/LanguageContext";
import { useLocation,useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import {
  collection, query, orderBy, limit, getDocs
} from "firebase/firestore";

import audioThumb from "../assets/images/audiothumb.jpg";
import textThumb from "../assets/images/text-thumb.png";
import bismilla from "../assets/images/bismilla.webp";
import Logo from "../assets/images/UBATLogo.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/style.css";


 const renderTextContent = (text) => (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
const Home = () => {

  // Toggle used to change Language 
  const navigate = useNavigate();
  const { language } = useLanguage();
  const lang = language === "ta" ? "tamil" : "english";
  const { search,key: locationKey} = useLocation();
  const searchQuery = new URLSearchParams(search).get("search")?.toLowerCase() || "";

  const [recentPosts, setRecentPosts] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [popularPost, setPopularPost] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupItems, setPopupItems] = useState([]);
  const [popupIndex, setPopupIndex] = useState(0);


const [visibleSearchResults, setVisibleSearchResults] = useState([]);
const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
  if (searchQuery) {
    const title =
      language === "ta"
        ? `"${searchQuery}" : Search Results | Uthman Ibn Affan Library`
        : `"${searchQuery}" : Search Results | Uthman Ibn Affan Library`;
    document.title = title;
  } else {
    document.title =
       "Publications | Uthman Ibn Affan Library";
  }
}, [searchQuery, language]);




  // Function to open image popup
useEffect(() => {
  const fetchPosts = async () => {
    try {
      const postsRef = collection(db, "apps", lang, "posts");
      const topPostsQuery = query(postsRef, orderBy("published", "desc"));
      const postsSnap = await getDocs(topPostsQuery);

      const postsWithFirstItem = await Promise.all(
        postsSnap.docs.map(async (doc) => {
          const post = { id: doc.id, ...doc.data() };
          const itemRef = collection(db, "apps", lang, "posts", doc.id, "items");
          const itemQuery = query(itemRef, orderBy("position"), limit(1));
          const itemSnap = await getDocs(itemQuery);
          const firstItem = itemSnap.docs[0]?.data();
          return { ...post, firstItem };
        })
      );

      if (searchQuery) {
  const lowerQuery = searchQuery.toLowerCase();

  const filtered = postsWithFirstItem.filter((post) => {
    const titleTa = post.title?.tamil?.toLowerCase() || "";
    const titleEn = post.title?.english?.toLowerCase() || "";
    const cat = post.category?.toLowerCase() || "";
    const tags = post.tags?.toLowerCase() || "";

    const isMatch =
      titleTa.includes(lowerQuery) ||
      titleEn.includes(lowerQuery) ||
      cat.includes(lowerQuery) ||
      tags.includes(lowerQuery);

    if (isMatch) {
      console.log("✅ Match Found:", {
        id: post.id,
        titleEn: post.title?.english,
        titleTa: post.title?.tamil,
        category: post.category,
        tags: post.tags,
      });
    }

    return isMatch;
  });

  console.log(`🔍 Total Matches for "${searchQuery}": ${filtered.length}`);

  setSearchResults(filtered);
  setVisibleSearchResults(filtered.slice(0, 10));
  setVisibleCount(10);
}
 else {
        // Regular load
        const imagesPosts = postsWithFirstItem.filter(p => p.category?.toLowerCase());
        // const audioTextPosts = postsWithFirstItem.filter(p => ["audios", "text"].includes(p.category?.toLowerCase()));
        setRecentPosts(imagesPosts.slice(0, 4));
        setNewsData(imagesPosts.slice(4, 8));
        setPopularPosts(imagesPosts.slice(0, 4));
        const shuffled = [...imagesPosts].sort(() => 0.5 - Math.random());
        setPopularPost(shuffled.slice(0, 4));
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  fetchPosts();
}, [language, searchQuery,locationKey]);

useEffect(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("search");

  if (!query && performance.getEntriesByType("navigation")[0]?.type === "reload") {
    // If page is reloaded and there’s no search query, reset to homepage
    navigate("/", { replace: true });
  }
}, []);



 const handleLoadMore = () => {
  const next = visibleCount + 10;
  setVisibleSearchResults(searchResults.slice(0, next));
  setVisibleCount(next);
};
  //  On post click — load full items for carousel
  const openPopup = async (postId) => {
    const itemsRef = collection(db, "apps", lang, "posts", postId, "items");
    const itemsSnap = await getDocs(itemsRef);
    const allItems = itemsSnap.docs.map((doc) => doc.data());

    setPopupItems(allItems);
    setPopupIndex(0);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);
  const nextItem = () => setPopupIndex((i) => (i + 1) % popupItems.length);
  const prevItem = () => setPopupIndex((i) => (i - 1 + popupItems.length) % popupItems.length);

  // render Date for posts published and thumbnail for each post
  const renderDate = (date) =>
    date
      ? new Date(
        typeof date === "object" && date.toDate
          ? date.toDate()
          : date
      ).toLocaleDateString()
      : "No Date";

  const getThumbnail = (item) => {
    if (!item) return "/default.jpg";
    const link = item.link || "";
    if (link.match(/\.(jpeg|jpg|png|webp|gif)$/i)) return link;
    if (link.includes(".mp3")) return audioThumb;
    if (link.includes(".mp4")) return "/video-thumbnail.jpg";
    if (item.text_content) return textThumb;
    return "/default.jpg";
  };



  return (
    <>
    {
      !searchQuery && (
        <>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className={`home_banner ${language === "ta" ? "tamil-font" : ""}`}>
              <div className="banner-img-content">
                <img src={bismilla} alt="bismillah" className="bismilla-img" />
                <h5>
                  {language === "en" ? (
                    <>
                      Allah rest all victim souls in peace. Deepest sorry for families
                      of victims. All in solidarity demolish terrorist. May Allah make
                      it easy for all authorities. Ameen - Yahya Silmy (@saylanis)
                    </>
                  ) : (
                    <>
                      பாதிக்கப்பட்ட அனைவரின் ஆன்மாக்களுக்கும் அல்லாஹ் சாந்தி அளிப்பானாக. பாதிக்கப்பட்டவர்களின் குடும்பங்களுக்கு ஆழ்ந்த இரங்கல்.
                      அனைவரும் ஒற்றுமையுடன் பயங்கரவாதியை வீழ்த்துவோம். அல்லாஹ் அனைத்து அதிகாரிகளுக்கும் இதை எளிதாக்குவானாக. ஆமீன் — யஹ்யா சில்மி (@saylanis)
                    </>
                  )}
                </h5>
              </div>
            </div>
          </div>


          <div className="carousel-item">
            <div className="home_banner">
              <div>
                <iframe
                  src="https://www.youtube.com/embed/MWASciGGwEk?si=zWs7dH-jMrKHFP88"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="home_banner">
              <div>
                <iframe
                  src="https://www.youtube.com/embed/JMOhYg6imoA?si=VdQmBV0xQ2jLTGIw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>


        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <div className="Aboutsection">
        <Container>
          <Row className="pb-5">
            <Col md={6} sm={12} lg={5}>
              <div className="about-title w-100">
                <h2>

                  {language === "en" ? (
                    <>
                      Makthaba Uthmaan <br />
                      Ibn Affan
                    </>
                  ) : (
                    <>
                      உஸ்மான் இப்னு அஃப்பான் நூலகம்
                    </>
                  )}
                </h2>
                <p> (Uthmaan Ibn Affan Library)</p>
                <button className="read-morebtn">Read More</button>
              </div>

            </Col>
            <Col md={6} sm={12} lg={7}>
              <div className="about-contentinner">
                <h1 className="fw-bold">السلام عليكم ورحمة الله</h1>
                <p>
                  {language === "en" ? (
                    <>
                      Makthaba Uthmaan Ibn Affan (Uthmaan Ibn Affan Library) was established to facilitate the
                      learning, teaching and spreading of the Ilm (Knowledge) of the Qur'an and the Sunnah,
                      as understood and implemented by the Jamaa'ah of Sahabah (the Companions of the Prophet ﷺ).
                    </>
                  ) : (
                    <>
                      உஸ்மான் இப்னு அஃப்பான் நூலகம் அல்-குர்ஆன், அஸ்-ஸுன்னாஹ்வை ஸஹாபா என்ற ஜமாஅத் எவ்வாறு
                      விளங்கி செயல்படுத்தினார்களோ அந்த கல்வியைக் கற்று செயல்படுத்தி மக்களுக்கு மத்தியில் பரவலாக்குவதற்காக நிறுவப்பட்டதாகும்.
                    </>
                  )}

                </p>
              </div>
            </Col>
          </Row>
        </Container>



      </div>
      {/* Pillar of Islam Section */}
      <div className="pillar-bg">
        <div className="pillar-content">
          <h6> {language === "en" ? "ESSENTIALS FOR MUSLIM" : "முஸ்லிம்களுக்கான அத்தியாவசியங்கள்"}</h6>
          <h2>
            {language === "en" ? (
              <>
                Take the proper knowledge about 5 <br />pillars of Islam
              </>
            ) : (
              <>
                இஸ்லாமின் 5 தூண்கள் பற்றி சரியான அறிவை பெறுங்கள்.
              </>
            )}</h2>
          <p>{language === "en" ? (
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </>
          ) : (
            <>
              லோரெம் இப்சம் டோலர் சிட் அமெட், கான்செக்டெட்யுர் அடிபிச்சிங் எலிட். உட் எலிட் டெல்லஸ்,
              லுக்டஸ் நேக் உல்லம்கார்பர் மெட்டிஸ், புல்வினார் டாபிபஸ் லியோ.
            </>
          )}</p>

          {/* 5 Pillars Icons */}
          <div className="pillars-container">
            <div className="pillar-item">
              <div className="pillar-icon"><i className="fas fa-hand-holding-heart"></i></div>
              <h4>{language === "en" ? "Shahadah" : "ஷஹாதா"}</h4>
              <p>{language === "en" ? "(Faith)" : "(நம்பிக்கை)"}</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><i className="fas fa-mosque"></i></div>
              <h4>{language === "en" ? "Salah" : "சலாஹ்"}</h4>
              <p>{language === "en" ? "(Prayer)" : "(தொழுகை)"}</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><i className="fas fa-utensils"></i></div>
              <h4>{language === "en" ? "Sawm" : "சவூம்"}</h4>
              <p>{language === "en" ? "(Fasting)" : "(நோன்பு)"}</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><i className="fa-solid fa-sack-dollar"></i></div>
              <h4>{language === "en" ? "Zakat" : "சகாத்"}</h4>
              <p>{language === "en" ? "(Almsgiving)" : "(தானம்)"}</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><i className="fas fa-kaaba"></i></div>
              <h4>{language === "en" ? "Hajj" : "ஹஜ்"}</h4>
              <p>{language === "en" ? "(Pilgrimage)" : "(புனித பயணம்)"}</p>
            </div>
          </div>
        </div>
      </div>

      <Container className="my-5">
        <div className="d-flex align-items-center pb-4">
          <h2 className="text-purple me-3">Latest News</h2>
          <div className="flex-grow-1 line"></div>
        </div>
        <Row>
          {newsData.map((post) => (
            <Col md={3} key={post.id} onClick={() => openPopup(post.id)} style={{ cursor: "pointer" }}>
              <Card className="border-0">
                <Card.Img variant="top" src={getThumbnail(post.firstItem)} />
                <Card.Body className="bg-light">
                  <Card.Title className="fw-bold">{post.title?.[language] || post.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {renderDate(post.published)}
                  </Card.Text>
              
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Recent Posts Section */}
      {/* Recent Posts and Popular Posts Section */}
      <div className="container mt-4 mb-5" id="recentPosts">
        <div className="row">
          {/* Recent Posts Section (Left) */}
          <div className="col-lg-8">
            <h3>Recent Posts</h3>
            <div className="row g-4 mt-2">
              {recentPosts.map((post) => (
                <div className="col-md-6" key={post.id} onClick={() => openPopup(post.id)} style={{ cursor: "pointer" }}>
                  <div className="main-content h-100 d-flex flex-column">
                    <img src={getThumbnail(post.firstItem)} className="post-img" alt={post.title} />
                    <h5 className="mt-2">{post.title?.[language] || post.title}</h5>
                    <p><small>{renderDate(post.published)}</small></p>

                  </div>
                </div>
              ))}
            </div>

            {/* Popular Posts BELOW Recent Posts (Aligned in Two Columns) */}
            <div>

              <div className="row">

                {popularPost.map((post) => (
                  <div className="col-md-6 mb-3" key={post.id} onClick={() => openPopup(post.id)} style={{ cursor: "pointer" }}>
                    <div className=" list-group-item d-flex align-items-center border p-1 rounded  popular-post">
                      <img src={getThumbnail(post.firstItem)} className="post-img" />
                      <a href="#" className="ms-3">{post.title?.[language] || post.title}<br /><small>{renderDate(post.published)}</small></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Popular Posts (Right) */}
          <div className="col-lg-4">
            <h3>Popular Posts</h3>
            <ul className="list-group">
              {popularPosts.map((post) => (
                <li className="list-group-item d-flex align-items-center popular-post" key={post.id} onClick={() => openPopup(post.id)} style={{ cursor: "pointer" }}>
                  <img src={getThumbnail(post.firstItem)} className="post-img" alt={post.title} />
                  <a href="#" className="ms-3">{post.title?.[language] || post.title}<br /> <small>{renderDate(post.published)}</small></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="donatebg">
        <Container>
          <h6>{language === "en" ? "SUPPORT US" : "எங்களை ஆதரிக்கவும்"}</h6>
          <h2>{language === "en" ? "We Need Your Help" : "உங்கள் உதவி தேவை"}</h2>
          <p>{language === "en" ? (
            <>
              The Weekend School of the Islamic Center of Allah is committed to
              providing quality Islamic Education according to the Quran.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </>
          ) : (
            <>
              அல்லாஹ்வின் இஸ்லாமிய மையம் நடத்தும் வார இறுதி பள்ளி,
              குர்ஆனின் வழிகாட்டுதல்படி தரமான இஸ்லாமிய கல்வியை வழங்க உறுதிபூண்டுள்ளது.
              லோரம் இப்சம் டோலர் சிட் அமெட், கான்செக்டெடர் அடிபிசிங் எலிட். யுட் எலிட் டெல்லுஸ்,
              லுக்டுஸ் நெக் உல்லாம்கார்பர் மாட்டிஸ், புல்வினார் டாபிபஸ் லியோ.
            </>
          )}</p>
          <a href="/donation"><Button className="donatenow-btn">Donate Now</Button></a>
        </Container>
      </div>
      <Footer />
        </>
      )
    }
      
      {/**latest news */}
      
{searchQuery && (
  <Container className="my-5">
    <h4>
      {searchResults.length} post{searchResults.length !== 1 && "s"} found on{" "}
      <strong>"{searchQuery}"</strong>
    </h4>
    <Row>
      {visibleSearchResults.map((post) => (
        <Col md={3} key={post.id} onClick={() => openPopup(post.id)} style={{ cursor: "pointer" }}>
          <Card className="border-0 mt-4">
            <Card.Img variant="top" src={getThumbnail(post.firstItem)} />
            <Card.Body className="bg-light">
              <Card.Title>{post.title?.[language] || post.title}</Card.Title>
              <Card.Text className="text-muted">{renderDate(post.published)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    {/* 🔘 Load More */}
    {visibleCount < searchResults.length && (
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    )}
  </Container>
)}


      {/* Footer */}
      

      {/* 🪟 Popup for All Items */}
         {showPopup && (
        <div className="popup-overlay d-flex justify-content-center align-items-center"
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", zIndex: 1050 }}>
          <div className="popup-content bg-white p-4 rounded position-relative"
            style={{ maxWidth: "700px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}>
            <div className="position-absolute top-0 end-0 m-3 d-flex gap-3">
  {/* 🔽 Download button */}
  {popupItems[popupIndex]?.link?.match(/\.(jpeg|jpg|png|webp|gif)$/i) && (
    <a
      href={popupItems[popupIndex].link}
      download
      title="Download Image"
    >
     <span style={{fontSize: "22px",color:"black"}} ><i className="bi bi-download"></i></span> 
    </a>
  )}

  {popupItems[popupIndex]?.text_content && (
    <a
      href={`data:text/plain;charset=utf-8,${encodeURIComponent(popupItems[popupIndex].text_content)}`}
      download={`${popupItems[popupIndex].title || "text-content"}.txt`}
      title="Download Text"
    >
      <span style={{fontSize: "22px",color:"black"}} ><i className="bi bi-download"></i></span> 
    </a>
  )}

  {/* ❌ Close button */}
  <button className="btn-close mt-1" style={{fontSize: "16px",color:"black"}} onClick={closePopup}></button>
</div>

            <div className="text-center">
              {popupItems[popupIndex] && (
                <>
                  <h5>{popupItems[popupIndex].title}</h5>
                  {popupItems[popupIndex].link?.includes(".mp3") ? (
                    <audio controls src={popupItems[popupIndex].link} style={{ width: "100%" }} />
                  ) : popupItems[popupIndex].link?.match(/\.(jpeg|jpg|png|webp|gif)$/i) ? (
                    <img src={popupItems[popupIndex].link} alt="" style={{ maxWidth: "100%" }} />
                  ) : popupItems[popupIndex].link?.includes(".mp4") ? (
                    <video controls width="100%">
                      <source src={popupItems[popupIndex].link} type="video/mp4" />
                    </video>
                  ) : popupItems[popupIndex].text_content ? (
                    renderTextContent(popupItems[popupIndex].text_content)
                  ) : (
                    <p>No valid content</p>
                  )}
                </>
              )}

              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-outline-secondary" onClick={prevItem}>← Prev</button>
                <button className="btn btn-outline-secondary" onClick={nextItem}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};


// Footer Component
const Footer = () => (
  <footer id="footer" className="footer mt-4">
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span>
              <img src={Logo} width="170px" height="250px" alt="UBAT Logo" />
            </span>
          </a>
          <div className="footer-contact pt-3">
            <p>
              Condemn Terrorist attacks in Sri Lanka Irrespective of religion or race, There is nothing but evil in extremism!
              Allah rest all victim souls in peace. Deepest sorry for families of victims. All in solidarity demolish terrorist.
              May Allah make it easy for all authorities. Ameen
              <br />— Yahya Silmy (@saylanis) April 22, 2019
            </p>
          </div>
          <div className="social-links d-flex mt-4">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="col-lg-4">
          <h4 className="text-left mt-3">Useful Links</h4>
          <div className="row">
            <div className="col-lg-6 footer-links">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Khutba</a></li>
                <li><a href="#">Kithab</a></li>
                <li><a href="#">Ibadah</a></li>
                <li><a href="#">Purification</a></li>
              </ul>
            </div>

            <div className="col-lg-6 footer-links">
              <ul>
                <li><a href="#">Family & Society</a></li>
                <li><a href="#">Biography</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-12 footer-links">
          <h4 className="mt-3">Contact Us</h4>
          <p>2/18, Ibrahim Street,</p>
          <p>Alandur,</p>
          <p>Chennai - 600016.</p>
          <p className="mt-3"><strong>Phone:</strong> <span>+94 722251277</span></p>
          <p>
            <a href="mailto:cist@ahlulhadith.in"><strong>Email:</strong> <span>cist@ahlulhadith.in</span></a>
          </p>
        </div>
      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong>UBAT </strong> <span>All Rights Reserved</span></p>
    </div>
  </footer>
);
export default Home;



