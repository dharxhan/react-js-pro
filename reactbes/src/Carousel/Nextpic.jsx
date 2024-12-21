import React, {useState} from 'react';
import './Nextpic/Nextpic.css';

const App = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2023/02/18/11/22/cactus-7797750_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/09/26/14/08/lizard-9076520_640.jpg",
    "https://cdn.pixabay.com/photo/2021/12/14/15/37/christmas-tree-6870754_640.jpg",


  ];
  const[activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1)%images.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length)%images.length);
  };


  return (
    <div className='App'>
      <div className='img'>
        <img src={images[activeIndex]} alt="" />
      </div>
      <div className='btn'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App
