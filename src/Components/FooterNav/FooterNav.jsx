import { NavLink } from "react-router-dom";
import './FooterNav.css';
import { FaFileAlt, FaUserCheck } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdContactPhone, MdDisplaySettings } from "react-icons/md";
import { TbMessageStar } from "react-icons/tb";

const FooterNav = () => {
    return (
        <div className="px-5 py-5 z-50 block lg:hidden footernav bg-[#222121] overflow-hidden">
            <ul className="flex items-center footer_nav justify-evenly gap-3">
                <li className="tooltip">
                    <NavLink to="/"><GoHomeFill className="text-[#eee] text-[22px] font-bold"/> 
                        <span className="tooltiptext">Home</span>
                    </NavLink>
                    
                </li>
                <li className="tooltip">
                    <NavLink to="aboutme"><FaUserCheck className="text-[#eee] text-[22px] font-bold"/>
                        <span className="tooltiptext">About Me</span>
                    </NavLink>
                    
                </li>
                <li className="tooltip">
                    <NavLink to="resume"><FaFileAlt className="text-[#eee] text-[22px] font-bold"/>
                        <span className="tooltiptext">Resume</span>
                    </NavLink>
                  
                </li>
                <li className="tooltip">
                    <NavLink to="portfolio"><MdDisplaySettings className="text-[#eee] text-[22px] font-bold"/>
                        <span className="tooltiptext">Portfolio</span>
                    </NavLink>
             
                </li>
                <li className="tooltip">
                    <NavLink to="testimonial"><TbMessageStar className="text-[#eee] text-[22px] font-bold"/>
                        <span className="tooltiptext">Testimonial</span>
                    </NavLink>
                   
                </li>
                <li className="tooltip">
                    <NavLink to="contact"><MdContactPhone className="text-[#eee] text-[22px] font-bold"/>
                        <span className="tooltiptext">Contact Me</span>
                    </NavLink>
                  
                </li>
            </ul>
        </div>
    );
};

export default FooterNav;
