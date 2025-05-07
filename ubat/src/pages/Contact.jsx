import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../assets/style.css"; // Import custom styles
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useLanguage } from "../config/LanguageContext";

const Contact = () => {
  
       // Toggle used to change Language
      
        const { language } = useLanguage();
  
  useEffect(() => {
    document.title = "Contact|Uthman Ibn Affan Library";
  }, []);
  return (
    <>
      <div className="contact_banner">
        <div className="contact-img-content">

          <h2>
            Contact us
          </h2>

        </div>
      </div>
      <div className="contactbg">
        <div className="background-overlay"></div>
        <div className="container pt-5">
          <div className="text-center">
            {/* <h2 className="contact-title">CONTACT</h2> */}
            <p className="contact-subtitle">
              மார்க்கத்தில் ஒரு விஷயத்தை அல்-குர்ஆன் அஸ்-ஸுன்னாஹ் ஸஹாபாக்களின் அடிச்சுவட்டில்
              நிரூபித்த பின்னால் எங்களுடைய உலமாக்கள் இதனை கூறவில்லை என்று அதனை ஏற்றுக்கொள்ளாமல்
              விட்டுவிடுவது தான் தக்லீத் ஆகும்
            </p>
          </div>

          <Row className="align-items-center text-dark mt-5">
            {/* Left Column: Contact Info */}
            <Col md={6} className="contact-info">
              <h2 className="fw-bold fst-italic" style={{color:'#007bff'}}>Get in touch</h2>
              <p>
                Let's do better design was born and I will give you a complete of the
                tem, and pund actual.
              </p>
              <p className="text-dark site">
              <i class="fa-solid fa-globe" style={{color:'#007bff'}}></i>&nbsp;&nbsp;
              ahlulhadith.in, tamilsalafi.edicypages.com
        </p>
              {/* <hr /> */}
              <p className="text-dark site">
                <i class="fa-solid fa-phone" style={{color:'#007bff'}}></i>&nbsp;&nbsp;
                +94 722251277 | +91 8098551277
              </p>
            
              <p className="text-dark site">
                <i class="fa-solid fa-envelope" style={{color:'#007bff'}}></i>&nbsp;&nbsp;
                cist@ahlulhadith.in</p>

              {/* Social Icons */}
              <p className="fst-italic">You can also connect us here...</p>
              <div className="social-icons">
                <span className="icon-circle"><i className="fa-brands fa-facebook-f"></i></span>
                <span className="icon-circle"><i className="fa-brands fa-twitter"></i></span>
                <span className="icon-circle"><i className="fa-brands fa-instagram"></i></span>
                <span className="icon-circle"><i className="fa-brands fa-google-plus-g"></i></span>
              </div>
            </Col>

            {/* Right Column: Google Map */}
            <Col md={5}>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.549926403096!2d80.2022368!3d13.000613399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526744dab725f9%3A0xe076d2441733c8ef!2s2%2C%20Ibrahim%20Street%2C%20Ramapuram%2C%20Alandur%2C%20Chennai%2C%20Tamil%20Nadu%20600016!5e0!3m2!1sen!2sin!4v1743069378831!5m2!1sen!2sin" 
            width="600" 
            height="350" 
            style={{border:'0'}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            </Col>
          </Row>
          <div class="row location-section mt-5 pb-5">
            <div class="col-md-6 mb-4 mb-md-0">
              <div class="location-box">
              <i class="fa-solid fa-location-dot" ></i>
                <h5>{language === "en" ?
                (<>
                  <b>Uthman Ibn Affan Library</b>
                </>) :
                 (<>
                 <b>உஸ்மான் இப்னு அஃப்பான் நூலகம்,</b>
                </>)}</h5>
                <p>
                {language === "en" ?
                (<>
                  2/18, Ibrahim Street, Alandur, Chennai - 600016
                </>) :
                 (<>
                 2/18, இப்ராஹீம் தெரு,ஆலந்தூர்,சென்னை - 600016.
                </>)}
                </p>
                <p><strong>{language === "en" ? "Phone:":"தொலைபேசி:"}</strong> +94 722251277</p>

                
              </div>
            </div>
            <div class="col-md-6 " >
              <div class="location-box">
              <i class="fa-solid fa-mosque" ></i>
                <h5>{language === "en" ?
                (<>
                 <b>Masjid Sunnathul Muhammadhiya</b>
                </>) :
                 (<>
                 <b>மஸ்ஜித் சுன்னத்துல் முஹம்மதியா,</b>
                </>)}</h5>
                <p>{language === "en" ?
                (<>
                  475, Thakkia Veedhi, Thaluvakode, Kochchikade
                </>) :
                 (<>
                 2/18, தக்கியா வீதி,தழுவகொட்டுவ,&nbsp; கொச்சிக்கடை
                </>)}
                </p>
                <p><strong>{language === "en" ? "Phone:":"தொலைபேசி:"}</strong>  +91 9962315876</p>
              </div>
            </div>
          </div>

          {/* <div className="row justify-content-center mt-4">
        <ContactCard icon="bi-telephone" title="Call Us" text="+94 722251277 | +91 8098551277" />
        <ContactCard icon="bi-envelope" title="Email Us" text="cist@ahlulhadith.in" link="mailto:cist@ahlulhadith.in" />
        <ContactCard icon="bi-globe" title="Our Website">
          <p>
            <a href="https://ahlulhadith.in" target="_blank" rel="noopener noreferrer">
              ahlulhadith.in
            </a>
            <br />
            <a href="https://tamilsalafi.edicypages.com" target="_blank" rel="noopener noreferrer">
              tamilsalafi.edicypages.com
            </a>
          </p>
        </ContactCard>
      </div> */}

          {/* Address Card */}
          {/* <div className="row justify-content-center text-center mt-4">
        <div className="col-lg-12 col-md-12">
          <div className="card shadow contact-card1">
            <div className="row align-items-center p-3">
             
              <div className="col-md-2 col-12 text-center mb-3">
                <i className="bi bi-geo-alt contact-icon"></i>
              </div>
            
              <div className="col-md-5 col-12 text-start border-md-end">
                <h5>Uthman Ibn Affan Library</h5>
                <p>
                  2/18, Ibrahim Street,<br />
                  Alandur, <br />
                  Chennai - 600016 <br />
                  <strong>Phone:</strong> +94 722251277
                </p>
              </div>
             
              <div className="col-md-5 col-12 text-start mt-3 mt-md-0">
                <h5>Masjid Sunnathul Muhammadhiya</h5>
                <p>
                  475, Thakkia Veedhi,<br />
                  Thaluvakode,<br />
                  Kochchikade <br />
                  <strong>Phone:</strong> +91 99623 15876
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

          {/* Social Media Section */}
          {/* <div className="text-center mt-4 mb-3">
            <h4>Follow Us</h4>
            <div className="social-icons mt-3">
              <SocialIcon icon="bi-facebook" url="https://www.facebook.com/YourPage" />
              <SocialIcon icon="bi-instagram" url="https://www.instagram.com/YourPage" />
              <SocialIcon icon="bi-twitter" url="https://www.twitter.com/YourPage" />
              <SocialIcon icon="bi-linkedin" url="https://www.linkedin.com/in/YourProfile" />
              <SocialIcon icon="bi-youtube" url="https://www.youtube.com/YourChannel" />
            </div>
          </div> */}
        </div>
      </div>

    </>

  );
};

// Reusable Contact Card Component
const ContactCard = ({ icon, title, text, link, children }) => (
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card shadow contact-card">
      <div className="contact-card-body text-center">
        <i className={`bi ${icon} contact-icon`}></i>
        <h5>{title}</h5>
        {link ? <p><a href={link}>{text}</a></p> : <p>{text}</p>}
        {children}
      </div>
    </div>
  </div>
);

// Reusable Social Icon Component
const SocialIcon = ({ icon, url }) => (
  <a href={url} className="mx-2" target="_blank" rel="noopener noreferrer">
    <i className={`bi ${icon}`}></i>
  </a>
);

export default Contact;
