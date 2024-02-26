
import Azad_ResumePdf from '../../../assets/Azad_Resume.pdf';
import { FaDownload } from "react-icons/fa";

import './About.css';
import { Link } from 'react-router-dom';




const AboutUs = () => {
    return (
        <section className="h-[100%] lg:h-[100vh] about_bg px-10 lg:px-24 py-28 dark:bg-[#1E293B]" id="aboutme" >

            <div className="text-center mb-14">
                <h2 className='text-[#eee] text-[30px]'>Know <span className='border-b-2 border-b-[#1BAA80]'>Me</span> More</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-2"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                    <h2 className='text-[#eae0e0] text-[26px] mb-4'>I'm  <span className='text-[#20C997]'>Saiful Islam Azad</span> , a Front-end Developer</h2>
                    <p className='text-[15px] leading-[27px] text-[#eee] mb-2'>I'm a dedicated front-end developer passionate about crafting immersive digital experiences. With a blend of creativity and technical expertise, I specialize in building user-friendly interfaces that captivate and engage. My journey in web development is fueled by a relentless curiosity and a commitment to continuous learning. Beyond coding, I thrive on understanding user needs and translating them into intuitive designs. Let's collaborate and turn ideas into reality!</p>
                    <p className='text-[15px] leading-[27px] text-[#eee]'>Driven by a love for elegant design and a penchant for problem-solving, I'm dedicated to creating seamless digital experiences that leave a lasting impression.</p>
                </div>

                <div className=""
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                    <ul className=' space-y-3'>
                        <li className='border-b pb-4 mb-6'>
                            <h3 className='text-[17px] text-[#eee] leading-[22.5px] font-bold '>Name: <span className='text-[#20c997] ms-4 font-normal'>Saiful Islam</span></h3>
                        </li>

                        <li className='border-b pb-4 mb-6'>
                            <h3 className='text-[17px] text-[#eee] leading-[22.5px] font-bold '>Email: <span className='text-[#20c997] ms-4 font-normal'>
                                <Link to="mailto:azadcoxgmtl@gmail.com">azadcoxgmtl@gmail.com</Link>
                            </span></h3>
                        </li>

                        
                        <li className='border-b pb-4 mb-6'>
                            <h3 className='text-[17px] text-[#eee] leading-[22.5px] font-bold '>Age: <span className='text-[#20c997] ms-4 font-normal'>22
                            </span></h3>
                        </li>

                           
                        <li className='border-b pb-4 mb-6'>
                            <h3 className='text-[17px] text-[#eee] leading-[22.5px] font-bold '>From: <span className='text-[#20c997] ms-4 font-normal'>Cox'sBazar, Bangladesh
                            </span></h3>
                        </li>
                           
                        <li className=''>
                            <div className="flex items-center justify-start gap-x-1">
                                <a href={Azad_ResumePdf}
                                download="Azad's_Resume"
                                target="_blank"
                                rel="noreferrer">

                                    <button className="px-8 py-4 flex items-center gap-3 uppercase tracking-wide hover:tracking-widest rounded-[40px] border border-[#20c997]  bg-[#20c997] text-[#fff] transition-all delay-200">Download Resume <FaDownload /></button>

                                </a>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
           

        </section>
    );
};

export default AboutUs;