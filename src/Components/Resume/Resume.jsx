import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiFirebase, SiNetlify } from 'react-icons/si';
import Marquee from 'react-fast-marquee';
// import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is included in your project

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26] text-[50px]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6] text-[50px]" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3] text-[50px]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38B2AC] text-[50px]" /> },
    // { name: 'Material UI', icon: <SiMaterialui className="text-[#0081CB] text-[50px]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E] text-[50px]" /> },
    { name: 'React JS', icon: <FaReact className="text-[#61DAFB] text-[50px]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#007ACC] text-[50px]" /> },
    { name: 'Next JS', icon: <SiNextdotjs className="text-[#000000] text-[50px]" /> },
    { name: 'Node JS', icon: <FaNodeJs className="text-[#339933] text-[50px]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] text-[50px]" /> },
    { name: 'Express JS', icon: <SiExpress className="text-[#000000] text-[50px]" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28] text-[50px]" /> },
    { name: 'GitHub', icon: <FaGithub className="text-[#181717] text-[50px]" /> },
    { name: 'Netlify', icon: <SiNetlify className="text-[#00C7B7] text-[50px]" /> },
];

const Resume = () => {
    const [tooltip, setTooltip] = useState({ show: false, name: '', x: 0, y: 0 });

    const handleMouseEnter = (name, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({ show: true, name, x: rect.left + rect.width / 2, y: rect.top });
    };

    const handleMouseLeave = () => {
        setTooltip({ show: false, name: '', x: 0, y: 0 });
    };

    return (
        <section className="px-7 lg:px-12 py-14">
            <div className="text-center mb-10 text-[#fff]">
                <h2 className="text-[25px] text-[#fff] uppercase tracking-wider mb-2">Resume & Skills</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-6">
                <div>
                    <div className="mb-8">
                        <h2 className='text-[#fff] text-[22.5px] leading-[27px]'>My <span className='border-b-2 border-b-[#EAE112] pb-2'>Education</span></h2>
                    </div>
                    <div className="rounded-[3px] border border-[#505e74] p-7 mb-4">
                        <span className='bg-[#EAE112] text-[#111] text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>Ongoing</span>
                        <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>B.Sc in Computer Science & Engineering</h2>
                        <h3 className='text-[15px] leading-[24px] text-[#EAE112] my-4'>Port City International University</h3>
                        <p className='text-[15px] text-[#eee]'>Renowned for fostering skilled computer scientists, providing comprehensive education and hands-on experience in the field of computer science.</p>
                    </div>
                    <div className="rounded-[3px] border border-[#505e74] p-7 mb-4">
                        <span className='bg-[#EAE112] text-[#111] text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>2018-2023</span>
                        <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Diploma in Computer Science & Technology</h2>
                        <h3 className='text-[15px] leading-[24px] text-[#EAE112] my-4'>Chatogram Polytechninc Institute</h3>
                        <p className='text-[15px] text-[#eee]'>Successfully completed a comprehensive diploma program specializing in computer science and technology at this reputable polytechnic institute.</p>
                    </div>
                </div>
                <div>
                    <div className="mb-8">
                        <h2 className='text-[#fff] text-[22.5px] leading-[27px]'>My <span className='border-b-2 border-b-[#EAE112] pb-2'>Experience</span></h2>
                    </div>
                    <div className="rounded-[3px] border border-[#505e74] p-7 mb-4">
                        <span className='bg-[#EAE112] text-[#111] text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>Ongoing</span>
                        <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Front-end Development</h2>
                        <h3 className='text-[15px] leading-[24px] text-[#EAE112] my-4'>Fiver</h3>
                        <p className='text-[15px] text-[#eee]'>Currently specializing in front-end development at Fiverr, I build modern websites, fix bugs, and contribute to user-centric projects.</p>
                    </div>
                    <div className="rounded-[3px] border border-[#505e74] p-7 mb-4">
                        <span className='bg-[#EAE112] text-[#111] text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>2022-2023 (4 months)</span>
                        <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Internship (Web Development)</h2>
                        <h3 className='text-[15px] leading-[24px] text-[#EAE112] my-4'>Well Up Technology</h3>
                        <p className='text-[15px] text-[#eee]'>I completed a 4-month web development internship at this company, gaining hands-on experience in front-end technologies and project collaboration.</p>
                    </div>
                </div>
            </div>

            <div className="text-start mt-10 mb-14">
                <h2 className='text-[#eee] text-[30px] mb-5'> My <span className='border-b-2 border-b-[#EAE112] pb-2'>Skills</span> </h2>
                <div className="relative mt-14">
                    <Marquee gradient={false} speed={60} pauseOnHover>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center mx-4"
                                onMouseEnter={(e) => handleMouseEnter(skill.name, e)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {skill.icon}
                            </div>
                        ))}
                    </Marquee>
                    {tooltip.show && (
                        <div
                            className="absolute bg-[#333] text-[#fff] px-2 py-1 rounded"
                            style={{ top: tooltip.y - 40, left: tooltip.x, transform: 'translateX(-50%)' }}
                        >
                            {tooltip.name}
                        </div>
                    )}
                </div>
            </div>
            
        </section>
    );
};

export default Resume;
