import React, { useState } from 'react';
import './Pagination/Pagination.css'; // Create a CSS file for styling

const App = () => {
  const [birthdays, setBirthdays] = useState([
    { id: 1, name: 'Alice', photo: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', photo: 'https://via.placeholder.com/50' },
    { id: 3, name: 'sam', photo: 'https://via.placeholder.com/50' },
    { id: 4, name: 'jack', photo: 'https://via.placeholder.com/50' },
    { id: 5, name: 'harlow', photo: 'https://via.placeholder.com/50' },
    { id: 6, name: 'asap', photo: 'https://via.placeholder.com/50' },
   
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
        <button onClick={clearBirthdays} className="clear-button">Clear All</button>
      </div>
    </div>
  );
};

export default App;