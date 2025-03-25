import React, { useState ,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are available
import "../assets/style.css"; // Import custom styles

// Import images correctly
import RabeeImage from "../assets/images/rabee.jpg";
import IsthaanbooliImage from "../assets/images/isthaanbooli.jpg";
import Aluthaibee from "../assets/images/aluthaibee.jpg";
import ShaikhHandwriting from "../assets/images/shaikh handwriting.jpg";
import MobileImage from "../assets/images/mobileimages.jpg";
import playstore from "../assets/images/playstoredownload.png";
import appstore from "../assets/images/appstoredownload.png"



const About = () => {

    useEffect(() => {
        document.title = "About Us|Uthman Ibn Affan Library";
      }, []);

       
      

    // State for the image popup
    const [popupImage, setPopupImage] = useState(null);

    // Function to open the image popup
    const openImagePopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    // Function to close the image popup
    const closeImagePopup = () => {
        setPopupImage(null);
    };

    useEffect(() => {
        if (popupImage) {
          document.body.classList.add("popup-active");
        } else {
          document.body.classList.remove("popup-active");
        }
      }, [popupImage]);

    // Function to share the image
    const shareImage = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Check out this image",
                    text: "Here is an image I want to share with you.",
                    url: popupImage,
                })
                .catch((error) => console.error("Error sharing:", error));
        } else {
            alert("Sharing is not supported on this browser.");
        }
    };

    return (
        <div className="container-fluid aboutus mt-5">
            <h1>ABOUT</h1>
            <div className="container mt-4 aboutcontent1 text-center">
                <p>بــــــــــــــــســـــم الله الرحـــــــمــــن الرحـــــــــيــم</p>
                <p>الحمد لله رب العالمين والصلاة والسلام على من لا نبي بعده اما بعد</p>
            </div>

            {/* Biography Section */}
            <main className="container aboutcontent2">
                <div className="row about">
                    <div className="col-lg-8 col-md-12">
                        <section className="Bio-info">
                            <h2>Biography</h2>
                            <p>Makthaba Uthmaan Ibn Affan (Uthmaan Ibn Affan Library) was established to facilitate the
                                learning,
                                teaching, and spreading of the Ilm (Knowledge) of the Qur'an and the Sunnah,
                                as understood and implemented by the Jamaa'ah of Sahabah (the Companions of the Prophet).
                            </p>
                            <p>
                                The Library puts forward the Speech of Allah, the speech of Rasoolullah ﷺ, and the way of
                                the
                                Sahabah
                                over
                                anything else. We publish books and pamphlets for the Muslims in the Tamil speaking world so
                                that
                                they
                                can benefit out of the knowledge of the Ulama (scholars) who are upon this methodology
                                (al-Qur'aan and as-Sunnah upon the understanding of the Sahabah).
                            </p>

                            <p>
                                Shaikh Yahya Silmy hafidhahullah is from the people of knowledge who studied the Ilm of
                                al-Kitab and
                                as-Sunnah under the scholars of Ahlus Sunnah. He is carrying the da'wah in the Tamil
                                speaking world
                                with
                                attestation and recommendation from the renowned scholars. We are posting his lectures,
                                articles,
                                and fatawa in this website and our apps, seeking the Face of Allah.
                            </p>
                            <p>Shaikh Abu AbdirRahman Yahya Silmy was born in Srilanka. He was brought up in Saudi
                                    Arabia and spent most of his childhood there.
                                    He had his Islamic education and the worldly education there.</p>
                                <p>It was the turn of the last century when the giants of Islam of our time such as
                                    Shaikh al-Albani,
                                    Shaikh Ibn Baaz, Shaikh Ibn Uthaymeen, etc and their da'wah had made a profound
                                    impact on the scholars and
                                    the common people. Shaikh Yahya Silmy happened to be a student at this time,
                                    and these scholars and their da'wah had a made a very positive influence on him.</p>
                                <p>He got the opportunity to attend the gatherings of these scholars. When he was a
                                    student, he got benefitted
                                    at the gatherings of the scholars of this blessed land. Many scholars who had seen
                                    Shaikh Yahya's knowledge
                                    and da'wah have recommended (Tazkiyah) the common people to benefit from his
                                    knowledge.
                                    We have listed down a brief introduction of his teachers.</p>
                            <div className="studies-info">
                            <h5>1. Shaikh Muhammadh Naasirudheen al-Albani</h5>
                                <p>He is the reviver of the religion in our time. His da'wah was all about
                                    understanding
                                    all aspects of the
                                    religion -
                                    Hadith, Fiqh, Aqeedha, etc upon the understanding of the Sahabah. When Shaikh
                                    al-Albani was in Jeddah,
                                    Shaikh Yahya attended his gatherings.
                                    In addition, he has learnt from all the published books and recorded audio tapes
                                    of
                                    Shaikh al-Albani till 1997.
                                </p>
                                <h5>2. Shaikh Abdul Azeez ibn Abdullah ibn Baaz</h5>
                                <p>He is the former Grand Mufti of Saudi Arabia. Shaikh Yahya has attended
                                    the gatherings of the Shaikh. For 10 continuous years, Shaikh Yahya has attended
                                    the
                                    Hajj and Ramadhan gatherings of Shaikh Ibn Baaz. When Imam Ibn Baaz was in
                                    Jeddah,
                                    Riyadh and Makkah, Shaikh Yahya got benefitted from him.

                                </p>
                                <h5>3. Shaikh Mahmoodh Mahdi al-Istanbooli</h5>
                                <p>He is the first teacher of Shaikh Yahya in the subjects of Aqeedha and Manhaj
                                    as-Salaf. He is the one who
                                    introduced the da'wah of Shaikh al-Albani to him. Shaikh Yahya learnt under
                                    his guidance Tafsir Ibn Kathir, Rawdah an-Nadhiyyah, Fiqhus Sunnah at the
                                    Shaikh's
                                    residence.

                                </p>
                                <h5>4. Shaikh Abdullah as-Somali</h5>
                                <p>He is the teacher of Shaikh Muqbil ibn Haadhee. When Shaikh Yahya was studying in
                                    Dar
                                    al-Hadith, Makkah,
                                    he learnt lessons from Sahih al-Bukhari under him.

                                </p>
                                <h5>5. Shaikh Muhammadh ibn Saalih al-Uthaymeen</h5>
                                <p>When the Shaikh taught at Masjid al-Haram, Makkah during the last 10 days of
                                    Ramadhan
                                    in I'thqaaf, Shaikh
                                    Yahya attended the gatherings and learnt from the Shaikh.

                                </p>
                                <h5>6. Shaikh ibn Humaidh</h5>
                                <p>When Shaikh Yahya was studying in Dar al-Hadith, Makkah, he learnt lessons from
                                    Imam
                                    ash-Shawkaanee's
                                    Nailul Awthar under him.


                                </p>
                                <h5>7. Shaikh Abdus Samad al-Khateeb</h5>
                                <p>He was born in the Indian state of Kerala and studied his Islamic knowledge in
                                    Saudi
                                    Arabia.
                                    He was a professor in Madina University. He was a close friend of Ahmad Ibn
                                    Yahya
                                    an-Najmi.
                                    He is also the teacher of scholars such as Shaikh Saalih as-Suhaymee and Shaikh
                                    Abdur Razzaq al-Badr.
                                    Shaikh Yahya learnt from him a kitab from Muwatta Imam Malik.
                                    He has also had a discussion with him on the affairs of da'wah and knowledge.

                                </p>
                                <h5>8. Shaikh Abdul Mannan an-Noorpuri al-Bakistani</h5>
                                <p>Shaikh Yahya got permission (Ijaza) from him to narrate ahadith with isnad.

                                </p>

                            </div>

                            {/* Embedded YouTube Video */}
                            <div className="vid-info">
                                <iframe
                                    width="100%"
                                    height="350"
                                    src="https://www.youtube.com/embed/tXLBh6QkgEs?si=_7_OCv49vBMPU-dp"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </section>
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-4 col-md-12">
                        <section className="image-info">
                            <h2>Tazkiyaat</h2>
                            <p>The attestations and recommendations of some of the renowned scholars...</p>

                            {/* Clickable Images for Popup */}
                            <PopupImage imgSrc={RabeeImage} title="Shaikh Rabee Ibn Hadee al-Madhkalee" onClick={openImagePopup} />
                            <PopupImage imgSrc={IsthaanbooliImage} title="Shaikh Mahmood Mahdi al-Isthaanbooli" onClick={openImagePopup} />
                            <PopupImage imgSrc={Aluthaibee} title="Shaikh Abu Umar Usama Ibn Athaya al-Uthaybee" onClick={openImagePopup} />
                            <PopupImage imgSrc={ShaikhHandwriting} title="The Shaikh's writing by hand" onClick={openImagePopup} />
                        </section>
                    </div>
                </div>
            </main>

            {/* App Section */}
            <div className="container app-container">
                <div className="row align-items-center">
                    {/* Mobile Screen Image */}
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-4">
                        <img src={MobileImage} alt="Mobile Screen" className="img-fluid" width="100%" />
                    </div>

                    {/* App Info */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="app-section">
                            <h2>ABOUT THE APP</h2>
                            <p>Convallis commodo elementum nec, varius eget nulla...</p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check-circle text-success"></i> Donec blandit dapibus ex eu euismod</li>
                                <li><i className="bi bi-check-circle text-success"></i> Pellentesque habitant morbi tristique</li>
                            </ul>

                            {/* App Download Links */}
                            <div className="row stats mt-4">
                                <div className="col-sm-12">
                                    <div className="stat-box p-2">
                                        <img src={playstore} width="200px" alt="Play Store" /> &nbsp;
                                        <img src={appstore} width="200px" alt="App Store" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Popup */}
            {popupImage && (
                <div className="popup-overlay" onClick={closeImagePopup}>
                    <div className="popup-content">
                        <div className="popup-header">
                            <button className="action-btn" onClick={shareImage}><i className="bi bi-share"></i></button>
                            <a href={popupImage} download className="action-btn"><i className="bi bi-download"></i></a>
                            <button className="close-btn" onClick={closeImagePopup}><i className="bi bi-x-lg"></i></button>
                        </div>
                        <img src={popupImage} alt="Popup" />
                    </div>
                </div>
            )}
        </div>
    );
};

// Reusable Component for Clickable Images
const PopupImage = ({ imgSrc, title, onClick }) => (
    <div>
        <p style={{ fontSize: "large", fontWeight: 600 }}>{title}</p>
        <img src={imgSrc} alt={title} width="90%" onClick={() => onClick(imgSrc)} style={{ cursor: "pointer" }} />
    </div>
);

export default About;
