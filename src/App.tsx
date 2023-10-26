import ParticlesMain from "./ParticlesMain";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CV from "./components/CV";

function App() {
  return (
    <>
      <ParticlesMain />
      <NavBar />
      <div className="portfolio--main">
        <AboutMe />
        <Skills />
        <Projects />
        <CV />
      </div>
    </>
  )
}

export default App
