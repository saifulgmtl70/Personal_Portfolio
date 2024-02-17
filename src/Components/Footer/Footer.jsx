import { FaFacebookF, FaLinkedinIn, FaTwitter,  FaGithub  } from "react-icons/fa";
import { Link } from "react-router-dom";
import TopButton from "./TopButton";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 top-0 bottom-0 dark-mode-section bg-[#EDF5FE] dark:bg-[#1E293B] dark:text-[#E2E8F0] rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About me</a>
                <a className="link link-hover">Contact me</a>
                <a className="link link-hover">Blogs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav>
                <div className="grid grid-flow-col gap-4">

                    <Link to="https://web.facebook.com/azadgmtl" target="blank" >
                        <FaFacebookF className="text-[20px] text-[#1877F2]"/>
                    </Link>
                    <Link  to="https://www.linkedin.com/in/saiful-islam-316381244/" target="blank">
                        <FaLinkedinIn  className="text-[20px] text-[#0077b5]"/>
                    </Link>
                    <Link >
                        <FaTwitter   className="text-[20px] text-[#1DA1F2]"/>
                    </Link>
                    <Link  to="https://github.com/saifulgmtl70" target="blank">
                        <FaGithub   className="text-[20px] text-[#8B949E ]" />
                    </Link>
                    
                </div>
            </nav> 
            <aside>
                <p className="text-[18px]">Copyright © 2024 - All right reserved by <a href="https://web.facebook.com/azadgmtl" className="text-blue-700 font-bold">Saiful Islam Azad</a> </p>
            </aside>

            <TopButton></TopButton>

        </footer>
    );
};

export default Footer;