import { useEffect, useState } from "react";
import About from "./Principal-Components/About";
import Banner from "./Principal-Components/Banner";
import Contact from "./Principal-Components/Contact";
import Footer from "./Principal-Components/Footer";
import NavBar from "./Principal-Components/NavBar";
import Projects from "./Principal-Components/Project-Components/Projects";
import Services from "./Principal-Components/Services";
import { BallTriangle } from "react-loader-spinner";
import { getProjects } from "../actions";
import {
  TypeProjects,
  TypeHandleLanguageChange,
  TypeCurrentLanguage,
} from "../types";

function Principal({
  handleLanguageChange,
  currentLanguage,
}: {
  handleLanguageChange: TypeHandleLanguageChange;
  currentLanguage: TypeCurrentLanguage;
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [projects, setProjects] = useState<TypeProjects | undefined>([]);
  const [initialFetch, setInitialFetch] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res);
        setInitialFetch(true);
      } catch (error) {
        console.log("ERROR FETCHING PROJECTS", error);
      }
    };

    if (!projects?.length && !initialFetch) {
      fetchProjects();
    }
  }, [initialFetch, projects]);

  return (
    <>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#f00"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-slate-900 ">
          <NavBar
            handleLanguageChange={handleLanguageChange}
            currentLanguage={currentLanguage}
          />
          <Banner currentLanguage={currentLanguage} />
          <About currentLanguage={currentLanguage} />
          <Services currentLanguage={currentLanguage} />
          <Projects projects={projects} currentLanguage={currentLanguage} />
          <Contact currentLanguage={currentLanguage} />
          <Footer currentLanguage={currentLanguage} />
        </div>
      )}
    </>
  );
}

export default Principal;
