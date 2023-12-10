import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TypeCurrentLanguage, TypeProjects } from "../../../types";
import { useTranslation } from "react-i18next";

const Projects = ({
  projects,
  currentLanguage,
}: {
  projects: TypeProjects | undefined;
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 8;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedProjects = projects?.slice(startIndex, endIndex);
  let totalPages = 0;
  if (projects?.length) totalPages = Math.ceil(projects?.length / pageSize);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={`flex justify-center items-center rounded-xl border-4 border-red-600 text-white bg-slate-800 p-2 w-9 h-9 cursor-pointer ${
            currentPage === i ? "b_glow font-semibold" : "bg-slate-500"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div
      id="Projects"
      data-aos="fade-up"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-[52px] text-center font-semibold mb-20 leading-normal uppercase text-red-500">
        {t("Projects", { lng: currentLanguage })}
      </h1>

      {paginatedProjects?.length ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
          {paginatedProjects.map((project) => (
            <div key={project._id} className="project-item">
              <NavLink to={`/project/${project._id}`}>
                <img
                  key={project._id}
                  src={project.images[0]}
                  alt={project.title}
                  className="project-images text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-red-800 b_glow"
                />
              </NavLink>
              <h4 className="text-[18px] text-center font-semibold mt-4 leading-normal text-red-500">
                {project.title}
              </h4>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-[45px] text-center font-semibold mb-20 leading-normal uppercase text-red-500">
          Loading Projects...
        </h2>
      )}

      <div className="mt-20 flex flex-row justify-center items-center gap-20">
        {/* <button
                    disabled={currentPage === 1}
                    onClick={() => changePage(currentPage - 1)}
                    className={`flex justify-center items-center p-2 w-15 h-15`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
                    </svg>
                </button> */}

        <div className="flex flex-row gap-2">{renderPageNumbers()}</div>

        {/* <button
                    disabled={(projects?.length 
                                ? endIndex >= projects.length
                                : true)}
                    onClick={() => changePage(currentPage + 1)}
                    className={`flex justify-center items-center p-2 w-15 h-15`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                    </svg>
                </button> */}
      </div>
    </div>
  );
};

export default Projects;
