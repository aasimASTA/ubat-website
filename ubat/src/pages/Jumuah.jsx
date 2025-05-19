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

  const posts = [
    { id: 1, image: MasjidNabawi, title: 'Articles of Jumuah', date: 'Feb 17, 2025', description: 'The honorable Hamza was sent to Sayful-Bahr...' },
    { id: 2, image: PropheticEducation, title: 'The Principles of Prophetic Education', date: 'Feb 17, 2025', description: 'The honorable Hamza was sent to Sayful-Bahr...' },
    { id: 3, image: Ramadan, title: 'The First 15 Days of Ramadan', date: 'Feb 10, 2025', description: 'In education and teaching, communicative closeness.' },
    { id: 4, image: Ramadan, title: 'The First 15 Days of Ramadan', date: 'Feb 10, 2025', description: 'In education and teaching, communicative closeness.' },
    { id: 5, image: MasjidNabawi, title: 'The Principles of Prophetic Education', date: 'Feb 17, 2025', description: 'The honorable Hamza was sent to Sayful-Bahr...' },
    { id: 6, image: Ramadan2, title: 'The Principles of Prophetic Education', date: 'Feb 17, 2025', description: 'The honorable Hamza was sent to Sayful-Bahr...' },
  ];

  const handleNavigation = (id) => {
    if (id === 1) {
      navigate('/article');
    } else if (id === 2) {
      navigate('/prophetic');
    } else {
      alert("No page available for this post!");
    }
  };

  const tags = ['Kuthba', 'Kitab', 'Ibaadah', 'Purification', 'Family & Society', 'Biography'];
  const categories = ['Kuthba', 'Kitab', 'Ibaadah', 'Purification', 'Family & Society', 'Biography'];

  return (
    <div className="container mt-2 jumuah_page" id="recentPosts">
      <h2 className="mb-4"> <div className="breadcrumb">
      Khutbah &gt; Jumuah
    </div></h2>
      <div className="row">
        {/* Posts - Two Columns */}
        <div className="col-lg-8">
          <div className="row g-4">
            {posts.map((post) => (
              <div className="col-md-6" key={post.id}>
                <div
                  className="main-content h-100 d-flex flex-column "
                  onClick={() => handleNavigation(post.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={post.image} className="img-fluid rounded" alt={post.title} />
                  <h5 className="mt-2">{post.title}</h5>
                  <p><small>Bismihi | {post.date}</small></p>
                  <p className="flex-grow-1"><small>{post.description}</small></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar - One Column */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          {/* Tags */}
          <div className="mb-4 border-bottom pb-3">
            <h6 className="text-uppercase fw-bold border-bottom pb-2">Tags</h6>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 border rounded bg-light text-dark"
                  style={{ fontSize: '0.85rem' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          
{/* Categories */}
<div className="mb-4">
  <h6 className="text-uppercase fw-bold border-bottom pb-2">Categories</h6>
  <div className="mt-2" id="categoryAccordion">
    {categories.map((cat, index) => (
      <div className="border-bottom" key={cat}>
        <div
          className="d-flex justify-content-between align-items-center category-toggle px-2 py-2"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="false"
          aria-controls={`collapse${index}`}
          style={{ cursor: 'pointer' }}
        >
          <span style={{ fontSize: '0.9rem' }}>{cat}</span>
          <i className="bi bi-chevron-down"></i>
        </div>
        <div
          id={`collapse${index}`}
          className="collapse"
          data-bs-parent="#categoryAccordion"
        >
          <div className="ps-4 pb-2">
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-decoration-none small">Subtopic 1</a></li>
              <li><a href="#" className="text-decoration-none small">Subtopic 2</a></li>
              <li><a href="#" className="text-decoration-none small">Subtopic 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Jumuah;
