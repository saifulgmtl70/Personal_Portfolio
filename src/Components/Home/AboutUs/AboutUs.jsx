
import Azad_ResumePdf from '../../../assets/Azad_Resume.pdf';
import { FaDownload } from "react-icons/fa";





const AboutUs = () => {
    return (
        <section className=" bg-[#FFFFFF] dark:bg-[#1E293B] px-12 py-6" id="aboutme" >


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex flex-col lg:flex-row items-center gap-3"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <div>
                        <img src="https://i.ibb.co/4PvRYq9/IMG-20240105-171104-removebg-preview.png" className="w-full lg:w-[885px] h-auto lg:h-[500px] rounded-md" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Rzqv3G9/320960b56d33df1c2155f8e4c995bf65.png" className="w-full lg:w-[375px] h-auto lg:h-[245px] rounded-md mb-3" alt="" />
                        <img src="https://i.ibb.co/GtPCwJ7/7fe9141c6c8ecdbf58259bfab4868ff5.png" className="w-full lg:w-[375px] h-auto lg:h-[245px] rounded-md" alt="" />
                    </div>
                </div>

                <div className="space-y-3 my-10"  
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <div className='text-start'>
                        <p className="text-[21px]  font-[500] text-[#121A2D] dark:text-[#E2E8F0]">About
                            <span className="text-[#F22225]"> Me</span> 
                        </p>
                    </div>
                    
                        <h2 className="text-[#0F172A] dark:text-[#E2E8F0] text-[28px] font-[600]" >Passionate Front-End Developer | Crafting Digital Experiences | Constant Learner and Problem Solver </h2>

                        <p className="text-[#656a71] dark:text-[#E2E8F0] text-[15px] font-normal leading-[30px]">I’m a dedicated front-end developer with a passion for creating visually captivating and functional websites. I specialize in user-centric design, transforming ideas into engaging online experiences. <br /> I thrive on challenges, continuously expand my skill set, and am committed to excellence. Let’s collaborate to bring your digital vision to life!</p>
                        <div className="flex items-center gap-x-1">
                            <a href={Azad_ResumePdf}
                            download="Azad's_Resume"
                            target="_blank"
                            rel="noreferrer">

                                <button className="px-8 py-4 flex items-center gap-3 uppercase tracking-wide hover:tracking-widest rounded-[40px] border border-[#F22225]  bg-[#F22225] text-[#fff] transition-all delay-200">Download Resume <FaDownload /></button>

                            </a>
                            
                        </div>
                </div>

            </div>

        </section>
    );
};

export default AboutUs;