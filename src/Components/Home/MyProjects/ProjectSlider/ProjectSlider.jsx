import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './ProjectSlider.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs    } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss, SiFirebase, SiExpress, SiMongodb    } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { Link } from "react-router-dom";


const ProjectSlider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 800, min: 465 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 465, min: 0 },
          items: 1
        }
    };

    return (
        <div>
            <Carousel responsive={responsive}>

                <div className="" >

                    <div className="card w-full lg:w-96 bg-base-200 shadow-md border rounded-[4px] relative font_source">
                        <figure>
                            <img
                            src="https://i.ibb.co/z4bxmCb/Screenshot-6.png"
                            alt="Shoes"
                            className="transition-transform transform hover:scale-105"
                            />
                        </figure>
                        <div className="overlay flex items-center justify-center flex-col px-5 absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                                <Link to="https://bistrobossrestaurent.netlify.app/" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px] rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Live Link</button>
                                </Link> 
                            <div className="flex items-center gap-3 my-3">
                                    
                                    <Link to="https://github.com/saifulgmtl70/Bistro_Boss_Restaurent_Server.git" target="blank">
                                        <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Server Repo </button>
                                    </Link> 
                                    <Link to="https://github.com/saifulgmtl70/Bistro_Boss_Restaurent_Client.git" target="blank">
                                        <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Client Repo</button>
                                    </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-[#16304C] dark:text-[#E2E8F0]">Bistro Boss Restaurent Website</h2>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]"> A full-stack restaurant website offering a variety of food menu items. Users must log in before placing orders. Items added to the cart cannot be duplicated.Also have a secure admin panel for managing food items and users. Integrated Stripe for payment processing. </p>

                            <div className="card-actions ">
                                <h2 className="font-bold text-[#2C8EBF] text-[19px]">Tools Used:</h2>
                                <div className="flex items-center my-2 gap-2">
                                    <FaHtml5 className="text-[#FF0000] font-bold text-[18px]" />
                                    <FaCss3Alt className="text-[#264de4] font-bold text-[18px]" />
                                    <SiTailwindcss  className="text-[#1BAAEA] font-bold text-[18px]"/>
                                    <FaReact  className="text-[#61dafb] font-bold text-[18px]" />
                                    <SiFirebase   className="text-[#FFA611] font-bold text-[18px]" />
                                    <FaNodeJs    className="text-[#3c873a] font-bold text-[18px]" />
                                    <SiExpress   className="text-[#727171] font-bold text-[18px]"   />
                                    <SiMongodb   className="text-[#3D9B35] font-bold text-[18px]"    />
                                </div>

                                

                            </div>

                        </div>
                    </div>

                </div>

                <div>
                    <div className="card w-full lg:w-96 bg-base-200 shadow-md border rounded-[4px] relative font_source">
                        <figure>
                            <img
                            src="https://i.ibb.co/7jVyvH8/luxbeachresort-netlify-app-1.png"
                            alt="Shoes"
                            className="transition-transform transform hover:scale-105"
                            />
                        </figure>
                        <div className="overlay flex items-center justify-center flex-col px-5 absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                            <Link to="https://luxbeachresort.netlify.app/" target="blank">
                                <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px] rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Live Link</button>
                            </Link> 
                            <div className="flex items-center gap-3 my-3">
                                    
                                <Link to="https://github.com/saifulgmtl70/MernProjects/tree/main/Hotel_Booking_Server" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Server Repo </button>
                                </Link> 
                                <Link to="https://github.com/saifulgmtl70/MernProjects/tree/main/Hoetel_Booking_Client" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Client Repo</button>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-[#16304C] dark:text-[#E2E8F0]">LuxBeach Resort Website</h2>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]"> A full-stack hotel website offering a variety of hotel rooms. Users must log in before booking rooms. The room which is added to the cart cannot be duplicated. Also included blogs and search filter  </p>

                            <div className="card-actions ">
                                <h2 className="font-bold text-[#2C8EBF] text-[19px]">Tools Used:</h2>
                                <div className="flex items-center my-2 gap-2">
                                    <FaHtml5 className="text-[#FF0000] font-bold text-[18px]" />
                                    <FaCss3Alt className="text-[#264de4] font-bold text-[18px]" />
                                    <SiTailwindcss  className="text-[#1BAAEA] font-bold text-[18px]"/>
                                    <FaReact  className="text-[#61dafb] font-bold text-[18px]" />
                                    <SiFirebase   className="text-[#FFA611] font-bold text-[18px]" />
                                    <FaNodeJs    className="text-[#3c873a] font-bold text-[18px]" />
                                    <SiExpress   className="text-[#727171] font-bold text-[18px]"   />
                                    <SiMongodb   className="text-[#3D9B35] font-bold text-[18px]"    />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                
                <div>
                    <div className="card w-full lg:w-96 bg-base-200 shadow-md border rounded-[4px] relative font_source">
                        <figure>
                            <img
                            src="https://i.ibb.co/dKdMtKD/flavoure-netlify-app.png"
                            alt="Shoes"
                            className="transition-transform transform hover:scale-105"
                            />
                        </figure>
                        <div className="overlay flex items-center justify-center flex-col px-5 absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                            <Link to="https://flavoure.netlify.app/" target="blank">
                                <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px] rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Live Link</button>
                            </Link> 
                            <div className="flex items-center gap-3 my-3">
                                    
                                <Link to="https://github.com/saifulgmtl70/foodbevrage/tree/main/foodbevrage_Server" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Server Repo </button>
                                </Link> 
                                <Link to="https://github.com/saifulgmtl70/foodbevrage/tree/main/foodbevrage_Client" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Client Repo</button>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-[#16304C] dark:text-[#E2E8F0]">FalvoureFesta FoodBevrage Website</h2>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]"> A baisc full-stack foodbevareg website offering a variety of food and bevrage  items. Users must log in before placing orders. Items added to the cart cannot be duplicated. Used jwt and cookies to secure products and users   </p>

                            <div className="card-actions ">
                                <h2 className="font-bold text-[#2C8EBF] text-[19px]">Tools Used:</h2>
                                <div className="flex items-center my-2 gap-2">
                                    <FaHtml5 className="text-[#FF0000] font-bold text-[18px]" />
                                    <FaCss3Alt className="text-[#264de4] font-bold text-[18px]" />
                                    <SiTailwindcss  className="text-[#1BAAEA] font-bold text-[18px]"/>
                                    <FaReact  className="text-[#61dafb] font-bold text-[18px]" />
                                    <SiFirebase   className="text-[#FFA611] font-bold text-[18px]" />
                                    <FaNodeJs    className="text-[#3c873a] font-bold text-[18px]" />
                                    <SiExpress   className="text-[#727171] font-bold text-[18px]"   />
                                    <SiMongodb   className="text-[#3D9B35] font-bold text-[18px]"    />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div>
                    <div className="card w-full lg:w-96 bg-base-200 shadow-md border rounded-[4px] relative font_source">
                        <figure>
                            <img
                            src="https://i.ibb.co/Z6VYVwm/Screenshot-2.png"
                            alt="Shoes"
                            className="transition-transform transform hover:scale-105"
                            />
                        </figure>
                        <div className="overlay flex items-center justify-center px-5 absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                            
                            <div className="flex items-center gap-3 my-3">
                                <Link to="https://expensemastery.netlify.app/" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px] rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Live Link</button>
                                </Link> 
                                <Link to="https://github.com/saifulgmtl70/expenseMastery.git" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Code Repo</button>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-[#16304C] dark:text-[#E2E8F0]">ExpenseMastery  Website</h2>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]"> A full-stack Expense Tracking website. Users can include and manage their expense and icomes acount here  </p>

                            <div className="card-actions ">
                                <h2 className="font-bold text-[#2C8EBF] text-[19px]">Tools Used:</h2>
                                <div className="flex items-center my-2 gap-2">
                                    <FaHtml5 className="text-[#FF0000] font-bold text-[18px]" />
                                    <FaCss3Alt className="text-[#264de4] font-bold text-[18px]" />
                                    <SiTailwindcss  className="text-[#1BAAEA] font-bold text-[18px]"/>
                                    <FaReact  className="text-[#61dafb] font-bold text-[18px]" />
                                    <SiFirebase   className="text-[#FFA611] font-bold text-[18px]" />
                                    <FaNodeJs    className="text-[#3c873a] font-bold text-[18px]" />
                                    <SiExpress   className="text-[#727171] font-bold text-[18px]"   />
                                    <SiMongodb   className="text-[#3D9B35] font-bold text-[18px]"    />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div>
                    <div className="card w-full lg:w-96 bg-base-200 shadow-md border rounded-[4px] relative font_source">
                        <figure>
                            <img
                            src="https://i.ibb.co/qmZYjrK/educationtraininx-netlify-app.png"
                            alt="Shoes"
                            className="transition-transform transform hover:scale-105"
                            />
                        </figure>
                        <div className="overlay flex items-center justify-center px-5 absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                            
                            <div className="flex items-center gap-3 my-3">
                                <Link to="https://educationtraininx.netlify.app/" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px] rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Live Link</button>
                                </Link> 
                                <Link to="https://github.com/saifulgmtl70/EduTrainx.git" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Code Repo</button>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-[#16304C] dark:text-[#E2E8F0]">EduTrainX Website</h2>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]"> A front educational course adn training related website a variety of courses and tarinings. Users must log in before seeing the courses and training.  </p>

                            <div className=" flex items-start justify-center flex-col">
                                <h2 className="font-bold text-[#2C8EBF] text-[19px]">Tools Used:  </h2>
                               
                                <div className="flex items-center my-2 gap-2">
                                    
                                    <FaHtml5 className="text-[#FF0000] font-bold text-[18px]" />
                                    <FaCss3Alt className="text-[#264de4] font-bold text-[18px]" />
                                    <SiTailwindcss  className="text-[#1BAAEA] font-bold text-[18px]"/>
                                    <FaReact  className="text-[#61dafb] font-bold text-[18px]" />
                                    <SiFirebase   className="text-[#FFA611] font-bold text-[18px]" />
                                
                                </div>

                            </div>

                        </div>
                    </div>

                </div>


                <div>
                    <div className="card w-full lg:w-96 bg-base-200 shadow-md border rounded-[4px] relative font_source">
                        <figure>
                            <img
                            src="https://i.ibb.co/y50f6ps/project-02.png"
                            alt="Shoes"
                            className="transition-transform transform hover:scale-105"
                            />
                        </figure>
                        <div className="overlay flex items-center justify-center px-5 absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                            
                            <div className="flex items-center gap-3 my-3">
                                <Link to="https://azadgmtl.github.io/edu.university/" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px] rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Live Link</button>
                                </Link> 
                                <Link to="https://github.com/azadgmtl/edu.university.git" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Code Repo</button>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-[#16304C] dark:text-[#E2E8F0]">Edumodo University Website</h2>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]"> A front-end university website. It is just a design base, static landing page. It is cloned design from themforest theme.   </p>

                            <div className="flex items-start justify-center flex-col ">
                                <h2 className="font-bold text-[#2C8EBF] text-[19px]">Tools Used:</h2>
                             
                                <div className="flex items-center my-2 gap-2">
                                    <FaHtml5 className="text-[#FF0000] font-bold text-[18px]" />
                                    <FaCss3Alt className="text-[#264de4] font-bold text-[18px]" />
                                    <FaBootstrap  className="text-[#7211F6] font-bold text-[18px]" />
                                    <IoLogoJavascript   className="text-[#E8D44D] font-bold text-[18px]" />
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div>
                    <div className="card w-full lg:w-96 bg-base-200 shadow-md border rounded-[4px] relative font_source">
                        <figure>
                            <img
                            src="https://i.ibb.co/QJKCV48/project-03.png"
                            alt="Shoes"
                            className="transition-transform transform hover:scale-105"
                            />
                        </figure>
                        <div className="overlay flex items-center justify-center px-5 absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                            
                            <div className="flex items-center gap-3 my-3">
                                <Link to="https://myresturent.netlify.app/" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px] rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Live Link</button>
                                </Link> 
                                <Link to="https://github.com/azadgmtl/myrestu.git" target="blank">
                                    <button className="flex items-center gap-3 uppercase bg-[#5AB9C1] px-6 py-[10px]  rounded-[3px] text-[#fff] transition-all delay-200 font-[600]">Code Repo</button>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-[#16304C] dark:text-[#E2E8F0]">MyRestu Website</h2>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]"> A landing page of rstaurent website. It is also a cloning website. It is a static page. Designed for practice purpose.   </p>

                            <div className="flex items-start justify-center flex-col">
                                <h2 className="font-bold text-[#2C8EBF] text-[19px]">Tools Used:</h2>
                             
                                <div className="flex items-center my-2 gap-2">
                                    <FaHtml5 className="text-[#FF0000] font-bold text-[18px]" />
                                    <FaCss3Alt className="text-[#264de4] font-bold text-[18px]" />
                                    <FaBootstrap  className="text-[#7211F6] font-bold text-[18px]" />
                                    <IoLogoJavascript   className="text-[#E8D44D] font-bold text-[18px]" />
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                </div>





                
            </Carousel>;
        </div>
    );
};

export default ProjectSlider;