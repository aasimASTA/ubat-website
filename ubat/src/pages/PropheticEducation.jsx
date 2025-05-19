import React from 'react';

const PropheticEducation = () => {
  return (
    <div className="container mt-5">
      <h1>The Principles of Prophetic Education</h1>
      <p>This is the detailed content about the principles of prophetic education. Add more detailed content here...</p>
    </div>
  );
};

export default PropheticEducation;

// import { db } from "../config/firebase";
// import {
//   collection,
//   query,
//   onSnapshot,
//   doc,
// } from "firebase/firestore";


//state for firestore data

  // const [recentPosts, setRecentPosts] = useState([]);
  // const [popularPosts, setPopularPosts] = useState([]);
  // const [newsData, setNewsData] = useState([]);

  // Fetch Firestore data based on language
  // useEffect(() => {
  //   const langDoc = doc(db, "apps", language);

  //   const recentQuery = query(collection(langDoc, "recentPosts"));
  //   const popularQuery = query(collection(langDoc, "popularPosts"));
  //   const newsQuery = query(collection(langDoc, "news"));

  //   const unsubRecent = onSnapshot(recentQuery, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => doc.data());
  //     setRecentPosts(data);
  //   });

  //   const unsubPopular = onSnapshot(popularQuery, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => doc.data());
  //     setPopularPosts(data);
  //   });

  //   const unsubNews = onSnapshot(newsQuery, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => doc.data());
  //     setNewsData(data);
  //   });
  //    return () => {
  //     unsubRecent();
  //     unsubPopular();
  //     unsubNews();
  //   };
  // }, [language])