import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Resume.css';

import { FaHtml5, FaCss3, FaGithub, FaNode, FaReact, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { BiLogoNetlify } from 'react-icons/bi';








const Resume = () => {

    const skills = [
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3 />, name: 'CSS3' },
        { icon: <FaBootstrap />, name: 'Bootstrap' },
        { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
        { icon: <IoLogoJavascript />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <SiExpress />, name: 'Express.js' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <IoLogoFirebase />, name: 'Firebase' },
        { icon: <FaNode />, name: 'Node.js' },
        { icon: <FaGithub />, name: 'GitHub' },
        { icon: <BiLogoNetlify />, name: 'Netlify' }
      ];

      
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

    return (
        <section className="px-12 py-14">
            <div className="text-center mb-10 text-[#fff]">
                <h2 className="text-[25px] text-[#fff] uppercase tracking-wider mb-2">Resume & Skills </h2>
            </div>


            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-6">

                <div>
                    <div className="mb-8">
                        {/* <h2 className='text-[#fff] text-[22.5px] leading-[27px]'>My Education</h2> */}
                        <h2 className='text-[#fff] text-[22.5px] leading-[27px]'>My <span className='border-b-2 border-b-[#EAE112] pb-2'>Education</span> </h2>
                    </div>

                    <div className="rounded-[3px] border border-[#505e74] p-7 mb-4"
                       >
                        <span className='bg-[#EAE112] text-[#111] text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>Ongoing</span>
                        <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>B.Sc in Computer Science & Engineering</h2>

                        <h3 className='text-[15] leading-[24px] text-[#EAE112] my-4'>Port City International University</h3>
                        <p className='text-[15px] text-[#eee]'>Renowned for fostering skilled computer scientists, providing comprehensive education and hands-on experience in the field of computer science.</p>
                    </div>

                    <div className="rounded-[3px] border border-[#505e74] p-7 mb-4"
                    >
                        <span className='bg-[#EAE112] text-[#111] text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>2018-2023</span>
                        <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Diploma in Computer Science & Technology</h2>

                        <h3 className='text-[15] leading-[24px] text-[#EAE112] my-4'>Chatogram Polytechninc Institute</h3>
                        <p className='text-[15px] text-[#eee]'>Successfully completed a comprehensive diploma program specializing in computer science and technology at this reputable polytechnic institute.</p>
                    </div>

                    

                </div>

                <div>
                    <div className="mb-8">
                        <h2 className='text-[#fff] text-[22.5px] leading-[27px]'>My <span className='border-b-2 border-b-[#EAE112] pb-2'>Experience</span> </h2>
                    </div>

                    <div className="rounded-[3px] border border-[#505e74] p-7 mb-4"
                        >
                        <span className='bg-[#EAE112] text-[#111] text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>Ongoing</span>
                        <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Front-end Development</h2>

                        <h3 className='text-[15] leading-[24px] text-[#EAE112] my-4'>Fiver</h3>
                        <p className='text-[15px] text-[#eee]'>Currently specializing in front-end development at Fiverr, I build modern websites, fix bugs, and contribute to user-centric projects.</p>
                    </div>

                    
                    <div className="rounded-[3px] border border-[#505e74] p-7 mb-4"
                     >
                        <span className='bg-[#EAE112] text-[#111] text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>2022-2023(4 months)</span>
                        <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Internship (Web Development)</h2>

                        <h3 className='text-[15] leading-[24px] text-[#EAE112] my-4'>Well Up Technology</h3>
                        <p className='text-[15px] text-[#eee]'>I completed a 4-month web development internship at this company, gaining hands-on experience in front-end technologies and project collaboration.</p>
                    </div>


                </div>

            </div>


            <div className="text-start mt-10 mb-14">
                <h2 className='text-[#eee] text-[30px] mb-5'> My <span className='border-b-2 border-b-[#EAE112] pb-2'>Skills</span> </h2>
                
               
            </div>


            <Slider {...sliderSettings}>
                {skills.map((skill, index) => (
                <div key={index} className="text-center">
                    <div className="skill_name">
                    {skill.icon}
                    <span className="skill_text">{skill.name}</span>
                    </div>
                </div>
                ))}
            </Slider>



        </section>
    );
};

export default Resume;
