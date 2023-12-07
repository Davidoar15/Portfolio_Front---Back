import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../../actions";
import { Project } from "../../../types";

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
                    className={`flex justify-center items-center rounded-xl border-4 border-red-600 text-white bg-slate-800 p-2 w-9 h-9 cursor-pointer ${currentPage === i ? "b_glow font-semibold" : "bg-gray-600"}`}
                >
                    {i}
                </button>
            );
        };
        return (pageNumbers);
    };

    return ( 
        <div className="flex flex-col bg-slate-900">
            <h1>{project?.title}</h1>

            <div className="flex grid-rows-2">
                {
                    paginatedImgs?.length ? (
                        <div className="flex flex-col gap-2">
                            <div>
                            {
                                paginatedImgs.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                    />
                                ))
                            }
                            </div>
                            <div className="flex flex-row gap-2">
                                {renderPageNumbers()}
                            </div>
                        </div>
                    ) : (
                        <h2>There are not Images for this project</h2>
                    )
                }

                <div>
                    <h2>{project?.type}</h2>
                    <div>
                        <p>
                            {project?.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex grid-rows-2">
                <div>
                    {
                        project?.link ? (
                            <ul>
                                {
                                    project.link.map((link, index) => (
                                        <li key={index}>
                                            {link}
                                        </li>
                                    ))
                                }
                            </ul>
                        ) : (
                            <h2>There are not Links for this project</h2>
                        )
                    }
                </div>

                <div className="flex flex-row">
                    {
                        project?.technologies ? (
                            project.technologies.map((tech, index) => (
                                <div key={index}>
                                    <img 
                                        key={index}
                                        src={tech}
                                        alt="tech"
                                    />
                                </div>      
                            ))
                        ) : (
                            <h2>There are not Technologies for this project</h2>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Details;