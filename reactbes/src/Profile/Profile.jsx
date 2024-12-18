import React from 'react';
import './Profile.css';
import toggleDarkMode from './Togglemode.js';

const Profile = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">DHA</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <button onClick={toggleDarkMode} className="toggle-btn">
            Toggle Mode
          </button>
        </div>
      </nav>
      <div className="main-container">
        {/* Profile Section */}
        <div className="profile-container">
          <div className="photo">
            <img
              src="https://th.bing.com/th/id/OIP.eFTczMxvarsirqD8dCbfQgHaEN?w=326&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Sudesh D Photo"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="content-container">
          <div className="details">
            <h1>DHA</h1>
            <p>
              <strong>Position:</strong> Software Engineer
            </p>
            <p>
              <strong>Company:</strong> Deus Tech
            </p>
            <p>
              <strong>Client:</strong> Carl Zeiss
            </p>
            <p>
              <strong>Year:</strong> 2023 - Present
            </p>
            <p>Developing medical-related web applications using React.</p>
          </div>

        
        </div>
        
      </div>
      <div className="status-bars">
            <div className="status-bar">
              <div className="status-bar-fill" style={{ width: '85%' }}></div>
              <span className="status-bar-text">React: 85%</span>
            </div>
            <div className="status-bar">
              <div className="status-bar-fill" style={{ width: '90%' }}></div>
              <span className="status-bar-text">JavaScript: 90%</span>
            </div>
            <div className="status-bar">
              <div className="status-bar-fill" style={{ width: '80%' }}></div>
              <span className="status-bar-text">CSS: 80%</span>
            </div>
            <div className="status-bar">
              <div className="status-bar-fill" style={{ width: '70%' }}></div>
              <span className="status-bar-text">Github: 70%</span>
            </div>
            <div className="status-bar">
              <div className="status-bar-fill" style={{ width: '75%' }}></div>
              <span className="status-bar-text">Python: 75%</span>
            </div>
          </div>
          
    </div>
  );
};

export default Profile;
