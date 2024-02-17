
// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs    } from "react-icons/fa";
// import { FaBootstrap } from "react-icons/fa6";
// import { SiTailwindcss, SiFirebase, SiExpress, SiMongodb    } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io";
// import { Link } from "react-router-dom";

import ProjectSlider from "./ProjectSlider/ProjectSlider";



const MyProjects = () => {
    return (
        <section className="bg-[#FFFFFF] dark:bg-[#1E293B] px-4 lg:px-20 py-6" id="projects">
            <div className="mx-0 lg:mx-10 mt-5 mb-12 myService_bg relative">
                <div className='text-start'>
                    <div className="line"></div>
                    <p className="text-[28px] ms-2  font-[500] text-[#121A2D] dark:text-[#E2E8F0] pl-4">Recent 
                        <span className="text-[#F22225]"> Projects</span> 
                    </p>
                </div>
            </div>

            


            <ProjectSlider/>

        </section>
    );
};

export default MyProjects;