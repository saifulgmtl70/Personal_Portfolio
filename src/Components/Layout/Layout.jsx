import { Link, NavLink, Outlet } from "react-router-dom";

import './Layout.css';
import { FaFacebookF, FaFileAlt, FaLinkedinIn, FaUserCheck } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa6";

import { GoHomeFill } from "react-icons/go";
import { MdContactPhone, MdDisplaySettings } from "react-icons/md";
import { TbMessageStar } from "react-icons/tb";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import FooterNav from "../FooterNav/FooterNav";







const Layout = () => {





    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <main className="poetsen-one-regular">


            <section className="flex">
                <div className="hidden lg:block w-full lg:w-2/12">
                    <div className="bg-[#0E0E0E] px-4 sidemenu h-full sticky top-0 -mt-5 list-none ">
                        <div className="py-3  mb-12 flex ">
                            <Link to="/" className="text-[#EAE112] mt-7 px-3 pacifico-regular font-extrabold text-[25px] flex items-center gap-2"> Saiful Islam  </Link>
                        </div>

                        <li className="-mt-[14px] mb-5">
                            <NavLink to="/" className="flex items-center gap-[7px]  py-5 px-3 uppercase transition-none text-[#fff]  transition-all delay-100 font-[700]">
                                <GoHomeFill />
                                <p className="text-[16px]"> Home</p>
                            </NavLink>
                        </li>

                        <li className="-mt-[14px] mb-5">
                            <NavLink to="aboutme" className="flex items-center gap-[7px] uppercase py-5 px-3  transition-none text-[#fff] transition-all delay-100 font-[700]">
                                <FaUserCheck />
                                <p className="text-[16px]"> About me</p>
                            </NavLink>
                        </li>

                        <li className="-mt-[14px] mb-5">
                            <NavLink to="resume" className="flex items-center gap-[7px] uppercase py-5 px-3  transition-none text-[#fff] transition-all delay-100 font-[700]">
                                <FaFileAlt />
                                <p className="text-[16px]"> Resume </p>
                            </NavLink>
                        </li>

                        <li className="-mt-[14px]  mb-5">
                            <NavLink to="portfolio" className="flex items-center gap-[7px] py-5 px-3 uppercase transition-none text-[#fff] transition-all delay-100 font-[700]">
                                <MdDisplaySettings />
                                <p className="text-[16px]"> Portfolio</p>
                            </NavLink>
                        </li>

                        <li className="-mt-[14px]  mb-5">
                            <NavLink to="testimonial" className="flex items-center gap-[7px] py-5 px-3  transition-none text-[#fff] transition-all delay-100 font-[700]">
                                <TbMessageStar />
                                <p className="text-[16px]"> Testimonial</p>
                            </NavLink>
                        </li>

                        <li className="-mt-[14px]  mb-5">
                            <NavLink to="contact" className="flex items-center gap-[7px] py-5 px-3  transition-none text-[#fff] transition-all delay-100 font-[700]">
                                <MdContactPhone />
                                <p className="text-[16px]"> Contact Me</p>
                            </NavLink>
                        </li>

                        



                        <ul className="flex items-center gap-5 justify-center mt-3">
                            <li>
                                <Link to="https://www.facebook.com/azadgmtl" target="_blank">
                                    <FaFacebookF className="text-[#fff] hover:text-[#EAE112] text-[20px] font-extralight"/>
                                </Link>
                            </li>

                            <li>
                                <Link to="https://github.com/saifulgmtl70" target="_blank">
                                    <FaGithub className="text-[#fff] hover:text-[#EAE112] text-[20px] font-extralight"/>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="https://www.linkedin.com/in/saiful-islam-azad" target="_blank">
                                    <FaLinkedinIn className="text-[#fff] hover:text-[#EAE112] text-[20px] font-extralight"/>
                                </Link>
                            </li>

                            <li>
                                <Link to="#">
                                    <FaTwitter className="text-[#fff] hover:text-[#EAE112] text-[20px] font-extralight"/>
                                </Link>
                            </li>
                        </ul>

                    </div>

                    

                </div>
            

                <div className="w-full relative z lg:w-10/12 h-[100vh] bg-[#1C1C1C] overflow-y-scroll">
                    <div>
                        <Outlet></Outlet>
                        <FooterNav/>
                    </div>
                </div>
                
            </section>


           

            
        </main>
    );
};

export default Layout;


