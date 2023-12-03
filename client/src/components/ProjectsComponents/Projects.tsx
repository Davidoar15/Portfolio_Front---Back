// import projectImg from "../../assets/protoProject.png";
import { TypeProjects } from "../../interfaces";

const Projects = ({ projects }: { projects: TypeProjects | undefined }) => {

    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-up" className="text-[52px] text-center font-semibold mb-20 leading-normal uppercase text-red-500">Realized Projects</h1>

            {
                projects?.length ? (
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                        {projects.map((project) => (
                            <div 
                                key={project._id}
                                data-aos="fade-up"
                                className="project-item"
                            >
                                <img 
                                    key={project._id}
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="project-image text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-red-800 b_glow"
                                />
                                <h4 className="text-[18px] text-center font-semibold mt-5 leading-normal text-red-500">{project.title}</h4>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h2 data-aos="fade-up" className="text-[45px] text-center font-semibold mb-20 leading-normal uppercase text-red-500">Loading Projects...</h2>
                )
            }
        </div>
    );
};

export default Projects;