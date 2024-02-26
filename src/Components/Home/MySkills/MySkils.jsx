import '../AboutUs/About.css';
import ProgressSkills from './ProgressSkills';

const MySkils = () => {
    return (
        <section className=" about_bg px-10 lg:px-24 py-28 dark:bg-[#1E293B]">

            <div className="text-center mb-14">
                <h2 className='text-[#eee] text-[30px]'> <span className='border-b-2 border-b-[#1BAA80] pb-2'>Resume</span> </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
               
                <div className="">
                    {/* <h2 className='text-[#fff] text-[22.5px] leading-[27px]'>My Education</h2> */}
                    <h2 className='text-[#fff] text-[22.5px] leading-[27px]'>My <span className='border-b-2 border-b-[#34AEE6] pb-2'>Education</span> </h2>
                </div>
                  
                <div className="">
                    <h2 className='text-[#fff] text-[22.5px] leading-[27px]'>My <span className='border-b-2 border-b-[#34AEE6] pb-2'>Experience</span> </h2>
                </div>

                <div className="rounded-[3px] border border-[#505e74] p-7"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                    <span className='bg-[#20c997] text-white text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>Ongoing</span>
                    <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>B.Sc in Computer Science & Engineering</h2>

                    <h3 className='text-[15] leading-[24px] text-[#F22225] my-4'>Cox'sBazar International University</h3>
                    <p className='text-[15px] text-[#888]'>Renowned for fostering skilled computer scientists, providing comprehensive education and hands-on experience in the field of computer science.</p>
                </div>

                <div className="rounded-[3px] border border-[#505e74] p-7"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                    <span className='bg-[#20c997] text-white text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>Ongoing</span>
                    <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Front-end Development</h2>

                    <h3 className='text-[15] leading-[24px] text-[#F22225] my-4'>Fiver</h3>
                    <p className='text-[15px] text-[#888]'>Currently specializing in front-end development at Fiverr, I build modern websites, fix bugs, and contribute to user-centric projects.</p>
                </div>

                <div className="rounded-[3px] border border-[#505e74] p-7"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                    <span className='bg-[#20c997] text-white text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>2018-2023</span>
                    <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Diploma in Computer Science & Technology</h2>

                    <h3 className='text-[15] leading-[24px] text-[#F22225] my-4'>Chatogram Polytechninc Institute</h3>
                    <p className='text-[15px] text-[#888]'>Successfully completed a comprehensive diploma program specializing in computer science and technology at this reputable polytechnic institute.</p>
                </div>


                <div className="rounded-[3px] border border-[#505e74] p-7"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                    <span className='bg-[#20c997] text-white text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>2022-2023(4 months)</span>
                    <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Internship (Web Development)</h2>

                    <h3 className='text-[15] leading-[24px] text-[#F22225] my-4'>Well Up Technology</h3>
                    <p className='text-[15px] text-[#888]'>I completed a 4-month web development internship at this company, gaining hands-on experience in front-end technologies and project collaboration.</p>
                </div>

                <div className="rounded-[3px] border border-[#505e74] p-7"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                    <span className='bg-[#20c997] text-white text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>2013-2018</span>
                    <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Secondary School Certifiate(SSC)</h2>

                    <h3 className='text-[15] leading-[24px] text-[#F22225] my-4'>Pookkhali Model High Scoool</h3>
                    <p className='text-[15px] text-[#888]'> Achieved success in the Secondary School Certificate (SSC) examinations from a reputable secondary school with dedication and diligence.</p>
                </div>


                <div className="rounded-[3px] border border-[#505e74] p-7"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                    <span className='bg-[#20c997] text-white text-[14px] leading-[14px] px-3 py-[6px] rounded-[3px] mb-5'>2020-2021</span>
                    <h2 className='text-[19.689px] leading-[24px] text-[#eee] my-6'>Computer Operator</h2>

                    <h3 className='text-[15] leading-[24px] text-[#F22225] my-4'>Tahzibul Banat Madrasa</h3>
                    <p className='text-[15px] text-[#888]'>I previously worked as a computer operator at a this institute, managing computer systems and assisting with technical operations.</p>
                </div>

            </div>


            <div className="text-start mt-10 mb-14">
                <h2 className='text-[#eee] text-[30px]'> My <span className='border-b-2 border-b-[#34AEE6] pb-2'>Skills</span> </h2>
            </div>

            <ProgressSkills/>


        </section>
    );
};

export default MySkils;