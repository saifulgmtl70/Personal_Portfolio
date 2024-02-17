import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <section className="bg-[#FFFFFF] dark:bg-[#1E293B] px-12 py-6" id="blogs">

            <div className="mx-0 lg:mx-10 mt-5 mb-12 myService_bg relative">
                <div className='text-start'>
                    <div className="line"></div>
                    <p className="text-[28px] ms-2 font-[500] text-[#121A2D] dark:text-[#E2E8F0] pl-4">Recent 
                        <span className="text-[#F22225]"> Blogs</span> 
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </section>
    );
};

export default Blogs;
