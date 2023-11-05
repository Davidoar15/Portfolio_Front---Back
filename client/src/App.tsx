import { useEffect, useState } from "react"
import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import { BallTriangle } from "react-loader-spinner"


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

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
            <Projects />
            <Contact />
            <Footer />
          </div>
      }
    </>
  )
}

export default App
