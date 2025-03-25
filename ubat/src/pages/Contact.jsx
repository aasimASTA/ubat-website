import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../assets/style.css"; // Import custom styles
import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    document.title = "Contact|Uthman Ibn Affan Library";
  }, []);
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2 className="contact-title">CONTACT</h2>
        <p className="contact-subtitle">
          மார்க்கத்தில் ஒரு விஷயத்தை அல்-குர்ஆன் அஸ்-ஸுன்னாஹ் ஸஹாபாக்களின் அடிச்சுவட்டில்
          நிரூபித்த பின்னால் எங்களுடைய உலமாக்கள் இதனை கூறவில்லை என்று அதனை ஏற்றுக்கொள்ளாமல்
          விட்டுவிடுவது தான் தக்லீத் ஆகும்
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="row justify-content-center mt-4">
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
      </div>

      {/* Address Card */}
      <div className="row justify-content-center text-center mt-4">
        <div className="col-lg-12 col-md-12">
          <div className="card shadow contact-card1">
            <div className="row align-items-center p-3">
              {/* Single Icon on the Left */}
              <div className="col-md-2 col-12 text-center mb-3">
                <i className="bi bi-geo-alt contact-icon"></i>
              </div>
              {/* First Address */}
              <div className="col-md-5 col-12 text-start border-md-end">
                <h5>Uthman Ibn Affan Library</h5>
                <p>
                  2/18, Ibrahim Street,<br />
                  Alandur, <br />
                  Chennai - 600016 <br />
                  <strong>Phone:</strong> +94 722251277
                </p>
              </div>
              {/* Second Address */}
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
      </div>

      {/* Social Media Section */}
      <div className="text-center mt-4 mb-3">
        <h4>Follow Us</h4>
        <div className="social-icons mt-3">
        <SocialIcon icon="bi-facebook" url="https://www.facebook.com/YourPage" />
        <SocialIcon icon="bi-instagram" url="https://www.instagram.com/YourPage" />
        <SocialIcon icon="bi-twitter" url="https://www.twitter.com/YourPage" />
        <SocialIcon icon="bi-linkedin" url="https://www.linkedin.com/in/YourProfile" />
        <SocialIcon icon="bi-youtube" url="https://www.youtube.com/YourChannel" />
        </div>
      </div>
    </div>
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
const SocialIcon = ({ icon,url }) => (
  <a href={url} className="mx-2" target="_blank" rel="noopener noreferrer">
    <i className={`bi ${icon}`}></i>
    </a>
);

export default Contact;
