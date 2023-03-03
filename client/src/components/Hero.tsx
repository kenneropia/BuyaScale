import heroImg from "../images/hero.jpg";

const Hero: React.FC = () => {
    return (
        <section className="w-full relative h-[400px] md:h-[550px] lg:h-[700px] xl:h-[750px] flex items-center 
            justify-center bg-[#00000099] overflow-hidden"
        >
            <img src={ heroImg } alt="hero" className="absolute w-full object-cover top-0 left-0 z-[-1]" />
            <div className="w-full h-full absolute top-0 left-0 z-[1] bg-[#00000099]"></div>
            <div className="w-[90%] md:w-[80%] lg:[60%] font-noto text-white text-center z-[2]">
                <h1 className="text-[50px] leading-[68px]">The Tech Collection Is Here</h1>
                <p className="text-lg">
                    The time is now for it to be okay to be great. People in this world shun people for being great. 
                    For being a bright color. For standing out. But the time is now to be okay to be the greatest you. 
                </p>
            </div>
        </section>
    )
}

export default Hero