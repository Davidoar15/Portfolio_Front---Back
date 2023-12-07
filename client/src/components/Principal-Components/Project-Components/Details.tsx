import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../../actions";
import { Project } from "../../../types";
import { Link } from "react-router-dom";

const Details = () => {

    const { id } = useParams();
    const [project, setProject] = useState<Project | undefined>();
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 1; 

    const startIndex = (currentPage-1)*pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedImgs = project?.images.slice(startIndex, endIndex);
    let totalPages = 0;
    if (project?.images.length) totalPages = Math.ceil(project.images.length/pageSize);

    const changePage = (page: number) => {
        setCurrentPage(page);
    };

    if (typeof id === 'string') {
        const fetchProject = async () => {
            try {
                const res = await getProject(id);
                setProject(res);
            } catch(error) {
                console.log("ERROR FETCHING PROJECT", error);
            }
        };

        useEffect(() => {
            fetchProject()
        }, [id])
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => changePage(i)}
                    className={`flex justify-center items-center rounded-xl border-4 border-red-600 text-white bg-slate-800 p-2 w-7 h-7 cursor-pointer ${currentPage === i ? "b_glow font-semibold" : "bg-gray-600"}`}
                >
                    {i}
                </button>
            );
        };
        return (pageNumbers);
    };

    return ( 
        <div className="flex flex-col justify-center items-center bg-slate-900 min-h-screen">
            

            <div className="flex flex-col md:flex-row gap-10 mx-5 mt-10">
                {
                    paginatedImgs?.length ? (
                        <div className="flex flex-col items-center gap-2 md:w-[70%]">
                            <div className="project-item">
                            {
                                paginatedImgs.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`project-img-${index}`}
                                        className="project-image p-2 border-double border-8 rounded-xl border-white"
                                    />
                                ))
                            }
                            </div>
                            <div className="flex flex-row justify-center gap-2">
                                {renderPageNumbers()}
                            </div>
                        </div>
                    ) : (
                        <h2 className="text-white">There are not Images for this project</h2>
                    )
                }

                <div className="flex flex-col justify-evenly items-center w-full md:w-96 h-auto mt-5 md:mt-0 border-double border-4 rounded-lg p-4">
                    <h1 className=" text-white text-4xl">{project?.title}</h1>
                    <h2 className="text-white text-2xl my-5">{project?.type}</h2>
                    <div>
                        <p className="text-white">
                            {project?.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mx-5 my-5">
                <div className="flex flex-wrap justify-center items-center w-full md:w-[70%] rounded-ss-3xl rounded-br-3xl border-2 border-white b_glow">
                    {
                        project?.technologies ? (
                            project.technologies.map((tech, index) => (
                                <div key={index} className="m-2">
                                    <img 
                                        src={tech}
                                        alt={`tech-img-${index}`}
                                        className="h-16 w-16 object-contain"
                                    />
                                </div>      
                            ))
                        ) : (
                            <h2 className="text-white">There are not Technologies for this project</h2>
                        )
                    }
                </div>

                <div className="w-full md:w-96 mt-5 md:mt-0">
                    {
                        project?.link ? (
                            <ul>
                                {
                                    project.link.map((link, index) => (
                                        <Link key={index} to={link}>
                                            <li className="text-white">
                                                {link}
                                            </li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        ) : (
                            <h2 className="text-white">There are not Links for this project</h2>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Details;