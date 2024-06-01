import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const Blog = () => {
    return (
        <section className="px-6 lg:px-14 py-12">

            <div className="text-center mb-8 text-[#fff]">
                <h2 className="text-[25px] text-[#fff] tracking-wider mb-2">BLOG</h2>
                <p className="w-full lg:w-5/12 mx-auto leading-7 tracking-wide">Here is some of my blogs. Let's check it</p>
            </div>



            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

                <article className="h-[350px] rounded-sm bg-[#222121] shadow-xl overflow-hidden transition cursor-pointer">
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img alt="" src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyzqqo6ysxil7bp6hpad2.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out object-cover"/>
                    </div>

                    <div className="bg-[#222121] p-4 sm:p-6">
                        <time datetime="2022-10-10" className="block text-xs text-[#fff]"> 10th Oct 2022 </time>

                        <Link href="#">
                            <h3 className="mt-0.5 text-lg text-[#fff]">Responsive Web Design: Strategies and Techniques</h3>
                        </Link>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#eee]">
                        In today's multi-device world, responsive web design has become essential for creating websites that adapt seamlessly to various screen sizes and resolutions.
                        </p>

                        <Link to="https://dev.to/azadgmtl/responsive-web-design-strategies-and-techniques-1ie9" target="_blank">
                            <button className="text-[#EAE112] my-4 flex items-center gap-2">Read more <MdArrowRightAlt className="text-[20px]" /></button>
                        </Link>
                    </div>
                    
                </article>



                <article className="h-[350px] rounded-sm bg-[#222121] shadow-xl overflow-hidden transition cursor-pointer">
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img alt="" src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9aehsffewein0uosdtvl.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out object-cover"/>
                    </div>

                    <div className="bg-[#222121] p-4 sm:p-6">
                        <time datetime="2022-10-10" className="block text-xs text-[#fff]"> 10th Oct 2022 </time>

                        <Link href="#">
                            <h3 className="mt-0.5 text-lg text-[#fff]">The Importance of Website Speed Optimization</h3>
                        </Link>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#eee]">
                        Website speed optimization is a critical aspect of web development that can significantly impact user experience, search engine rankings, and overall business success.
                        </p>

                        <Link to="https://dev.to/azadgmtl/the-importance-of-website-speed-optimization-27bi" target="_blank">
                            <button className="text-[#EAE112] my-4 flex items-center gap-2">Read more <MdArrowRightAlt className="text-[20px]" /></button>
                        </Link>
                    </div>
                    
                </article>


                
                <article className="h-[350px] rounded-sm bg-[#222121] shadow-xl overflow-hidden transition cursor-pointer">
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img alt="" src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F58oajvg61gnqtjsvs24z.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out object-cover"/>
                    </div>

                    <div className="bg-[#222121] p-4 sm:p-6">
                        <time datetime="2022-10-10" className="block text-xs text-[#fff]"> 10th Oct 2022 </time>

                        <Link href="#">
                            <h3 className="mt-0.5 text-lg text-[#fff]">Introduction to Cascading Stylesheet(CSS) Flexbox Layout</h3>
                        </Link>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#eee]">
                        CSS Flexbox layout, also known as Flexible Box Layout, is a powerful tool for creating dynamic and responsive layouts in web development. Flexbox provides a more efficient way to distribute space and align content within a container, making it easier to build complex web interfaces with minimal CSS code.
                        </p>

                        <Link to="https://dev.to/azadgmtl/introduction-to-css-flexbox-layout-3o48" target="_blank">
                            <button className="text-[#EAE112] my-4 flex items-center gap-2">Read more <MdArrowRightAlt className="text-[20px]" /></button>
                        </Link>
                    </div>
                    
                </article>


               

            </div>





        </section>
    );
};

export default Blog;