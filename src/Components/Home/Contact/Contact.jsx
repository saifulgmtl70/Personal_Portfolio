import { useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

const Contact = () => {



    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v9o5ubl', 'template_hnm25ye', form.current, 'nI4f2s9NVc5ZAIOSB')
          .then((result) => {
            toast.success("Message sent Successfully");
            console.log(result.text);
        }, 
        (error) => {
            toast.error("Something went wrong");
            console.log(error.text);
        });
    };




    return (
        <section className="bg-[#FFFFFF] dark:bg-[#1E293B] px-5 lg:px-12 py-6" id="contact">
            <ToastContainer />
            <div className="mx-4 lg:mx-10 mt-5 mb-12 myService_bg relative">
                <div className='text-start'>
                    <div className="line"></div>
                    <p className="text-[28px] px-10 ms-2 font-[500] text-[#121A2D] dark:text-[#E2E8F0] pl-4">Contact 
                        <span className="text-[#F22225]"> Me</span> 
                    </p>
                </div>
            </div>

            <div className='w-full lg:w-10/12 mx-auto h-auto bg-[#EDF5FE] dark:bg-[#17324E] px-6 lg:px-10 py-5'
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >
                    <form ref={form} onSubmit={sendEmail} action="">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7'>
                            <div >
                                <label htmlFor="" className='block text-[#333] dark:text-[#E2E8F0] text-[18px] font-bold mb-2'>Name*</label>
                                <input type="text" name='user_name' className='px-4 py-4 text-[16px] dark:text-[#17324E] focus:outline-none rounded-md bg-white w-full' placeholder='Enter your name' />
                            </div>

                            <div >
                                <label htmlFor="" name='user_email' className='block text-[#333] dark:text-[#E2E8F0] text-[18px] font-bold mb-2'>Email*</label>
                                <input type="email" className='px-4 py-4 text-[16px] dark:text-[#17324E] focus:outline-none rounded-md bg-white w-full' placeholder='Enter your email' />
                            </div>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="" name='number' className='block text-[#333] dark:text-[#E2E8F0] text-[18px] font-bold mb-2'>Phone*</label>
                            <input type="number" className='px-4 py-4 text-[16px] dark:text-[#17324E] focus:outline-none rounded-md bg-white w-full' placeholder='Enter your phone number'  />
                        </div>

                        <div className=''>
                            <label htmlFor="" className='block text-[#333] dark:text-[#E2E8F0] text-[18px] font-bold mb-2'>Message*</label>
                            

                            <textarea type="text" name="message" className='px-4 py-4 text-[16px] dark:text-[#17324E] focus:outline-none rounded-md bg-white w-full resize-none' cols="40" rows="10" placeholder='Write your message here' >
                            </textarea>
                            
                        </div>

                        <div className='text-center my-4'>
                            <button
                                type='submit'
                                className='flex items-center text-center mx-auto px-10 py-3 rounded-sm bg-gradient-to-r from-[#8b6429] to-[#c9a873] text-white'
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