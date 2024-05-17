import Saifuls_resume from "../../assets/Saiful's_Resume.pdf";

const Aboutme = () => {
    return (
        <section className="px-12 py-14">
            <div className="text-center mb-8 text-[#fff]"
           >
                <h2 className="text-[25px] text-[#fff] tracking-wider mb-2">ABOUT ME</h2>
                <p className="w-full lg:w-5/12 mx-auto leading-7 tracking-wide">I’m creative designer based in bangladesh, and I’m very passionate and dedicated to my work.</p>
            </div>


            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="h-auto rounded-lg bg-[#222]"
               >
                    <img src="https://i.ibb.co/0p7wfCm/IMG-20240105-165852-removebg-preview.png" className="w-full lg:w-[403px] h-auto lg:h-[467px] mx-auto" alt="" />
                </div>
                <div className="h-auto "
              >
                    <div className="mb-5">
                        <h3 className="text-[30px] text-[#EAE112] font-bold mb-3">Saiful Islam Azzad</h3>
                        <span className="text-[#fff] text-[17px]">Front-end Developer</span>
                    </div>

                    <p className="text-[#fff] mb-5 leading-6 tracking-wider">I'm a dedicated front-end developer passionate about crafting immersive digital experiences. With a blend of creativity and technical expertise, I specialize in building user-friendly interfaces that captivate and engage. My journey in web development is fueled by a relentless curiosity and a commitment to continuous learning. Beyond coding, I thrive on understanding user needs and translating them into intuitive designs. Let's collaborate and turn ideas into reality!</p>

                    <p className="text-[#fff] tracking-wider mb-7">Driven by a love for elegant design and a penchant for problem-solving, I'm dedicated to creating seamless digital experiences that leave a lasting impression.</p>

                    <div className="flex items-center gap-3">
                        <a href={Saifuls_resume}
                         download="Saiful's_Resume"
                         target="_blank"
                         rel="noreferrer">
                            <button className="px-12 py-4 rounded-[6px] bg-[#EAE112] transition-all delay-150 text-[#111] hover:bg-transparent hover:text-[#fff] hover:border border-[#EAE112]">Donwload CV</button>
                        </a>

                        <button className="px-12 py-[14px] rounded-[6px] bg-transparent transition-all delay-150 text-[#fff] hover:bg-[#EAE112] hover:text-[#111] border border-[#EAE112]">Hire Me</button>
                    </div>

                </div>
            </div>





        </section>
    );
};

export default Aboutme;