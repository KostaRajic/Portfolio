import { useState } from "react";
import myPicture from "../assets/Images/Moja slika.jpg";
import { Projects } from "./Projects";
import { Diploma } from "../Certificate/Diploma";
import { OsnoveFE } from "../Certificate/OsnoveFE";
import { ReactCertificate } from "../Certificate/React";
import { Motivation } from "../Portals/Motivation";
import { Inspiration } from "../Portals/Inspiration";
import { Growth } from "../Portals/Growth";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export const MainComponent = () => {
  const [ showProjects, setShowProjects ] = useState(false)
  const [ diploma, setDiploma ] = useState(false);
  const [ osnoveFE, setOsnoveFE ] = useState(false);
  const [ reactCertificate, setReactCertificate ] = useState(false);
  const [ showMotivation, setShowMotivation ] = useState(false);
  const [ showInspiration, setShowInspiration ] = useState(false);
  const [ showGrowth, setShowGrowth ] = useState(false);
  const [ showSkills, setShowSkills ] = useState(false);

  return (
    <div className="mainComponentClass">
      <div className="leftMainComponentClass">
        <div className="leftMainComponentClassTop">
          <img src={myPicture} alt="My Picture" className="myPictureClass" />
          <div>
            <h1>Kosta Rajić</h1>
            <h3>Front-End Developer </h3>
          </div>
        </div>
        <div>
          <h5>I am Kosta Rajić, a front-end React developer, from Jagodina, Republic of Serbia. 
            I graduated from high school in <span onClick={() => setDiploma(true)}>electrical engineering </span>, automation for 4 years and <a href="https://www.quantox.academy/">Quantox Academy</a> for 1.5 years, where I learned <span onClick={() => setOsnoveFE(true)}>basic Front-end</span> and <span onClick={() => setReactCertificate(true)}>advanced React</span>. 
            I am hardworking, diligent, and ambitious, eager for success both for myself and for the company I work for.</h5>
          <div className="leftMainComponentClassBottom">
            <p onClick={() => setShowMotivation(true)}>Motivation</p>
            <p onClick={() => setShowInspiration(true)}>Inspiration</p>
            <p onClick={() => setShowGrowth(true)}>Growth</p>
          </div>
        </div>
      </div>
      <div className="rightMainComponentClass">
        <h2 onClick={() => setShowProjects(true)}>Projects</h2>
        <h2 onClick={() => setShowSkills(true)}>Skills</h2>
        <h3 className="contactClass"><Contact/></h3>
      </div>
      {diploma && <Diploma closeModal={() => setDiploma(false)}/>}
      {osnoveFE && <OsnoveFE closeModal={() => setOsnoveFE(false)}/>}
      {reactCertificate && <ReactCertificate closeModal={() => setReactCertificate(false)}/>}
      {showProjects && <Projects goBack={() => setShowProjects()}/>}
      {showMotivation && <Motivation goBack={() => setShowMotivation()}/>}
      {showInspiration && <Inspiration goBack={() => setShowInspiration()}/>}
      {showGrowth && <Growth goBack={() => setShowGrowth()} />}
      {showSkills && <Skills goBack={() => setShowSkills()}/>}
    </div>
  );
};