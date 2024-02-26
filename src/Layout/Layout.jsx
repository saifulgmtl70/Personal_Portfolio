import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";// Adjust the path to your Loader component

import './Layout.css';
import Loader from "../Components/Loader/Loader";
import Header from "../Components/Header/Header";


const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay (replace with your actual data fetching logic)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className={`transition-colors min-vh-100 font_inter ${isDarkMode ? "dark" : ""}`}>
      {isLoading ? (
        // Display the loader while content is loading
        <Loader />
      ) : (
        // Display the main content when loading is complete
        <>
          <Header isDarkMode={isDarkMode} onDarkModeToggle={toggleDarkMode} />
          <div className="min-vh-100">
              <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
