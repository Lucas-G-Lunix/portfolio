import javascript_logo from "../assets/javascript-logo.svg";
import typescript_logo from "../assets/typescript-logo.svg";
import python_logo from "../assets/python-logo.svg";
import c_sharp_logo from "../assets/c-sharp-logo.svg";
import dotnet_logo from "../assets/dotnet-logo.svg";
import node_js_logo from "../assets/node-js-logo.svg";
import express_js_logo from "../assets/express-js-logo.svg";
import microsoftsqlserver_logo from "../assets/microsoftsqlserver-logo.svg";
import mysql_logo from "../assets/mysql-logo.svg";
import './Skills.css'


function Skills() {
  return (
    <>
      <h1>Habilidades</h1>
      <section className="skills--div" id="skills">
        <div className="skills--lenguages">
          <h3>Lenguajes</h3>
          <p><img className="logo--skills" src={javascript_logo}></img> JavaScript</p>
          <p><img className="logo--skills" src={typescript_logo}></img> TypeScript</p>
          <p><img className="logo--skills" src={python_logo}></img> Python</p>
          <p><img className={c_sharp_logo}></img> C#</p>
        </div>
        <div className="div--bar"></div>
        <div className="skills--frameworks">
          <h3>Frameworks</h3>
          <p><img className="logo--skills" src={dotnet_logo}></img> .NET Framework</p>
          <p><img className="logo--skills" src={node_js_logo}></img>Node JS</p>
          <p><img className="logo--skills" src={express_js_logo}></img>Express JS</p>
        </div>
        <div className="div--bar"></div>
        <div className="skills--databases">
          <h3>Bases de datos</h3>
          <p><img className="logo--skills" src={microsoftsqlserver_logo}></img>Microsoft SQL Server</p>
          <p><img className="logo--skills" src={mysql_logo}></img>My SQL</p>
        </div>
      </section>
    </>
  )
}

export default Skills