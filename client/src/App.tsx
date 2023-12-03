import { useEffect, useState } from "react"
import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Projects from "./components/ProjectsComponents/Projects"
import Services from "./components/Services"
import { BallTriangle } from "react-loader-spinner"
import { getProjects } from "./actions"
import { TypeProjects } from "./interfaces"


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  const [projects, setProjects] = useState<TypeProjects | undefined>([]);
  const [initialFetch, setInitialFetch] = useState(false);

  useEffect(() => {
      const fetchProjects = async () => {
          try {
              const res = await getProjects();
              setProjects(res);
              setInitialFetch(true);
          } catch(error) {
              console.log("ERROR FETCHING PROJECTS", error);
          }
      };

      if (!projects?.length && !initialFetch) {
          fetchProjects();
      }
  }, [initialFetch, projects])

  return (
    <>
      {
        loading 
        ? 
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
        : 
          <div className="bg-slate-900 ">
            <NavBar />
            <Banner />
            <About />
            <Services />
            <Projects projects={projects}/>
            <Contact />
            <Footer />
          </div>
      }
    </>
  )
}

export default App
