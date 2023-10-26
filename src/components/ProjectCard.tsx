import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ProjectCard(props: { title: string, url?: string | undefined, urlTryNow?: string | undefined, image: string, lenguage: string, description: string}) {
  return (
    <div className="project--card">
      <img className="project--image" src={props.image} alt="" />
      <div className="project--card-body">
        <h2>{props.title}</h2>
        <h3>Lenguage: {props.lenguage}</h3>
        <p>{props.description}</p>
      </div>
      {props.url && <a className="navbar--button" href={props.url} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /> GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>}
      {props.urlTryNow && <a className="navbar--button" href={props.urlTryNow} target="_blank" rel="noopener noreferrer"> Probala Ahora <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>}
    </div>
  )
}

export default ProjectCard