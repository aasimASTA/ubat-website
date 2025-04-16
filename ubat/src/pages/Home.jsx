import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS works
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/style.css" // Import custom styles
import Logo from "../assets/images/UBATLogo.jpg";

// Import images correctly
import ShirkENG from "../assets/images/What_is_Shirk_ENG.jpg";
import ItiqadofSufyanbinUyaynah from "../assets/images/I’tiqad_of_Sufyan_bin_‘Uyaynah_-_ENG.jpg";
import DefendSunnah from "../assets/images/Defend_Sunnah_And_The__Callers_Of_Sunnah_2_ENG.jpg";
import First15DaysRamadan from "../assets/images/the-first-15-days-of-ramadan-750x430.webp";

import SurahRecite from "../assets/images/which-surahs-did-the-prophet-muhammad-recite-in-prayers-750x430.webp";
import MasjidNabawi from "../assets/images/masjid-an-nabawi-750x430.webp";
import MessengerWear from "../assets/images/what-did-our-prophet-used-to-wear-750x430.webp";
import bismilla from "../assets/images/bismilla.webp"
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  // State for image popup
  const [popupImage, setPopupImage] = useState(null);


  useEffect(() => {
    document.title = "Publications|Uthman Ibn Affan Library";
  }, []);

  useEffect(() => {
    if (popupImage) {
      document.body.classList.add("popup-active");
    } else {
      document.body.classList.remove("popup-active");
    }
  }, [popupImage]);


  // Function to open image popup
  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  // Function to close image popup
  const closePopup = () => {
    setPopupImage(null);
  };

  // Function to share image
  const shareImage = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this image",
          url: popupImage,
        })
        .catch((err) => console.log("Sharing failed", err));
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  // Image carousel list
  const carouselImages = [ShirkENG, ItiqadofSufyanbinUyaynah, DefendSunnah];

  return (
    <>
      <div className="home_banner">
        <div className="banner-img-content">
          <img src={bismilla} alt="bismillah" width='20%' />
          <h5>
            Allah rest all victim souls in peace. Deepest sorry for families
            of victims. All in solidarity demolish terrorist. May Allah make
            it easy for all authorities. Ameen - Yahya Silmy (@saylanis)
          </h5>

        </div>
      </div>
      <div className="Aboutsection">
        <Container>
          <Row className="pb-5">
            <Col md={6} sm={12} lg={5}>
              <div className="about-title w-100">
                <h2>
                  Makthaba Uthmaan <br />
                  Ibn Affan

                </h2>
                <p> (Uthmaan Ibn Affan Library)</p>
                <button className="read-morebtn">Read More</button>
              </div>

            </Col>
            <Col md={6} sm={12} lg={7}>
              <div className="about-contentinner">
                <h1 className="fw-bold">السلام عليكم ورحمة الله</h1>
                <p>Makthaba Uthmaan Ibn Affan (Uthmaan Ibn Affan Library) was established to facilitate the learning, teaching, and spreading of the Ilm (Knowledge) of the Qur'an and the Sunnah, as understood and implemented by the Jamaa'ah of Sahabah (the Companions of the Prophet ﷺ).</p>
              </div>
            </Col>
          </Row>
        </Container>


        {/* Video and Image Carousel Section */}
        <section className="container section-image pt-5">
          <div className="row">
            {/* Video Carousel */}
            <div className="col-lg-7">
              <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <iframe
                      src="https://www.youtube.com/embed/MWASciGGwEk?si=zWs7dH-jMrKHFP88"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="carousel-item">
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

            {/* Image Carousel */}
            <div className="col-lg-5">
              <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {carouselImages.map((img, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                      <img src={img} alt={`Slide ${index + 1}`} onClick={() => openPopup(img)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Pillar of Islam Section */}
      <div className="pillar-bg">
        <div className="pillar-content">
          <h6>ESSENTIALS FOR MUSLIM</h6>
          <h2>Take the proper knowledge about 5<br /> pillars of Islam</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

          {/* 5 Pillars Icons */}
          <div className="pillars-container">
            <div className="pillar-item">
              <div className="pillar-icon"><i className="fas fa-hand-holding-heart"></i></div>
              <h4>Shahadah</h4>
              <p>(Faith)</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><i className="fas fa-mosque"></i></div>
              <h4>Salah</h4>
              <p>(Prayer)</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><i className="fas fa-utensils"></i></div>
              <h4>Sawm</h4>
              <p>(Fasting)</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><i className="fa-solid fa-sack-dollar"></i></div>
              <h4>Zakat</h4>
              <p>(Almsgiving)</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><i className="fas fa-kaaba"></i></div>
              <h4>Hajj</h4>
              <p>(Pilgrimage)</p>
            </div>
          </div>
        </div>
      </div>
      {/**latest news */}
      <Container className="my-5">
        <div className="d-flex align-items-center pb-4">
          <h2 className="text-purple me-3">Latest News</h2>
          <div className="flex-grow-1 line"></div>
        </div>
        <Row>
          {newsData.map((news, index) => (
            <Col md={3} key={index}>
              <Card className="border-0">
                <Card.Img variant="top" src={news.image} />
                <Card.Body className="bg-light">
                  <Card.Title className="fw-bold">{news.title}</Card.Title>
                  <Card.Text className="text-muted">
                  {news.date} 
                  </Card.Text>
                  <Card.Text>{news.description}</Card.Text>
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
            <div className="row g-4">
              {recentPosts.map((post, index) => (
                <div className="col-md-6" key={index}>
                  <div className="main-content h-100 d-flex flex-column">
                    <img src={post.image} className="post-img" alt={post.title} />
                    <h5 className="mt-2">{post.title}</h5>
                    <p><small>{post.date}</small></p>
                    <p className="flex-grow-1"><small>{post.description}</small></p>
                  </div>
                </div>
              ))}
            </div>

            {/* Popular Posts BELOW Recent Posts (Aligned in Two Columns) */}
            <div>

              <div className="row">

                {popularPosts.map((post, index) => (
                  <div className="col-md-6 mb-3" key={index}>
                    <div className=" list-group-item d-flex align-items-center border p-1 rounded  popular-post">
                      <img src={post.image} className="post-img" alt={post.title} />
                      <a href="#" className="ms-3">{post.title}<br /><small>{post.date}</small></a>
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
              {popularPosts.map((post, index) => (
                <li className="list-group-item d-flex align-items-center popular-post" key={index}>
                  <img src={post.image} className="post-img" alt={post.title} />
                  <a href="#" className="ms-3">{post.title}<br /><small>{post.date}</small></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      
<div className="donatebg">
  <Container>
  <h6>SUPPORT US</h6>
  <h2>We Need Your Help</h2>
  <p>The Weekend School of the Islamic Center of Allah is committed to
     providing quality Islamic Education according to the Quran.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
      luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
  <Button className="donatenow-btn">Donate Now</Button>
  </Container>
</div>

      {/* Footer */}
      <Footer />

      {/* Image Popup */}
      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <div className="popup-header">
              <button className="action-btn" onClick={shareImage}><i className="bi bi-share"></i></button>
              <a href={popupImage} download className="action-btn"><i className="bi bi-download"></i></a>
              <button className="close-btn" onClick={closePopup}><i className="bi bi-x-lg"></i></button>
            </div>
            <img src={popupImage} alt="Popup" />
          </div>
        </div>
      )}

    </>
  );
};

// Sample Data for Recent & Popular Posts
const newsData = [
  {
    title: "Which Surahs Did the Prophet Recite?",
    image: First15DaysRamadan, // Replace with actual image URL
    author: "rocken",
    date: "June 8, 2022",
    comments: "No Comments",
    description:
      "Taciti euismod sem convallis dis morbi arcu odio condimentum himenaeos mus...",
  },
  {
    title: 'Health Benefits of Saying “Alhamdulillah”',
    image: MasjidNabawi, // Replace with actual image URL
    
    date: "June 8, 2022",
    comments: "No Comments",
    description:
      "Taciti euismod sem convallis dis morbi arcu odio condimentum himenaeos mus...",
  },
  {
    title: "Islam and the Nature of the Universe",
    image: SurahRecite, // Replace with actual image URL
    author: "rocken",
    date: "June 8, 2022",
    comments: "No Comments",
    description:
      "Taciti euismod sem convallis dis morbi arcu odio condimentum himenaeos mus...",
  },
  {
    title: "Hajj: The Journey of Hearts",
    image: MessengerWear, // Replace with actual image URL
    author: "rocken",
    date: "June 8, 2022",
    comments: "No Comments",
    description:
      "Taciti euismod sem convallis dis morbi arcu odio condimentum himenaeos mus...",
  },
];

const recentPosts = [
  {
    image: First15DaysRamadan,
    title: "The First 15 Days of Ramadan",
    date: "Feb 17, 2025",
    description: "The honorable Hamza was sent to Sayful-Bahr...",
  },
  {
    image: MasjidNabawi,
    title: "The Principles of Prophetic Education",
    date: "Feb 10, 2025",
    description: "In education and teaching, communicative closeness.",
  },
];

const popularPosts = [
  {
    image: SurahRecite,
    title: "Which Surahs Did the Prophet Recite?",
    date: "Feb 17, 2025",
  },
  {
    image: MasjidNabawi,
    title: "The Construction of Masjid an-Nabawi",
    date: "Feb 17, 2025",
  },
  {
    image: MessengerWear,
    title: "What Did the Messenger Wear?",
    date: "Feb 17, 2025",
  },
  {
    image: SurahRecite,
    title: "Which Surahs Did the Prophet Recite?",
    date: "Feb 17, 2025",
  },
  {
    image: MasjidNabawi,
    title: "The Construction of Masjid an-Nabawi",
    date: "Feb 17, 2025",
  },
  {
    image: MessengerWear,
    title: "What Did the Messenger Wear?",
    date: "Feb 17, 2025",
  },
];
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
