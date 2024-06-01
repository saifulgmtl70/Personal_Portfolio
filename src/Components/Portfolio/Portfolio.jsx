import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <section className="px-7 lg:px-12 py-14">
            <div className="text-center mb-8 text-[#fff]">
                <h2 className="text-[25px] text-[#fff] tracking-wider mb-2">Portfolio</h2>
                <p className="w-full lg:w-5/12 mx-auto leading-7 tracking-wide">Explore some of my recent projects showcasing my skills in front-end development.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pb-6">

                <div className="h-auto rounded-sm bg-[#222121] shadow-xl overflow-hidden transition cursor-pointer flex flex-col">
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img src="https://i.ibb.co/7NyfSkB/Screenshot-2.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out object-cover" />
                    </div>
                    <div className="px-4 py-3 flex-grow">
                        <h2 className="text-[18px] text-[#EAE112] mb-3">DocHouse</h2>
                        <p className="text-[14px] text-[#eee] mb-2">A full-stack doctor portal website with diverse medical services and experienced doctor's lsit. Users must be logged in to book an appointment to get service. Integrated Stripe for payment processing.</p>
                    </div>
                    <div className="px-4 py-3">
                        <div className="flex justify-center items-center gap-3">
                            <Link to="https://github.com/saifulgmtl70/Doc_House_Client" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Client</button>
                            </Link>
                            <Link to="https://github.com/saifulgmtl70/Doc_House_Server" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Server</button>
                            </Link>
                            <Link to="https://dochouse-e305f.web.app" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Live </button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="h-auto rounded-sm bg-[#222121] shadow-xl overflow-hidden transition cursor-pointer flex flex-col"
                >
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img src="https://i.ibb.co/Z6VYVwm/Screenshot-2.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out object-cover" />
                    </div>
                    <div className="px-4 py-3 flex-grow">
                        <h2 className="text-[18px] text-[#EAE112] mb-3">Expense Mastery</h2>
                        <p className="text-[14px] text-[#eee] mb-2">A full-stack expense tracking website. Users can manage their expenses and incomes easily.</p>
                    </div>
                    <div className="px-4 py-3">
                        <div className="flex justify-center items-center gap-3">
                            <Link to="https://github.com/saifulgmtl70/expenseMastery.git" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Code Repo</button>
                            </Link>
                            <Link to="https://expensemastery.netlify.app" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Live Preview</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-auto rounded-sm bg-[#222121] shadow-xl overflow-hidden transition cursor-pointer flex flex-col"
               >
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img src="https://i.ibb.co/z4bxmCb/Screenshot-6.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out object-cover" />
                    </div>
                    <div className="px-4 py-3 flex-grow">
                        <h2 className="text-[18px] text-[#EAE112] mb-3">Bistro Boss Restaurant</h2>
                        <p className="text-[14px] text-[#eee] mb-2">A full-stack restaurant site with diverse food menu items. Users must log in to place orders. Integrated Stripe for payment processing.</p>
                    </div>
                    <div className="px-4 py-3">
                        <div className="flex justify-center items-center gap-3">
                            <Link to="https://github.com/saifulgmtl70/Bistro_Boss_Restaurent_Client.git" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Client</button>
                            </Link>
                            <Link to="https://github.com/saifulgmtl70/Bistro_Boss_Restaurent_Server.git" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Server</button>
                            </Link>
                            <Link to="https://bistrobossrestaurent.netlify.app/" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Live</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-auto rounded-sm bg-[#222121] shadow-xl overflow-hidden transition cursor-pointer flex flex-col"
               >
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img src="https://i.ibb.co/7jVyvH8/luxbeachresort-netlify-app-1.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out object-cover" />
                    </div>
                    <div className="px-4 py-3 flex-grow">
                        <h2 className="text-[18px] text-[#EAE112] mb-3">Lux Beach Resort</h2>
                        <p className="text-[14px] text-[#eee] mb-2">A full-stack hotel website with diverse room options. Users must log in to book rooms. Includes blogs and search filters.</p>
                    </div>
                    <div className="px-4 py-3">
                        <div className="flex justify-center items-center gap-3">
                            <Link to="https://github.com/saifulgmtl70/MernProjects/tree/main/Hoetel_Booking_Client" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Client</button>
                            </Link>
                            <Link to="https://github.com/saifulgmtl70/MernProjects/tree/main/Hotel_Booking_Server" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Server</button>
                            </Link>
                            <Link to="https://luxbeachresort.netlify.app" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Live</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="h-auto rounded-sm bg-[#222121] shadow-xl overflow-hidden transition cursor-pointer flex flex-col"
             >
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img src="https://i.ibb.co/dKdMtKD/flavoure-netlify-app.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out object-cover" />
                    </div>
                    <div className="px-4 py-3 flex-grow">
                        <h2 className="text-[18px] text-[#EAE112] mb-3">FlavoFiesta</h2>
                        <p className="text-[14px] text-[#eee] mb-2">  A baisc full-stack foodbevareg website offering a variety of food and bevrage  items. Users must log in before placing orders. Items added to the cart cannot be duplicated. Used jwt and cookies to secure products and users.</p>
                    </div>
                    <div className="px-4 py-3">
                        <div className="flex justify-center items-center gap-3">
                            <Link to="https://github.com/saifulgmtl70/foodbevrage/tree/main/foodbevrage_Client" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Client</button>
                            </Link>
                            <Link to="https://github.com/saifulgmtl70/foodbevrage/tree/main/foodbevrage_Server" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Server</button>
                            </Link>
                            <Link to="https://flavoure.netlify.app" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Live</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="h-auto rounded-sm bg-[#222121] shadow-xl overflow-hidden transition cursor-pointer flex flex-col"
              >
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img src="https://i.ibb.co/qmZYjrK/educationtraininx-netlify-app.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out object-cover" />
                    </div>
                    <div className="px-4 py-3 flex-grow">
                        <h2 className="text-[18px] text-[#EAE112] mb-3">EduTrainX</h2>
                        <p className="text-[14px] text-[#eee] mb-2"> A front educational course adn training related website a variety of courses and tarinings. Users must log in before seeing the courses and training.</p>
                    </div>
                    <div className="px-4 py-3">
                        <div className="flex justify-center items-center gap-3">
                            <Link to="https://github.com/saifulgmtl70/EduTrainx.git" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Code Repo</button>
                            </Link>
                            <Link to="https://educationtraininx.netlify.app" target="_blank">
                                <button className="px-5 py-2 border border-[#EAE112] transition-all delay-200 hover:bg-[#EAE112] text-[#eee] hover:text-[#222] rounded-md">Live Preview</button>
                            </Link>
                        </div>
                    </div>
                </div>


                


            </div>
        </section>
    );
};

export default Portfolio;
