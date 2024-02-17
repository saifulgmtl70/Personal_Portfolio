

const MYService = () => {
    return (
        <section className="bg-[#FFFFFF] dark:bg-[#1E293B] px-12 py-6">
            <div className=" mx-10 mt-5 mb-12 myService_bg relative">
                <div className='text-start mx-auto'>
                    <div className="line"></div>
                    <p className="text-[25px] ms-2  font-[500] text-[#121A2D] dark:text-[#E2E8F0] pl-4">My
                        <span className="text-[#F22225]"> Services</span> 
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                <div className="overflow-hidden service_Card rounded-[2px] border p-7 dark:border-[#5AB9C1] bg-white dark:bg-[#17324E] dark:text-[#E2E8F0] shadow-lg transition-all duration-300"  data-aos="zoom-in-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <img src='https://i.ibb.co/FnTLsGP/coding.png' className='w-[50px] h-[50px]' />

                    <div className="mt-2">
                        <h3 className='text-[25px] font-[500] text-[#122033] dark:text-[#E2E8F0] leading-relaxed mb-1'>Web Design & Development</h3>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]">
                        Crafting visually appealing and user-friendly websites. Ensuring seamless navigation and responsive design for various devices.
                        </p>
                        <button className='text-[#F22225] flex items-center gap-3 text-[17px] border-l-2 border-[#F22225] pl-2 my-2'>
                            Read More
                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden service_Card rounded-[2px] border p-7 dark:border-[#5AB9C1] bg-white dark:bg-[#17324E] dark:text-[#E2E8F0] shadow-lg transition-all duration-300 "  data-aos="zoom-in-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                    <img src='https://i.ibb.co/Rbpz4vm/atom.png' className='w-[50px] h-[50px]' />

                    <div className="mt-2">
                        <h3 className='text-[25px] font-[500] text-[#122033] dark:text-[#E2E8F0] leading-relaxed mb-1'>React JS Development</h3>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]">
                        Building dynamic and interactive user interfaces with React JS Implementing state-of-the-art features to enhance user engagement.
                        </p>
                        <button className='text-[#F22225] flex items-center gap-3 text-[17px] border-l-2 border-[#F22225] pl-2 my-2'>
                            Read More
                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </button>
                    </div>
                </div>


                <div className="overflow-hidden service_Card rounded-[2px] border p-7 dark:border-[#5AB9C1] bg-white dark:bg-[#17324E] dark:text-[#E2E8F0] shadow-lg transition-all duration-300 " data-aos="zoom-in-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                    <img src='https://i.ibb.co/PTJCjhb/responsive-design.png' className='w-[50px] h-[50px]' />

                    <div className="mt-2">
                        <h3 className='text-[25px] font-[500] text-[#122033] dark:text-[#E2E8F0] leading-relaxed mb-1'>Responsive Web Design</h3>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]">
                        Creating websites that look stunning and function flawlessly across desktops, tablets, and mobile devices. Prioritizing a mobile-first approach to reach a broader audience.
                        </p>
                        <button className='text-[#F22225] flex items-center gap-3 text-[17px] border-l-2 border-[#F22225] pl-2 my-2'>
                            Read More
                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </button>
                    </div>

                 

                </div>

                <div className="overflow-hidden service_Card rounded-[2px] border border p-7 dark:border-[#5AB9C1] bg-white dark:bg-[#17324E] dark:text-[#E2E8F0] shadow-lg transition-all duration-300 " data-aos="zoom-in-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                    <img src='https://i.ibb.co/WzHJ8jp/speed-radar.png' className='w-[50px] h-[50px]' />

                    <div className="mt-2">
                        <h3 className='text-[25px] font-[500] text-[#122033] dark:text-[#E2E8F0] leading-relaxed mb-1'>Optimization and Performance</h3>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]">
                        Enhancing website speed and performance for optimal user experience. Implementing best practices for efficient code and resource utilization.
                        </p>
                        <button className='text-[#F22225] flex items-center gap-3 text-[17px] border-l-2 border-[#F22225] pl-2 my-2'>
                            Read More
                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </button>
                    </div>

                 

                </div>

                
            </div>
            
        </section>
    );
};

export default MYService;