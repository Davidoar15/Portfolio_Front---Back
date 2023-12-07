import img from "../../assets/Profile.png";
import CV from "../../assets/CV David Olivo Alfonso Rodríguez (English).pdf";

const About = () => {

    const handleDowload = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = "CV David Olivo Alfonso Rodríguez (English).pdf";
        link.click();
    };

    return (
        <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-left gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <img 
                data-aos="fade-down"
                src={img}  
                width={290} 
                height={290} 
                alt="profile"
                className="rounded border-2 p-1 border-red-500 img_glow"
            />

            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] text-center font-semibold mb-8 leading-normal text-red-500 uppercase">About Me</h1>
                <p 
                    data-aos="fade-left"
                    className="text-[20px]"
                >
                    Passionate about technology since childhood, my journey as a developer began with two 
                    semesters in Systems Engineering at the Universidad Nacional Abierta (UNA) in Venezuela, 
                    where I gained a solid foundation in C++. Influenced by family and friends, I now thrive as 
                    a Full Stack Web Developer, showcasing expertise in JavaScript, TypeScript, ReactJS, Node, 
                    and proficiency in technologies like HTML, CSS, Express, Sequelize, PostgreSQL, Git, 
                    and agile methodologies such as Scrum. Driven by constant curiosity and the enjoyment 
                    of tackling technological challenges, I am dedicated to continuous improvement and 
                    acquiring new skills! 💻
                </p>

                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button 
                                onClick={handleDowload}
                                className="neno-button shadow-xl hover:shadow-red-800/50 text-white border-2 hover:bg-red-800 border-red-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
                            >
                                Resume | CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;