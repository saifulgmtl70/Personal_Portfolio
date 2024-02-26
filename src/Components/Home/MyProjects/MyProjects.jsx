import '../AboutUs/About.css';
// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs    } from "react-icons/fa";
// import { FaBootstrap } from "react-icons/fa6";
// import { SiTailwindcss, SiFirebase, SiExpress, SiMongodb    } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io";
// import { Link } from "react-router-dom";

import ProjectSlider from "./ProjectSlider/ProjectSlider";



const MyProjects = () => {
    return (
        <section className=" about_bg px-10 lg:px-24 py-28 dark:bg-[#1E293B]">

            <div className="text-center mb-14">
                <h2 className='text-[#eee] text-[30px]'>Recent <span className='border-b-2 border-b-[#1BAA80] pb-2'>Projects</span> of Mine</h2>
            </div>

            


            <ProjectSlider/>

        </section>
    );
};

export default MyProjects;