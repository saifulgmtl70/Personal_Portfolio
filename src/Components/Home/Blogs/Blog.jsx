import { FaRegCalendarCheck } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";


const Blog = ({ blog }) => {

    const { title, image, content, author, date  } = blog;

    return (
        

        <article className="overflow-hidden border rounded-[3px] dark:border dark:border-[#3a536ec3] dark:bg-[#17324E] shadow-lg transition hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <div  className=" hover:relative overflow-hidden duration-1000 ">
                <img alt="Office" src={image} className="h-auto lg:h-[240px] overflow-hidden hover:scale-105 duration-1000 ease-in-out  w-full object-cover " />
            </div>
        

            <div className="bg-white dark:bg-[#17324E] space-y-3 p-4 sm:p-6">
                <Link href="#">
                    <h3 className="mt-0.5 text-lg text-cyan-900 dark:text-[#E2E8F0] hover:text-[#5AB9C1] duration-700"> {title} </h3>
                </Link>
                <div className="flex items-center gap-10">
                    <p className="flex items-center gap-2"> <FaRegCalendarCheck /> {date} </p>
                    <p className="flex items-center gap-2"> <CiUser /> {author} </p>
                </div>
                <p className="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-[#656a71] dark:text-[#E2E8F0]"> {content} </p>
                <p><Link to="#" className="mt-2 font-bold border-b-[3px] border-gray-500 text-[18px] hover:text-[#5AB9C1] duration-700">Read More </Link> </p> 
            </div>

        </article>



    );
};

export default Blog;