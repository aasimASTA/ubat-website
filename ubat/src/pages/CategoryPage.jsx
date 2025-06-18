import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase";
import { useLanguage } from "../config/LanguageContext";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import audioThumb from "../assets/images/audiothumb.jpg";
import textThumb from "../assets/images/text-thumb.png";


const POSTS_PER_PAGE = 10;
const renderTextContent = (text) => <div dangerouslySetInnerHTML={{ __html: text }} />;

const CategoryPage = () => {
  const { language } = useLanguage();
  const lang = language === "ta" ? "tamil" : "english";
  const { slug } = useParams();
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [lastVisiblePost, setLastVisiblePost] = useState(null);
  const [popupItems, setPopupItems] = useState([]);
  const [popupIndex, setPopupIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getThumbnail = (item) => {
    if (!item) return "/default.jpg";
    const link = item.link || "";
    if (link.match(/\.(jpeg|jpg|png|webp|gif)$/i)) return link;
    if (link.endsWith(".mp3")) return audioThumb;
    if (item.text_content) return textThumb;
    return audioThumb;
  };

  const fetchCategoryPosts = useCallback(async (startAfterDoc = null) => {
    try {
      const postsRef = collection(db, "apps", lang, "posts");
      const postsSnap = await getDocs(query(postsRef, orderBy("published", "desc")));

      const filteredDocs = postsSnap.docs.filter((doc) => {
        const data = doc.data();
        const categoryMatch = data.category?.toLowerCase() === slug.toLowerCase();
        const tagMatch = data.tags?.toLowerCase().includes(slug.toLowerCase());
        return categoryMatch || tagMatch;
      });

      const paginatedDocs = startAfterDoc
        ? filteredDocs.slice(
            filteredDocs.findIndex(doc => doc.id === startAfterDoc.id) + 1,
            filteredDocs.findIndex(doc => doc.id === startAfterDoc.id) + 1 + POSTS_PER_PAGE
          )
        : filteredDocs.slice(0, POSTS_PER_PAGE);

      const postsWithFirstItem = await Promise.all(
        paginatedDocs.map(async (doc) => {
          const post = { id: doc.id, ...doc.data() };
          const itemRef = collection(db, "apps", lang, "posts", doc.id, "items");
          const itemQuery = query(itemRef, orderBy("position"), limit(1));
          const itemSnap = await getDocs(itemQuery);
          const firstItem = itemSnap.docs[0]?.data();
          return { ...post, firstItem };
        })
      );

      if (startAfterDoc) {
        setPosts((prev) => [...prev, ...postsWithFirstItem]);
      } else {
        setPosts(postsWithFirstItem);
      }

      const newLast = paginatedDocs[paginatedDocs.length - 1];
      setLastVisiblePost(newLast);
      setHasMore(paginatedDocs.length === POSTS_PER_PAGE);
    } catch (err) {
      console.error("Error loading posts:", err);
    }
  }, [lang, slug]);

useEffect(() => {
  if (slug && categoryMap[slug]) {
    const title =
      language === "ta"
        ? `${categoryMap[slug].labelTa} | உஸ்மான் இப்னு அஃப்பான் நூலகம்`
        : `${categoryMap[slug].labelEn} | Uthman Ibn Affan Library`;
    document.title = title;
  } else {
    document.title =
      language === "ta"
        ? "உஸ்மான் இப்னு அஃப்பான் நூலகம்"
        : "Uthman Ibn Affan Library";
  }
}, [slug, language]);



  useEffect(() => {
    setPosts([]);
    setLastVisiblePost(null);
    setHasMore(true);
    fetchCategoryPosts();
  }, [fetchCategoryPosts]);

  const loadMorePosts = () => {
    if (!loadingMore && hasMore && lastVisiblePost) {
      setLoadingMore(true);
      fetchCategoryPosts(lastVisiblePost).finally(() => setLoadingMore(false));
    }
  };

  const openPopup = async (postId) => {
    try {
      const itemsRef = collection(db, "apps", lang, "posts", postId, "items");
      const itemsSnap = await getDocs(itemsRef);
      const allItems = itemsSnap.docs.map((doc) => doc.data());

      setPopupItems(allItems);
      setPopupIndex(0);
      setShowPopup(true);
    } catch (error) {
      console.error("Error loading full items:", error);
    }
  };

  const closePopup = () => setShowPopup(false);
  const nextItem = () => setPopupIndex((i) => (i + 1) % popupItems.length);
  const prevItem = () => setPopupIndex((i) => (i - 1 + popupItems.length) % popupItems.length);

  const tags = [
    { label: language === "ta" ? "குத்பா" : "Khutbah", route: "/category/jumuah" },
    { label: language === "ta" ? "கிதாப்" : "Kithab", route: "/category/aqeedah" },
    { label: language === "ta" ? "இபாதா" : "Ibadah", route: "/category/prayer" },
    { label: language === "ta" ? "ப்யூரிபிகேஷன்" : "Purification", route: "/category/heart" },
    { label: language === "ta" ? "குடும்பம் & சமூகம்" : "Family & Society", route: "/category/men" },
    { label: language === "ta" ? "பயோகிராபி" : "Biography", route: "/category/prophet" },
  ];

  const categories = [
    {
      label: language === "ta" ? "குத்பா" : "Khutbah",
      subtopics: [
        { title: language === "ta" ? "ஜுமுஆ" : "Jumuah", route: "/category/jumuah" },
        { title: language === "ta" ? "நிக்கா" : "Nikkah", route: "/category/nikkah" },
        { title: language === "ta" ? "ஜனாஸா" : "Funeral", route: "/category/funeral" },
        { title: language === "ta" ? "ஈத்" : "Eid", route: "/category/eid" },
      ],
    },
     {
      label: language === "ta" ? "கிதாப்" : "Kithab",
      subtopics: [
        { title: language === "ta" ? "அகீதா" : "Aqeedah", route: "/category/aqeedah" },
        { title: language === "ta" ? "மன்ஹஜ்" : "Manhaj", route: "/category/manhaj" },
        { title: language === "ta" ? "ஃபிக்ஹ்" : "Fiqh", route: "/category/fiqh" },
        { title: language === "ta" ? "ஹதீஸ்" : "Hadith", route: "/category/hadith" },
            { title: language === "ta" ? "தஃப்சீர்" : "Tafseer", route: "/category/tafseer" },
      ],
    },

     {
      label: language === "ta" ? "இபாதா" : "Ibadah",
      subtopics: [
        { title: language === "ta" ? "தொழுகை" : "Prayer", route: "/category/prayer" },
        { title: language === "ta" ? "ஜகாத்" : "Zakat", route: "/category/zakat" },
        { title: language === "ta" ? "ஹஜ்" : "Hajj", route: "/category/hajj" },
        { title: language === "ta" ? "உம்ரா" : "Umrah", route: "/category/umrah" },
            { title: language === "ta" ? "நோன்பு" : "Fasting", route: "/category/fasting" },
             { title: language === "ta" ? "திக்ர்" : "Dhikr", route: "/category/dhikr" },
      ],
    },
    
     {
      label: language === "ta" ? "ப்யூரிபிகேஷன்" : "Purification",
      subtopics: [
      
         { title: language === "ta" ? "ஹார்ட்" : "Heart", route: "/category/heart" },
         { title: language === "ta" ? "தவ்பா" : "Taubah", route: "/category/taubah" },
         { title: language === "ta" ? "தக்வா" : "Taqwah", route: "/category/taqwah" },
         { title: language === "ta" ? "இஸ்திக்ஃபார்" : "Istighfar", route: "/category/istighfar" },
       
      ],
    },
     {
      label: language === "ta" ? "குடும்பம் & சமூகம்" : "Family & Society",
      subtopics: [
      
         { title: language === "ta" ? "ஆண்கள்" : "Men", route: "/category/men" },
         { title: language === "ta" ? "பெண்கள்" : "Women", route: "/category/women" },
         { title: language === "ta" ? "குழந்தைகள்" : "Children", route: "/category/children" },
         { title: language === "ta" ? "குடும்பம்" : "Family", route: "/category/family" },
         { title: language === "ta" ? "சமூகம்" : "Society", route: "/category/society" },
         { title: language === "ta" ? "அரசியல்" : "Political Talk", route: "/category/politicaltalk" },
       
      ],
    },

     {
      label: language === "ta" ? "பயோகிராபி" : "Biography",
      subtopics: [
      
         { title: language === "ta" ? "ப்ராபட்ஸ்" : "Prophet", route: "/category/prophet" },
         { title: language === "ta" ? "சஹாபா" : "Sahabha", route: "/category/sahabha" },
         { title: language === "ta" ? "உலமா" : "Ulama", route: "/category/ulama" },
       
      ],
    },
  ];

  const categoryMap = {
  jumuah: { parentEn: "Khutbah", parentTa: "குத்பா", labelEn: "Jumuah", labelTa: "ஜுமுஆ" },
  nikkah: { parentEn: "Khutbah", parentTa: "குத்பா", labelEn: "Nikkah", labelTa: "நிக்கா" },
  funeral: { parentEn: "Khutbah", parentTa: "குத்பா", labelEn: "Funeral", labelTa: "ஜனாஸா" },
  eid: { parentEn: "Khutbah", parentTa: "குத்பா", labelEn: "Eid", labelTa: "ஈத்" },

  aqeedah: { parentEn: "Kithab", parentTa: "கிதாப்", labelEn: "Aqeedah", labelTa: "அகீதா" },
  manhaj: { parentEn: "Kithab", parentTa: "கிதாப்", labelEn: "Manhaj", labelTa: "மன்ஹஜ்" },
  fiqh: { parentEn: "Kithab", parentTa: "கிதாப்", labelEn: "Fiqh", labelTa: "ஃபிக்ஹ்" },
  hadith: { parentEn: "Kithab", parentTa: "கிதாப்", labelEn: "Hadith", labelTa: "ஹதீஸ்" },
  tafseer: { parentEn: "Kithab", parentTa: "கிதாப்", labelEn: "Tafseer", labelTa: "தஃப்சீர்" },

  prayer: { parentEn: "Ibadah", parentTa: "இபாதா", labelEn: "Prayer", labelTa: "தொழுகை" },
  zakat: { parentEn: "Ibadah", parentTa: "இபாதா", labelEn: "Zakat", labelTa: "ஜகாத்" },
  hajj: { parentEn: "Ibadah", parentTa: "இபாதா", labelEn: "Hajj", labelTa: "ஹஜ்" },
  umrah: { parentEn: "Ibadah", parentTa: "இபாதா", labelEn: "Umrah", labelTa: "உம்ரா" },
  fasting: { parentEn: "Ibadah", parentTa: "இபாதா", labelEn: "Fasting", labelTa: "நோன்பு" },
  dhikr: { parentEn: "Ibadah", parentTa: "இபாதா", labelEn: "Dhikr", labelTa: "திக்ர்" },

  heart: { parentEn: "Purification", parentTa: "ப்யூரிபிகேஷன்", labelEn: "Heart", labelTa: "ஹார்ட்" },
  taubah: { parentEn: "Purification", parentTa: "ப்யூரிபிகேஷன்", labelEn: "Taubah", labelTa: "தவ்பா" },
  taqwah: { parentEn: "Purification", parentTa: "ப்யூரிபிகேஷன்", labelEn: "Taqwah", labelTa: "தக்வா" },
  istighfar: { parentEn: "Purification", parentTa: "ப்யூரிபிகேஷன்", labelEn: "Istighfar", labelTa: "இஸ்திக்ஃபார்" },

  men: { parentEn: "Family & Society", parentTa: "குடும்பம் & சமூகம்", labelEn: "Men", labelTa: "ஆண்கள்" },
  women: { parentEn: "Family & Society", parentTa: "குடும்பம் & சமூகம்", labelEn: "Women", labelTa: "பெண்கள்" },
  children: { parentEn: "Family & Society", parentTa: "குடும்பம் & சமூகம்", labelEn: "Children", labelTa: "குழந்தைகள்" },
  family: { parentEn: "Family & Society", parentTa: "குடும்பம் & சமூகம்", labelEn: "Family", labelTa: "குடும்பம்" },
  society: { parentEn: "Family & Society", parentTa: "குடும்பம் & சமூகம்", labelEn: "Society", labelTa: "சமூகம்" },
  politicaltalk: { parentEn: "Family & Society", parentTa: "குடும்பம் & சமூகம்", labelEn: "Political Talk", labelTa: "அரசியல்" },

  prophet: { parentEn: "Biography", parentTa: "பயோகிராபி", labelEn: "Prophet", labelTa: "ப்ராபட்ஸ்" },
  sahabha: { parentEn: "Biography", parentTa: "பயோகிராபி", labelEn: "Sahabha", labelTa: "சஹாபா" },
  ulama: { parentEn: "Biography", parentTa: "பயோகிராபி", labelEn: "Ulama", labelTa: "உலமா" },
};


  return (
    <div className="container mt-2 jumuah_page">
      <h2 className="mb-4">
  <div className="breadcrumb">
    {categoryMap[slug] ? (
      <>
        {language === "en"
          ? `${categoryMap[slug].parentEn} > ${categoryMap[slug].labelEn}`
          : `${categoryMap[slug].parentTa} > ${categoryMap[slug].labelTa}`}
      </>
    ) : (
      slug
    )}
  </div>
</h2>


      <div className="row">
        <div className="col-lg-8">
          <div className="row g-4">
            {posts.map((post) => (
              <div className="col-md-6" key={post.id}>
                <div className="main-content h-100 d-flex flex-column" style={{ cursor: "pointer" }} onClick={() => openPopup(post.id)}>
                  <img src={getThumbnail(post.firstItem)} className="img-fluid rounded" alt={post.title} />
                  <h5 className="mt-2">{post.title?.[language] || post.title}</h5>
                  <p><small>{new Date(post.published).toLocaleDateString()}</small></p>
                  <p className="flex-grow-1"><small>{post.description || "No description"}</small></p>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={loadMorePosts} disabled={loadingMore}>
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="mb-4 border-bottom pb-3">
            <h6 className="text-uppercase fw-bold border-bottom pb-2">Tags</h6>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {tags.map(tag => (
                <span key={tag.label} className="px-3 py-1 border rounded bg-light text-dark" style={{ fontSize: '0.85rem', cursor: 'pointer' }} onClick={() => navigate(tag.route)}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h6 className="text-uppercase fw-bold border-bottom pb-2">Categories</h6>
            <div className="mt-2" id="categoryAccordion">
              {categories.map((cat, index) => (
                <div className="border-bottom" key={index}>
                  <div className="d-flex justify-content-between align-items-center category-toggle px-2 py-2" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`} style={{ cursor: 'pointer' }}>
                    <span style={{ fontSize: '0.9rem' }}>{cat.label}</span>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <div id={`collapse${index}`} className="collapse" data-bs-parent="#categoryAccordion">
                    <div className="ps-4 pb-2">
                      <ul className="list-unstyled mb-0">
                        {cat.subtopics.map((sub, i) => (
                          <li key={i}>
                            <a href={sub.route} className="text-decoration-none small">{sub.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay d-flex justify-content-center align-items-center" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", zIndex: 1050 }}>
          <div className="popup-content bg-white p-4 rounded position-relative" style={{ maxWidth: "700px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}>
            <div className="position-absolute top-0 end-0 m-3 d-flex gap-3">
              {popupItems[popupIndex]?.link?.match(/\.(jpeg|jpg|png|webp|gif)$/i) && (
                <a href={popupItems[popupIndex].link} download title="Download Image">
                  <span style={{ fontSize: "22px", color: "black" }}><i className="bi bi-download"></i></span>
                </a>
              )}
              {popupItems[popupIndex]?.text_content && (
                <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(popupItems[popupIndex].text_content)}`} download={`${popupItems[popupIndex].title || "text-content"}.txt`} title="Download Text">
                  <span style={{ fontSize: "22px", color: "black" }}><i className="bi bi-download"></i></span>
                </a>
              )}
              <button className="btn-close mt-1" style={{ fontSize: "16px", color: "black" }} onClick={closePopup}></button>
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
    </div>
  );
};

export default CategoryPage;