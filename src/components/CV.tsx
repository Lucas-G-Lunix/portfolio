import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv_pdf from "../assets/Lucas_Gruden_CV.pdf";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons/faFileArrowDown";

function CV() {
  return (
    <div className="CV--main" id="cv">
      <h1>CV</h1>
      <object data={cv_pdf} type="application/pdf" id="pdfCV">
        <a href={cv_pdf} target="_blank"><FontAwesomeIcon icon={faFileArrowDown}/> Descargar CV</a>
      </object>
    </div>
  )
}

export default CV