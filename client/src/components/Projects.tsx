import projectImg from "../assets/protoProject.png";

const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-up" className="text-[52px] text-center font-semibold mb-20 leading-normal uppercase text-red-500">Realized Projects</h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <img data-aos="fade-up" src={projectImg} alt="img1" width={250} height={350} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-red-800 b_glow"/>
                <img data-aos="fade-up" src={projectImg} alt="img2" width={250} height={350} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-red-800 b_glow"/>
                <img data-aos="fade-up" src={projectImg} alt="img3" width={250} height={350} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-red-800 b_glow"/>
                <img data-aos="fade-up" src={projectImg} alt="img4" width={250} height={350} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-red-800 b_glow"/>
            </div>
        </div>
    );
};

export default Projects;