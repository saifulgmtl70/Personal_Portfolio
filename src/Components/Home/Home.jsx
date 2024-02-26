import { TypeAnimation } from "react-type-animation";

import { FaArrowRightLong } from "react-icons/fa6";

import './Home.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import MYService from "./MyService/MYService";
import { Link } from "react-router-dom";



const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <main >

            <section className="px-10 lg:px-32 pt-20 home_banner font_inter ">
                <div className="flex flex-col lg:flex-row items-center justify-evenly gap-6">

                    <div className="space-y-2 mt-10 lg:text-start"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                        <span className="text-[#1BAA80] text-[17px] dark:text-[#E2E8F0] ">Hello There</span>
                        <h2 className="text-[#E2E8F0] dark:text-[#E2E8F0]  text-[44px] font-[600] w-full " >It’s me Saiful Islam Azad </h2>

                        <TypeAnimation className="text-[#1BAA80] text-[27px]"
                            preRenderFirstString={true}
                            sequence={[
                            500,
                            "I'm a Web Designer ", // initially rendered starting point
                            1000,
                            "I'm a Web Developer ",
                            1000,
                            "I'm a Front-end Developer ",
                            1000,
                            "I'm a Tutor ",
                            500,
                            ]}
                            speed={50}
                        
                            repeat={Infinity}
                        />

                        <p className="text-[#E2E8F0] dark:text-[#E2E8F0] text-[16px] font-normal w-full lg:w-8/12 leading-[30px]">I’m creative designer based in bangladesh, and I’m very passionate and dedicated to my work.</p>
                        <div className="flex items-center justify-start gap-x-1">
                            <Link to="/contact">
                                <button className="px-8 py-4 flex text-center lg:text-start items-center justify-center lg:justify-start gap-3 uppercase tracking-wide hover:tracking-widest rounded-[40px] border border-[#1BAA80]  bg-[#1BAA80] text-[#fff] transition-all delay-200">Hire Me <FaArrowRightLong /></button>
                            </Link>
                        </div>
                    </div>

                    <div className=" " data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                        <img src="https://i.ibb.co/3FJKBpM/bg.png" className="" alt=""   />
                    </div>

                </div>
            </section>

           <MYService></MYService>

           

        </main>
    );
};

export default Home;