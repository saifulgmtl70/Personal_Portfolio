import React from 'react';
import './Loader.css'; // Import the CSS for the loader

const Loader = () => {
    return (
        <div className="loader-container">
            <img src="https://i.ibb.co/RN13NRV/spiral-css-preloader.gif" alt="Loading..." className="loader-image" />
        </div>
    );
};

export default Loader;
