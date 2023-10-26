import portfolio_image from "../assets/portfolio-image.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  var cursor = true;
  var speed = 500; 
  setInterval(() => {
    if (cursor) {
      document.getElementById("cursor")!.style.opacity = "0";
      cursor = false;
    } else {
      document.getElementById("cursor")!.style.opacity = "1";
      cursor = true;
    }
  }, speed);
  return (
    <div className="aboutme--div" id="about-me">
      <img id="aboutme--image" src={portfolio_image} alt="No portfolio image" width={200} />
      <div className="aboutme--main">
        <h1 className="aboutme--title">Lucas Gruden<span id="cursor">_</span></h1>
        <p>Soy persona autodidacta, creativa, curiosa y con muchas ganas de aprender día a día nuevas tecnologías para el crecimiento de mi formación como profesional. 
          Desde los 12 años estoy incursionando en el mundo la tecnología y programación, actualmente uno de mis hobbies. Y buscando convertirlo en mi trabajo.
          <br/>Para saber mas acerca de mi experiencia laboral te invito a entrar a mi LinkedIn
        </p>
        <a href="https://ar.linkedin.com/in/lucas-gruden-682887230" target="_blank" className="navbar--button"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
      </div>
    </div>
  )
}

export default AboutMe