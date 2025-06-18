// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChO5GJZFenKaqw5DWw5UZJGHBIokJ8Pbc",
  authDomain: "salafi-content-staging.firebaseapp.com",
  databaseURL: "https://salafi-content-staging.firebaseio.com",
  projectId: "salafi-content-staging",
  storageBucket: "salafi-content-staging.appspot.com",
  messagingSenderId: "410984507068",
  appId: "1:410984507068:web:265794c6e6ba58c60752b9",
  measurementId: "G-CX192S0BB4"

//   apiKey: "AIzaSyBJa8FW3OjWu9NKVj5Nja5woribVJr2VcY",
//   authDomain: "ubat-app.firebaseapp.com",
//   projectId: "ubat-app",
//   storageBucket: "ubat-app.firebasestorage.app",
//   messagingSenderId: "819733871960",
//   appId: "1:819733871960:web:29c97a507b89db3354392d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage instances
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
