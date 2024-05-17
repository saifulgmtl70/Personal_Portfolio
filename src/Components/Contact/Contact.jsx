
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <section className="px-5 lg:px-14 py-12">
            <div className="text-center mb-8 text-[#fff]">
                <h2 className="text-[25px] text-[#fff] tracking-wider mb-2">CONTACT ME</h2>
                <p className="w-full lg:w-5/12 mx-auto leading-7 tracking-wide">I design and code beautifully simple things and i love what i do. Just simple like that!.</p>
            </div>


            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-8">
                
                <div className="h-auto rounded-sm shadow-xl bg-[#222121] p-5">
                    <div className="flex items-center gap-5">
                        <div className="p-3 rounded-full bg-[#EAE112]">
                            <FaPhone />
                        </div>
                        <div className="text-[#eee]">
                            <p className="text-[17px]">Phone</p>
                            <h3 className="text-[18px]">+8801848396170</h3>
                        </div>
                    </div>
                </div>


                
                <div className="h-auto rounded-sm shadow-xl bg-[#222121] p-5">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-[#EAE112]">
                            <MdEmail />
                        </div>
                        <div className="text-[#eee]">
                            <p className="text-[17px]">Email</p>
                            <h3 className="text-[18px]">azadcoxgmtl@gmail.com</h3>
                        </div>
                    </div>
                </div>

                <div className="h-auto rounded-sm shadow-xl bg-[#222121] p-5">
                    <div className="flex items-center gap-5">
                        <div className="p-3 rounded-full bg-[#EAE112]">
                            <FaLocationDot />
                        </div>
                        <div className="text-[#eee]">
                            <p className="text-[17px]">Location</p>
                            <h3 className="text-[18px]">Patenga, Chattogram</h3>
                        </div>
                    </div>
                </div>

                
                
            </div>

            <form className="w-11/12">
                <h2 className="text-[23px] text-[#EAE112] uppercase font-bold text-center mt-3 mb-6">get in touch</h2>

                <div className="flex flex-col lg:flex-row items-center gap-4 mb-9">
                    <div className="w-full mb-5 lg:mb-0">
                        <input type="text" className="w-full px-3 py-3 rounded-[4px] bg-[#222121] focus:outline-0 border border-[#EAE112] text-[#fff] placeholder:text-[#fff]" placeholder="Name" />
                    </div>
                    <div className="w-full">
                        <input type="text" className="w-full px-3 py-3 rounded-[4px] bg-[#222121] focus:outline-0  border border-[#EAE112] text-[#fff] placeholder:text-[#fff]" placeholder= "Email" />
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row items-center gap-4 mb-9">
                    <div className="w-full">
                        <input type="text" className="w-full px-3 py-3 rounded-[4px] bg-[#222121] focus:outline-0 border border-[#EAE112] text-[#fff] placeholder:text-[#fff]" placeholder="Subject" />
                    </div>
                </div>


                
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <div className="w-full">
                        {/* <input type="text" className="w-full px-3 py-3 rounded-[4px] bg-[#222121] focus:outline-0 border border-[#EAE112] text-[#fff] placeholder:text-[#fff]" placeholder="Subject" /> */}
                        <textarea placeholder="Message" className="w-full h-[200px] px-3 py-3 rounded-[4px] bg-[#222121] focus:outline-0 border border-[#EAE112] text-[#fff] resize-none placeholder:text-[#fff]" ></textarea>
                    </div>
                </div>


                <div className='text-center my-4'>
                    <button
                        type='submit'
                        className='flex items-center text-center mx-auto px-10 py-3 rounded-sm bg-[#EAE112] text-[#111]'
                        >
                        Send Message
                    </button>
                </div>


            </form>


        </section>
    );
};

export default Contact;