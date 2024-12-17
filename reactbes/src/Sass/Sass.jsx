import React from 'react';
import './Sass.scss';

const Sass = () => {
  return (
    <div className="cl1">
      <div className="img-area">
        <div className="inner-area">
          <img
            src="https://th.bing.com/th/id/OIP.nURkWURpGxW7PqroM0dyNgHaJ4?w=152&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Profile"
          />
        </div>
      </div>
      <div className="icon arrow">
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="icon dots">
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="name">Rob</div>
      <div className="about">Developer</div>
      <div className="social-icons">
        <a href="#" className="fb">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="insta">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="yt">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="buttons">
        <button>Message</button>
        <button>Subscribe</button>
      </div>
      <div className="social-share">
        <div className="row">
          <i className="far fa-heart"></i>
          <i className="icon-2 fas fa-heart"></i>
          <span>20k</span>
        </div>
        <div className="row">
          <i className="far fa-comment"></i>
          <i className="icon-2 fas fa-comment"></i>
          <span>14k</span>
        </div>
        <div className="row">
          <i className="fas fa-share"></i>
          <span>12k</span>
        </div>
      </div>
    </div>
  );
};

export default Sass;
