import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/style.css";

import MasjidNabawi from '../assets/images/masjid-an-nabawi-750x430.webp';
import PropheticEducation from '../assets/images/the-principles-of-prophetic-education-18-turn-your-closeness-into-action-750x430.jpg';
import Ramadan from '../assets/images/the-first-15-days-of-ramadan-750x430.webp';
import Ramadan2 from '../assets/images/the-first-15-days-of-ramadan-2-jpg.webp';

const Jumuah = () => {
  const navigate = useNavigate();

  // Example posts data
  const posts = [
    { id: 1, image: MasjidNabawi, title: 'Articles of Jumuah', date: 'Feb 17, 2025', description: 'The honorable Hamza was sent to Sayful-Bahr...' },
    { id: 2, image: PropheticEducation, title: 'The Principles of Prophetic Education', date: 'Feb 17, 2025', description: 'The honorable Hamza was sent to Sayful-Bahr...'},
    { id: 3, image: Ramadan, title: 'The First 15 Days of Ramadan', date: 'Feb 10, 2025', description: 'In education and teaching, communicative closeness.'},
    { id: 4, image: Ramadan, title: 'The First 15 Days of Ramadan', date: 'Feb 10, 2025', description: 'In education and teaching, communicative closeness.' },
    { id: 5, image: MasjidNabawi, title: 'The Principles of Prophetic Education', date: 'Feb 17, 2025', description: 'The honorable Hamza was sent to Sayful-Bahr...' },
    { id: 6, image: Ramadan2, title: 'The Principles of Prophetic Education', date: 'Feb 17, 2025', description: 'The honorable Hamza was sent to Sayful-Bahr...' },
  ];

  // Function to handle navigation
  const handleNavigation = (id) => {
    if (id === 1) {
      navigate('/article');
    } else if (id === 2) {
      navigate('/prophetic');
    } else {
      alert("No page available for this post!");
    }
  };

  return (
    <div className="container mt-2 jumuah_page" id="recentPosts">
      <h2>JUMUAH</h2>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <div
              className="main-content h-100 d-flex flex-column"
              onClick={() => handleNavigation(post.id)}
              style={{ cursor: "pointer" }}
            >
              <img src={post.image} className="post-img" alt={post.title} />
              <h5 className="mt-2">{post.title}</h5>
              <p><small>Bismihi | {post.date}</small></p>
              <p className="flex-grow-1"><small>{post.description}</small></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jumuah;
