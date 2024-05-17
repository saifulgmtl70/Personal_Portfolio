import TypingEffect from "./TypeAnimation";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen main_part">
            <span className="text-[17px] text-[#fff] tracking-widest mb-3">Hello, It's me</span>
            <h2 className="text-[35px] text-[#EAE112] font-bold mb- 3 tracking-widest">Saiful Islam Azad</h2>

            <TypingEffect/>

        </div>
    );
};

export default Home;
