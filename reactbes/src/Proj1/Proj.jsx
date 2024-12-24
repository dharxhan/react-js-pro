import React, { useState } from 'react';
import './Pagination/Pagination.css';

const App = () => {
  const recordsPerPage = 1; // Set to control page switching logic
  const [currentPage, setCurrentPage] = useState(1);

  const TotalPages = 2; // Fixed to match carousel and notification pages

  const handleNext = () => {
    if (currentPage < TotalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const Carousel = () => {
    const images = [
      'https://cdn.pixabay.com/photo/2023/04/24/06/08/bottlebrushes-7947303_640.jpg',
      'https://cdn.pixabay.com/photo/2024/09/26/14/08/lizard-9076520_640.jpg',
      'https://cdn.pixabay.com/photo/2021/12/14/15/37/christmas-tree-6870754_640.jpg',
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
      setActiveIndex((activeIndex + 1) % images.length);
    };

    const handlePrev = () => {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    return (
      <div className="carousel">
        <div className="img">
          <img src={images[activeIndex]} alt="" />
        </div>
        <div className="btn">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  };

  const Notifications = () => {
    const [birthdays, setBirthdays] = useState([
      { id: 1, name: 'Alice', photo: 'https://via.placeholder.com/50' },
      { id: 2, name: 'Bob', photo: 'https://via.placeholder.com/50' },
      { id: 3, name: 'Sam', photo: 'https://via.placeholder.com/50' },
      { id: 4, name: 'Jack', photo: 'https://via.placeholder.com/50' },
      { id: 5, name: 'Harlow', photo: 'https://via.placeholder.com/50' },
      { id: 6, name: 'ASAP', photo: 'https://via.placeholder.com/50' },
    ]);

    const clearBirthdays = () => setBirthdays([]);

    return (
      <div className="app">
        <div className="birthday-box">
          <h1>{birthdays.length} Today's Birthdays</h1>
          <div className="birthday-list">
            {birthdays.map((person) => (
              <div key={person.id} className="birthday-item">
                <img src={person.photo} alt={person.name} className="birthday-photo" />
                <span>{person.name}</span>
              </div>
            ))}
          </div>
          <button onClick={clearBirthdays} className="clear-button">
            Clear All
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {currentPage === 1 && <Carousel />}
      {currentPage === 2 && <Notifications />}

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={handlePrev}>
          Prev
        </button>
        <span>
          {currentPage} of {TotalPages}
        </span>
        <button disabled={currentPage === TotalPages} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
