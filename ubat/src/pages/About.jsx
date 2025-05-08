import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are available
import "../assets/style.css"; // Import custom styles
import { useLanguage } from "../config/LanguageContext"; //Import Language to change the language 
// Import images correctly
import RabeeImage from "../assets/images/rabee.jpg";
import IsthaanbooliImage from "../assets/images/isthaanbooli.jpg";
import Aluthaibee from "../assets/images/aluthaibee.jpg";
import ShaikhHandwriting from "../assets/images/shaikh handwriting.jpg";
import MobileImage from "../assets/images/mobileimages.jpg";
import playstore from "../assets/images/playstoredownload.png";
import appstore from "../assets/images/appstoredownload.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const About = () => {

     // Toggle used to change Language
    
      const { language } = useLanguage();

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
        <>
            <div className="contact_banner">
                <div className="contact-img-content">

                    <h2>
                        About us
                    </h2>

                </div>
            </div>
            <div className="container-fluid aboutus pt-5">
                {/* <h1>ABOUT</h1> */}
                <div className="container mt-4 aboutcontent1 text-center">
                    <p>بــــــــــــــــســـــم الله الرحـــــــمــــن الرحـــــــــيــم</p>
                    <p>الحمد لله رب العالمين والصلاة والسلام على من لا نبي بعده اما بعد</p>
                </div>

                {/* Biography Section */}
                <main className="container aboutcontent2">
                    <div className=" about">
                        <div className="">
                            <section className="Bio-info">
                                <h2 className="text-center ">{language === "en" ? "Biography" : "பயோகிராபி"}</h2>
                                <p>
                                    {language === "en" ? (

                                        <>
                                            Makthaba Uthmaan Ibn Affan (Uthmaan Ibn Affan Library) was established to facilitate the
                                            learning,
                                            teaching, and spreading of the Ilm (Knowledge) of the Qur'an and the Sunnah,
                                            as understood and implemented by the Jamaa'ah of Sahabah (the Companions of the Prophet).
                                        </>
                                    )
                                        : (
                                            <>
                                                உஸ்மான் இப்னு அஃப்பான் நூலகம் அல்-குர்ஆன், அஸ்-ஸுன்னாஹ்வை ஸஹாபா என்ற ஜமாஅத் எவ்வாறு
                                                விளங்கி செயல்படுத்தினார்களோ அந்த கல்வியைக் கற்று செயல்படுத்தி மக்களுக்கு மத்தியில் பரவலாக்குவதற்காக நிறுவப்பட்டதாகும்.
                                            </>
                                        )

                                    }


                                </p>
                                <p>
                                    {language === "en" ?
                                        (<>The Library puts forward the Speech of Allah, the speech of Rasoolullah ﷺ, and the way of
                                            the
                                            Sahabah
                                            over
                                            anything else. We publish books and pamphlets for the Muslims in the Tamil speaking world so
                                            that
                                            they
                                            can benefit out of the knowledge of the Ulama (scholars) who are upon this methodology
                                            (al-Qur'aan and as-Sunnah upon the understanding of the Sahabah).
                                        </>)

                                        :
                                        (<>
                                            உஸ்மான் இப்னு அஃப்பான் நூலகம் அல்-குர்ஆன், அஸ்-ஸுன்னாஹ்வை ஸஹாபா என்ற ஜமாஅத் எவ்வாறு விளங்கி
                                            செயல்படுத்தினார்களோ அந்த கல்வியைக் கற்று செயல்படுத்தி மக்களுக்கு மத்தியில் பரவலாக்குவதற்காக நிறுவப்பட்டதாகும். அல்லாஹ்வின் வார்த்தைக்கும் நபி ﷺ அவர்களுடைய வார்த்தைக்கும்
                                            ஸஹாபாக்களின் பாதைக்கும் தான் நாங்கள் முக்கியத்துவம் கொடுக்கிறோம்.இந்த அடிப்படையில் மக்களுக்கு வழிகாட்டும் உலமாக்களுடைய கல்வியை தமிழ் பேசும் முஸ்லிம்களுக்கு கொண்டு சேர்ப்பதற்காக நூல்கள், கையேடுகள் போன்றவற்றை
                                            வெளியிட்டுக் கொண்டிருக்கிறோம்.
                                        </>)}
                                </p>

                                <p>
                                    {language === "en" ?
                                        (<>Shaikh Yahya Silmy hafidhahullah is from the people of knowledge who studied the Ilm of
                                            al-Kitab and
                                            as-Sunnah under the scholars of Ahlus Sunnah. He is carrying the da'wah in the Tamil
                                            speaking world
                                            with
                                            attestation and recommendation from the renowned scholars. We are posting his lectures,
                                            articles,
                                            and fatawa in this website and our apps, seeking the Face of Allah.
                                        </>)

                                        :
                                        (<>
                                            மேலும் இந்த அடிப்படையில் அஹ்லுஸ் ஸுன்னாஹ் உலமாக்களிடம் மார்க்க்க் கல்வியை பயின்று
                                            அழைப்புப் பணியில் ஈடுபட்டிருக்கக் கூடிய அஷ்-ஷெய்க் யஹ்யா ஸில்மி ஹஃபிழஹுல்லாஹ்
                                            அவர்களுடைய வகுப்புகள், சொற்பொழிவுகள், விளக்கவுரைகள், ஃபத்வாக்கள் போன்றவற்றை இந்த இணைய தளத்தில்
                                            அல்லாஹ்வின் நன்மையை நாடி தொகுத்துக் கொண்டிருக்கின்றோம்.
                                        </>)}
                                </p>
                                <p>{language === "en" ?
                                    (<>Shaikh Abu AbdirRahman Yahya Silmy was born in Srilanka. He was brought up in Saudi Arabia and spent 
                                    most of his childhood there.He had his Islamic education and the worldly education there.
                                    </>)

                                    :
                                    (<>
                                        அஷ்-ஷெய்க் அபூ அப்துர் ரஹ்மான் யஹ்யா ஸில்மி அவர்கள் இலங்கையில் பிறந்தார்கள்.
                                        அவர்களுடைய தந்தை சவூதி அரேபியாவில் பணியாற்றியதால் சிறுவயதிலேயே அங்கு சென்றுவிட்டார்கள்.
                                        அவர்களுடைய மார்க்க கல்வியையும், உலகக்கல்வியையும் அந்த நாட்டிலேயே கற்றார்கள்.
                                    </>)}</p>
                                <p>{language === "en" ?
                                    (<>It was the turn of the last century when the giants of Islam of our time such as Shaikh al-Albani, 
                                    Shaikh Ibn Baaz, Shaikh Ibn Uthaymeen, etc and their da'wah had made a profound impact on the scholars and the 
                                    common people. Shaikh Yahya Silmy happened to be a student at this time, 
                                    and these scholars and their da'wah had a made a very positive influence on him.
                                    </>)

                                    :
                                    (<>
                                        அவர்கள் மாணவராக இருந்த காலத்தில்தான் இந்த நூற்றாண்டின் மிக முக்கியமான உலமாக்களான ஷெய்க் 
                                        அல்பானி, ஷெய்க் இப்னு பாஸ், ஷெய்க் இப்னு உதைமின் ஆகியோர்களின் கல்வியும் பணியும் அறிஞர்களுக்கு மத்தியிலும், 
                                        மக்களுக்கு மத்தியிலும் மிகப் பெரிய தாக்கத்தை ஏற்படுத்திக் கொண்டிருந்தது.
                                    </>)}</p>
                                <p>{language === "en" ?
                                    (<>He got the opportunity to attend the gatherings of these scholars. When he was a student, 
                                    he got benefitted at the gatherings of the scholars of this blessed land. Many scholars who had seen 
                                    Shaikh Yahya's knowledge and da'wah have recommended (Tazkiyah) the common people to benefit from his knowledge. 
                                    We have listed down a brief introduction of his teachers.
                                    </>)

                                    :
                                    (<>
                                        இப்படிப்பட்ட உலமாக்களுடைய சபைகளில் பயன் பெறுவதற்கான வாய்ப்பு அவர்களுக்குக் கிடைத்தது. 
                                        மேலும், அவர்கள் மாணவராக இருந்த காலத்தில் அந்த நாட்டில் வாழ்ந்த பல உலமாக்களின் சபைகளில் 
                                        இருந்து கல்வியைப் பெற்றுக்கொண்டார்கள். மேலும் இவர்களுடைய கல்வியையும், அழைப்புப்பணியையும் 
                                        கண்டு இவர்களை மார்க்கப் பிரச்சாரம் செய்வதற்குப் பல உலமாக்கள் சிபாரிசு (தஸ்கிய்யா) வழங்கி 
                                        இருக்கிறார்கள்.இவர்கள் கல்வி பயின்ற உலமாக்களின் சுருக்கமான அறிமுகத்தைக் காண்போம்.
                                    </>)}</p>
                                <div className="studies-info">
                                <h5>{language === "en" ? "1. Shaikh Muhammadh Naasirudheen al-Albani" : "1. ஷெய்க் முஹம்மத் நாஸிருத்தீன் அல்-அல்பானி"}</h5>
                                    <p> {language === "en" ?
                                    (<>He is the reviver of the religion in our time. His da'wah was all about
                                        understanding
                                        all aspects of the
                                        religion -
                                        Hadith, Fiqh, Aqeedha, etc upon the understanding of the Sahabah. When Shaikh
                                        al-Albani was in Jeddah,
                                        Shaikh Yahya attended his gatherings.
                                        In addition, he has learnt from all the published books and recorded audio tapes
                                        of
                                        Shaikh al-Albani till 1997.
                                    </>)

                                    :
                                    (<>
                                        இன்றைய காலத்தில் ஹதீஸையும் ஃபிக்ஹ் கொள்கையையும் ஸலஃபின் அடிப்படையில் சுமந்த இமாம் 
                                        நாஸிருத்தீன் அல்-அல்பானீ அவர்களின் சபையில் அமர்ந்து நேரடியாக இஸ்லாமியக் கல்வியை ஸஹாபா 
                                        விளக்கத்தோடு பெற்றுக்கொண்டார். இமாமவர்கள் ஜித்தாவிற்கு வருகை தந்திருந்த பொழுது அவரிடம் 
                                        ஷெய்க் யஹ்யா அவர்கள் பயன் பெற்றுக்கொண்டார்கள். மேலும் 1997 வரை, ஷெய்க் அல்-அல்பானியுடைய 
                                        அனைத்து அச்சிடப்பட்ட புத்தகங்கள் மற்றும் ஒலிநாடாக்களின் மூலம் நன்றாக படித்து பயன்பெற்றவர்.
                                    </>)}
                                    </p>
                                    <h5> {language === "en" ? "2. Shaikh Abdul Azeez ibn Abdullah ibn Baaz" : "2. ஷெய்க் அப்துல் அஸீஸ் பின் அப்துல்லாஹ் பின் பாஸ்"}</h5>
                                    <p>{language === "en" ?
                                    (<>He is the former Grand Mufti of Saudi Arabia. 
                                    Shaikh Yahya has attended the gatherings of the Shaikh. 
                                    For 10 continuous years, Shaikh Yahya has attended the Hajj and Ramadhan 
                                    gatherings of Shaikh Ibn Baaz. When Imam Ibn Baaz was in Jeddah, Riyadh and 
                                    Makkah, Shaikh Yahya got benefitted from him.


                                    </>)

                                    :
                                    (<>
                                        சவூதி அரேபியாவின் முந்திய முஃப்தியாக இருந்த ஷெய்க் அப்துல் அஸீஸ் இப்னு அப்துல்லாஹ் இப்னு 
                                        பாஸ் அவர்களின் சபைகளில் நேரடியாக அமர்ந்தும், ரமலான் மற்றும் ஹஜ்ஜுடைய காலங்களில் 
                                        அவர்களின் சபைகளில் தொடர்ச்சியாகப் பத்து ஆண்டுகள் மார்க்க விளக்கங்களைப் பெற்றும் தயாரானார்கள். இமாமவர்கள் ஜித்தா, 
                                        ரியாத், மக்காவில் இருந்தபொழுது அவரிடம் ஷெய்க் யஹ்யா பயன்பெற்றுக்கொண்டார்கள்.
                                    </>)}

                                    </p>
                                    <h5> {language === "en" ? "3. Shaikh Mahmoodh Mahdi al-Istanbooli" : "3. ஷெய்க் மஹ்மூத் மஹ்தி அல்-இஸ்தன்பூலி"}</h5>
                                    <p>
                                        {language === "en" ?
                                    (<>He is the first teacher of Shaikh Yahya in the subjects of Aqeedha and Manhaj
                                        as-Salaf. He is the one who
                                        introduced the da'wah of Shaikh al-Albani to him. Shaikh Yahya learnt under
                                        his guidance Tafsir Ibn Kathir, Rawdah an-Nadhiyyah, Fiqhus Sunnah at the
                                        Shaikh's
                                        residence.
                                    </>)

                                    :
                                    (<>
                                        அகீதா மற்றும் மன்ஹஜ் மேலும் ஸலஃப் வழிமுறைக்கு ஷெய்க் யஹ்யா ஸில்மி அவர்களின் முதலாவது 
                                        ஆசிரியர் இவராவார். ஷெய்க் அல்பானியின் கல்வியோடு ஷெய்க் யஹ்யாவை அறிமுகப்படுத்தியவர் ஷெய்க் 
                                        மஹ்மூத் மஹ்தி. மேலும், அவர்களின் வீட்டில் நேரடியாக அவர்களுடைய வழிகாட்டுதலில் இப்னு கஸீர், 
                                        ரவ்லத்துன் நதியா,ஃபிக்ஹ் ஸுன்னாஹ் மற்றும் பல நூல்களை விளக்கத்துடன் கற்றார்கள்.
                                    </>)}

                                    </p>
                                    <h5> {language === "en" ? "4. Shaikh Abdullah as-Somali" : "4. ஷெய்க் அப்துல்லாஹ் அஸ்-ஸொமாலி"}</h5>
                                    <p>
                                        {language === "en" ?
                                    (<>He is the teacher of Shaikh Muqbil ibn Haadhee. When Shaikh Yahya was studying in
                                        Dar
                                        al-Hadith, Makkah,
                                        he learnt lessons from Sahih al-Bukhari under him.
                                    </>)

                                    :
                                    (<>
                                        இவர் ஷெய்க் முக்பிலின் ஆசிரியர் இவர்களிடம் ஸஹீஹுல் புகா£¦யின் பாடங்களைத் தாருல் 
                                        ஹதீஸ் பல்கலைக்கழகத்தில் படிக்கும்பொழுது நேரடியாகப் பெற்றுக்கொண்டார்கள்.
                                    </>)}

                                    </p>
                                    <h5> {language === "en" ? "5. Shaikh Muhammadh ibn Saalih al-Uthaymeen" : "5. ஷெய்க் முஹம்மத் பின் ஸாலிஹ் அல்-உஸைமீன்"}</h5>
                                    <p>
                                        {language === "en" ?
                                    (<>When the Shaikh taught at Masjid al-Haram, Makkah during the last 10 days of
                                        Ramadhan
                                        in I'thqaaf, Shaikh
                                        Yahya attended the gatherings and learnt from the Shaikh.
                                    </>)

                                    :
                                    (<>
                                        மக்காவிலுள்ள ஹரமில் ரமலானுடைய கடைசி 10 இஃதிகாஃபுடைய 
                                        நாட்களில் நடைபெற்ற வகுப்புகளில் ஷெய்க் யஹ்யா அவர்கள் 
                                        கலந்துகொண்டார்.


                                    </>)}

                                    </p>
                                    <h5> {language === "en" ? "6. Shaikh ibn Humaidh" : "6. ஷெய்க் பின் ஹுமைத்"}</h5>
                                    <p>
                                        {language === "en" ?
                                    (<>When Shaikh Yahya was studying in Dar al-Hadith, Makkah, he learnt lessons from
                                        Imam
                                        ash-Shawkaanee's
                                        Nailul Awthar under him.
                                    </>)

                                    :
                                    (<>
                                        இவர் தாருல் ஹதீஸ் கைரிய்யாவில் படித்துக் கொண்டிருந்தபொழுது இமாம் 
                                        ஷவ்கானியின் நைலுல் அவ்தார் விளக்க வகுப்புகளில் ஷெய்க் யஹ்யா அவர்கள் 
                                        பங்கேற்றுக்கொண்டார்.


                                    </>)}


                                    </p>
                                    <h5> {language === "en" ? "7. Shaikh Abdus Samad al-Khateeb" : "7. ஷெய்க் அப்துஸ் ஸமது அல்-காதிப்"}</h5>
                                    <p>
                                        {language === "en" ?
                                    (<>He was born in the Indian state of Kerala and studied his Islamic knowledge in
                                        Saudi
                                        Arabia.
                                        He was a professor in Madina University. He was a close friend of Ahmad Ibn
                                        Yahya
                                        an-Najmi.
                                        He is also the teacher of scholars such as Shaikh Saalih as-Suhaymee and Shaikh
                                        Abdur Razzaq al-Badr.
                                        Shaikh Yahya learnt from him a kitab from Muwatta Imam Malik.
                                        He has also had a discussion with him on the affairs of da'wah and knowledge.
                                    </>)

                                    :
                                    (<>
                                        அஷ்-ஷெய்க் அல்-அல்லாமா அப்துஸ் ஸமது அல்-காதிப் அவர்கள் இந்திய நாட்டின் கேரளாவில் பிறந்து சவூதி
                                         நாட்டில் மார்க்கக் கல்வி பயின்றவர் ஆவார்கள். இவர் சவூதியின் ஜீஸானுடைய கல்வியகத்திலும், மதீனா 
                                         பல்கலைகழகத்திலும் பேராசிரியராக பணியாற்றினார்கள். ஷெய்க் அஹ்மது இப்னு யஹ்யா அந்-நஜ்மி 
                                         அவர்களின் நெருங்கிய தோழர் ஆவார்கள். மேலும் இன்றைய காலத்தின் முன்னனி அறிஞர்களான 
                                         ஷெய்க் ஸாலிஹ் அஸ்-ஸுஹைமீ, ஷெய்க் அப்துர் ரஜ்ஜாக் அல்-பத்ர் மற்றும் பலருடைய 
                                         ஆசிரியர் ஆவார்கள். ஷெய்க் யஹ்யா ஸில்மி அவர்கள் இவர்களிடத்தில் முவத்தா மாலிக்கின் கிதாபுல் 
                                         வராஸத்தை பயின்றார்கள்.மேலும் தாஃவா சம்பந்தமாக கல்வி ரீதியாக கலைந்துரையாடி இருக்கிறார்கள்.
                                    </>)}

                                    </p>
                                    <h5> {language === "en" ? "8. Shaikh Abdul Mannan an-Noorpuri al-Bakistani" : "8. ஷெய்க் அப்துல் மன்னான் அந் நூர்பூரி அல்-பாகிஸ்தானி"}</h5>
                                    <p>
                                    {language === "en" ?
                                    (<>Shaikh Yahya got permission (Ijaza) from him to narrate ahadith with isnad.
                                    </>)

                                    :
                                    (<>
                                        இவர்களிடம் அறிவிப்பாளர் தொடரோடு ஹதீஸ்களை 
                                        அறிவிப்பதற்கு ஷெய்க் யஹ்யா அவர்கள் இஜாசா (அனுமதி) பெற்றுள்ளார்.
                                    </>)}

                                    </p>

                                </div>


                            </section>
                        </div>

                        {/* Image Section */}
                        <div className="">
                            <section className="image-info">
                            <h2 className="text-center ">{language === "en" ? "Tazkiyaat" : "உலமாக்களின் பரிந்துரைகள்"}</h2>
                                <p className="text-center ">
                                    {language === "en" ? 
                                    "The attestations and recommendations of some of the renowned scholars..." : "ஷைக்ஹ் அபூ அப்திர்ரஹ்மான் யஹ்யா ஸில்மி அவர்களுக்கு அவர்களின் ஆசிரியர்களும் ஏனைய உலமாக்களும் அளித்த பரிந்துரைகளின் பதிவுகளைக் கீழே காணலாம்."}
                                </p>
                               
                                <div className="swiper-container">
                                    <button className="swiper-button prev"></button>
                                    <button className="swiper-button next"></button>
                                    <Swiper
                                        modules={[Navigation]}
                                        spaceBetween={10}  
                                        slidesPerView={3}  
                                        navigation={{
                                            prevEl: ".swiper-button.prev",
                                            nextEl: ".swiper-button.next",
                                        }}
                                        loop={true}
                                        centeredSlides={false}
                                        breakpoints={{
                                            320: { slidesPerView: 1 }, 
                                            768: { slidesPerView: 2 }, 
                                            1024: { slidesPerView: 3 }, 
                                        }}
                                        style={{ width: "90%", padding: "20px 0" }}  
                                    >
                                        <SwiperSlide>
                                            <div className="gallery-item">
                                                <PopupImage imgSrc={RabeeImage} onClick={openImagePopup} className="slide-image" />
                                                <span> {language === "en" ? "Shaikh Rabee Ibn Hadee al-Madhkalee" : "ஷைக்ஹ் ரபீ இப்னு ஹாதி அல்-மத்க்ஹலி"}</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="gallery-item">
                                            <PopupImage imgSrc={IsthaanbooliImage} onClick={openImagePopup} className="slide-image" />
                                            <span> {language === "en" ? "Shaikh Mahmood Mahdi al-Isthaanbooli" : "ஷைக்ஹ் மஹ்மூத் மஹ்தீ அல்-இஸ்தான்பூலி"}</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="gallery-item">
                                            <PopupImage imgSrc={Aluthaibee} onClick={openImagePopup} className="slide-image" />
                                            <span> {language === "en" ? "Shaikh Abu Umar Usama Ibn Athaya al-Uthaybee" : "ஷைக்ஹ் உஸாமா பின் அதாயா அல்-உதய்பீ"}</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="gallery-item">
                                            <PopupImage imgSrc={ShaikhHandwriting} onClick={openImagePopup} className="slide-image" />
                                            <span> {language === "en" ? "The Shaikh's writing by hand" : "ஷைக்ஹ் அவர்களின் கையெழுத்துப் பிரதி"}</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="gallery-item">
                                                {/* Embedded YouTube Video */}
                                                <div className="vid-info">
                                                    <iframe
                                                        width="100%"
                                                        height="400"
                                                        src="https://www.youtube.com/embed/tXLBh6QkgEs?si=_7_OCv49vBMPU-dp"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                                <span> {language === "en" ? "Shaikh Muhammad Ibn Abdul Wahhab Al-Aqeel" : "ஷைக்ஹ் முஹம்மத் இப்னு அப்துல் வஹ்ஹாப் அல்-அகீல்"}</span>
                                            </div>
                                        </SwiperSlide>
                                        
                                    </Swiper>
                                   
                                </div>
                            </section>

                        </div>

                    </div>
                </main>

                {/* App Section */}
                <div className="app-container">
                    <div className="row align-items-center pt-5">
                        {/* Mobile Screen Image */}
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-4">
                            <img src={MobileImage} alt="Mobile Screen" className="img-fluid rounded shadow-lg" width="70%" />
                        </div>

                        {/* App Info */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="app-section text-light  ">
                                <h2>ABOUT THE APP</h2>
                                <p>Convallis commodo elementum nec, varius eget nulla...</p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check-circle text-info me-2 fs-5"></i>
                                        Donec blandit dapibus ex eu euismod
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check-circle text-info me-2 fs-5"></i>
                                        Pellentesque habitant morbi tristique
                                    </li>
                                </ul>

                                {/* App Download Links */}
                                <div className="d-flex flex-wrap justify-content-center justify-content-md-start mt-4">
                                    <a href="#" className="me-2 mb-2">
                                        <img src={playstore} className="store-btn shadow-sm" alt="Play Store" />
                                    </a>
                                    <a href="#" className="me-2 mb-2">
                                        <img src={appstore} className="store-btn shadow-sm" alt="App Store" />
                                    </a>
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

        </>

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
