import ProjectCard from "./ProjectCard"
import app_resto from "../assets/app-resto.png";
import app_conjectura from "../assets/app-conjetura.png";
import app_conjectura_typescript from "../assets/app-conjetura-typescript.png";
import app_weather from "../assets/app-weather.png";
import app_tenzies from "../assets/app-tenzies.png";
import './Projects.css';

function Projects() {
  return (
    <>
      <h1>Proyectos</h1>
      <div className="project--div" id="projects">
        <ProjectCard title="Resto App" lenguage="C#" image={app_resto} description="Trabajo Practico Web para Programación III en ASP .NET Framework que consiste en una app de gestion de restaurante" url="https://github.com/Lucas-G-Lunix/tp-cuatrimestral-resto-equipo11.git" />
        <ProjectCard title="Conjetura de Collatz" image={app_conjectura} lenguage="Python" description="Script en Python utlizando matplotlib para graficar la conjetura de Collatz" url="https://github.com/Lucas-G-Lunix/Collatz-Conjecture-Ploty.git" />
        <ProjectCard title="App Clima" image={app_weather} lenguage="JavaScript" description="App de clima hecha con JavaScript, ReactJS, Firebase y micropython. Utiliza una Raspberry Pi Pico conectada a un sensor DHT22 y envia la informacion de temperatura y humedad cada 2 horas a la DB de Firebase." urlTryNow="https://weather-app-ef941.web.app/" />
        <ProjectCard title="Conjetura de Collatz" image={app_conjectura_typescript} lenguage="TypeScript" description="Web en React JS utlizando Recharts para graficar la conjetura de Collatz" url="https://github.com/Lucas-G-Lunix/collatz-conjeture.git" urlTryNow="https://lucas-g-lunix.github.io/collatz-conjeture/" />
        <ProjectCard title="Tenzies Game" image={app_tenzies} lenguage="JavaScript" description="Juego hecho utilizando ReactJS" url="https://github.com/Lucas-G-Lunix/tenzies-game.git" />
        {/* <ProjectCard title="Login MERN" image="./imgs/app-login.png" lenguage="TypeScript" description="App de login hecha con TypeScript, NodeJS, JWT, MongoDB, ReactJS" url="https://github.com/Lucas-G-Lunix/login-app-MERN.git"/> */}
      </div>
    </>
  )
}

export default Projects