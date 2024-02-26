import { useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import '../AboutUs/About.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

const Contact = () => {



    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v9o5ubl', 'template_hnm25ye', form.current, 'nI4f2s9NVc5ZAIOSB')
          .then((result) => {
            toast.success("Your Income history addedd", {
                position: "top-center",
                autoClose: 1000,
            });
            console.log(result.text);
        }, 
        (error) => {
            toast.error("Your Income history addedd", {
                position: "top-center",
                autoClose: 1000, 
            });
            console.log(error.text);
        });
    };




    return (
        <section className=" about_bg px-10 lg:px-24 py-28 bg-[#1E293B]">
            <div className="z-50">
                <ToastContainer />
            </div>
            <div className="text-center mb-14">
                <h2 className='text-[#eee] text-[30px]'>Contact <span className='border-b-2 border-b-[#1BAA80] pb-2'>Me</span> of Mine</h2>
            </div>

            <div className='w-full lg:w-11/12 mx-auto h-auto bg-[#17324E] px-6 lg:px-10 py-5'
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >
                    <form ref={form} onSubmit={sendEmail} action="">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7'>
                            <div >
                                <label htmlFor="" className='block text-[#E2E8F0] text-[18px] font-bold mb-2'>Name*</label>
                                <input type="text" name='user_name' className='px-4 py-4 text-[16px] text-[#eee] focus:outline-none rounded-md bg-[#293756] w-full' placeholder='Enter your name' />
                            </div>

                            <div >
                                <label htmlFor="" name='user_email' className='block text-[#E2E8F0] text-[18px] font-bold mb-2'>Email*</label>
                                <input type="email" className='px-4 py-4 text-[16px] text-[#eee] focus:outline-none rounded-md bg-[#293756] w-full' placeholder='Enter your email' />
                            </div>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="" name='number' className='block text-[#E2E8F0] text-[18px] font-bold mb-2'>Phone*</label>
                            <input type="number" className='px-4 py-4 text-[16px] text-[#eee] focus:outline-none rounded-md bg-[#293756] w-full' placeholder='Enter your phone number'  />
                        </div>

                        <div className=''>
                            <label htmlFor="" className='block text-[#E2E8F0] text-[18px] font-bold mb-2'>Message*</label>
                            

                            <textarea type="text" name="message" className='px-4 py-4 text-[16px] text-[#eee] focus:outline-none rounded-md bg-[#293756] w-full resize-none' cols="40" rows="10" placeholder='Write your message here' >
                            </textarea>
                            
                        </div>

                        <div className='text-center my-4'>
                            <button
                                type='submit'
                                className='flex items-center text-center mx-auto px-10 py-3 rounded-sm bg-gradient-to-r from-[#2aaf80] to-[#82e6a6] text-white'
                                >
                                Send Message
                                <FaTelegramPlane />
                            </button>
                        </div>

                    </form>
                </div>

        </section>
    );
};

export default Contact;