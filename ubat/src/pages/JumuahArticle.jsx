import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/style.css';

// Import images correctly
import AudioImage from '../assets/images/240_F_322616589_kOQ9iSQZTMQMP3oOpaButsTVZfu74KJf.jpg';
import User1 from '../assets/images/user1.jpg';
import User2 from '../assets/images/user2.jpg';
import SurahImage from '../assets/images/which-surahs-did-the-prophet-muhammad-recite-in-prayers-750x430.webp';
import MasjidImage from '../assets/images/masjid-an-nabawi-750x430.webp';
import ProphetImage from '../assets/images/what-did-our-prophet-used-to-wear-750x430.webp';
import Audio from "../assets/surah-fateh.mp3"

const Article = () => {
  const comments = [
    { id: 1, name: 'Noah Pierre', time: '58 minutes ago', text: 'The explanation was so good to hear...', img: User1, likes: 25, dislikes: 3 },
    { id: 2, name: 'Aasim', time: '8 minutes ago', text: 'Thanks for the video...', img: User2, likes: 2, dislikes: 5 },
    { id: 3, name: 'Skill Sprout', time: '8 minutes ago', text: 'Thanks for the video...', img: User2, likes: 2, dislikes: 5 },
  ];

  const posts = [
    { id: 1, img: SurahImage, title: 'Which Surahs Did the Prophet Recite?', date: 'Feb 17, 2025' },
    { id: 2, img: MasjidImage, title: 'The Construction of Masjid an-Nabawi', date: 'Feb 17, 2025' },
    { id: 3, img: ProphetImage, title: 'What Did the Messenger Wear?', date: 'Feb 17, 2025' },
  ];
  return (
    <div className="container mt-3">
      <div className="row">
        {/* Audio Section */}
        <div className="col-lg-8">
          <div className="audio-container mt-4">
            <img src={AudioImage} alt="Audio Cover" className="audio-image" />
            <audio controls>
              <source src={Audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Comments Section */}
          <div className="comment-container">
            <div className="comment-section">
              <div className="comment-input">
                <textarea placeholder="Add comment..."></textarea>
                <div className="comment-tools">
                  <button className="submit-btn">Submit</button>
                </div>
              </div>
            </div>

            <h5>Comments <span className="text-muted">({comments.length})</span></h5>
            {comments.map(comment => (
              <div className="comment" key={comment.id}>
                <img src={comment.img} alt="User" />
                <div className="comment-content">
                  <h6>{comment.name} <small className="text-muted">• {comment.time}</small></h6>
                  <p>{comment.text}</p>
                  <div className="comment-actions">
                    <i className="bi bi-hand-thumbs-up"></i> {comment.likes}
                    <i className="bi bi-hand-thumbs-down"></i> {comment.dislikes}
                    <i className="bi bi-chat-left-text-fill"></i> Reply
                    <i className="bi bi-three-dots"></i>
                  </div>
                </div>
              </div>
            ))}

            <div className="show-more">Show more ↓</div>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="col-lg-4">
          <h3 className="text-center">Posts</h3>
          <ul className="list-group">
            {posts.map(post => (
              <li key={post.id} className="list-group-item d-flex align-items-center popular-post">
                <img src={post.img} alt={post.title} />
                <a href="#" className="ms-3">{post.title}<br /><small>{post.date}</small></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Article;
