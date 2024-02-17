// TopButton.js

import  { useState, useEffect } from 'react';
// Assuming you have the correct import for the arrow icon
import './footer.css'; // Your styles for the button
import { FaAnglesUp } from 'react-icons/fa6';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 200; // Adjust the threshold as needed

    setIsVisible(scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className={`top-button ${isVisible ? 'visible' : ''}`} onClick={handleScrollToTop}>
      {/* <FaAnglesUp /> */}
      <FaAnglesUp/>
    </button>
  );
};

export default TopButton;
