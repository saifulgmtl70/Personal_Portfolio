import { useEffect, useState } from "react";
import Blog from "./Blog";
import '../AboutUs/About.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <section className=" about_bg px-10 lg:px-24 py-28 dark:bg-[#1E293B]">

            <div className="text-center mb-14">
                <h2 className='text-[#eee] text-[30px]'>Recent <span className='border-b-2 border-b-[#1BAA80] pb-2'>Blog</span> of Mine</h2>
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
