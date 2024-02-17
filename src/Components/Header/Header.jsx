import {  useEffect, useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LuMoonStar } from "react-icons/lu";
import {  MdLightMode, } from "react-icons/md";

const Header = ({ isDarkMode, onDarkModeToggle }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
};



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldHaveShadow = scrollTop > 0;
      setHasShadow(shouldHaveShadow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <header className={`font_source py-2 fixed z-50 w-full ${hasShadow ? 'shadow-lg z-50 bg-opacity-90 bg-[#EDF5FE] dark:bg-[#1E293B] ' : 'text-[#E2E8F0]'}`}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
          <Link to="/" className="cursor-pointer text-[33px] text-[#F22225]  font_inter font-bold">Saiful <span className="text-[#34AEE6] dark:text-[#E2E8F0] ">Islam</span> </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex gap-5 text-sm">
                <li >
                  <a href="/" className="text-[16px] hover:text-[#34AEE6] dark:text-[#E2E8F0] dark:hover:hover-[#34AEE6] transition-all delay-500">Home</a>
                </li>
                <li >
                  <a href="#aboutme" className="text-[16px] hover:text-[#34AEE6] dark:text-[#E2E8F0] dark:hover:hover-[#34AEE6] transition-all delay-500">About Me</a>
                </li>
                <li >
                  <a href="#resume" className="text-[16px] hover:text-[#34AEE6] dark:text-[#E2E8F0] dark:hover:hover-[#34AEE6] transition-all delay-500">Resume</a>
                </li>
                <li>
                  <a href="#projects" className="text-[16px] hover:text-[#34AEE6] dark:text-[#E2E8F0] dark:hover:hover-[#34AEE6] transition-all delay-500">Projects</a>
                </li>
                <li >
                  <a href="#Blog" className="text-[16px] hover:text-[#34AEE6] dark:text-[#E2E8F0] dark:hover:hover-[#34AEE6] transition-all delay-500">Blog</a>
                </li>
                <li >
                  <a href="#contact" className="text-[16px] hover:text-[#34AEE6] dark:text-[#E2E8F0] dark:hover:hover-[#34AEE6] transition-all delay-500">Contact</a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
                {isDarkMode ? (
                    <MdLightMode
                        className="text-[22px] text-[#338DB9] cursor-pointer"
                        onClick={onDarkModeToggle}
                    />
                    ) : (
                    <LuMoonStar
                        className="text-[22px] text-[#338DB9] cursor-pointer"
                        onClick={onDarkModeToggle}
                    />
                )}

              <div className="block md:hidden">
                <button onClick={toggleMenu} className="rounded  p-2 text-[#1E293B] dark:text-[#fcfcfc] ">
                  {isMenuOpen ? <AiOutlineClose className='w-[20px] h-[23px] text-[#ff4321] rounded-[3px]'/> : <CgMenuRight className='w-[20px] text-[#ff4321] h-[23px] rounded-[3px]'/>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className={`md:hidden w-auto absolute  top-16 left-0 right-0 dark:bg-[#1E293B]  ${hasShadow ? "shadow-lg bg-[#EDF5FE] ":"bg-[#273445] shadow-2xl text-[#fff]"} `}>
          <ul className="flex flex-col items-center border-0 px-20 py-4 my-1 gap-5 text-sm">
            <li onClick={handleMenuItemClick}><a href="#" className='text-[#1E293B] dark:text-[#fcfcfc] text-[18px] font-[600]'>Home</a></li>
            <li onClick={handleMenuItemClick}><a href="#aboutme" className='text-[#1E293B] dark:text-[#fcfcfc] text-[18px] font-[600]'>About Me</a></li>
            <li onClick={handleMenuItemClick}><a href="#resume" className='text-[#1E293B] dark:text-[#fcfcfc] text-[18px] font-[600]'>Resume</a></li>
            <li onClick={handleMenuItemClick}><a href="#projects" className='text-[#1E293B] dark:text-[#fcfcfc] text-[18px] font-[600]'>Projects</a></li>
            <li onClick={handleMenuItemClick}><a href="#Blog" className='text-[#1E293B] dark:text-[#fcfcfc] text-[18px] font-[600]'>Blog</a></li>
            <li onClick={handleMenuItemClick}><a href="#contact" className='text-[#1E293B] dark:text-[#fcfcfc] text-[18px] font-[600]'>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
