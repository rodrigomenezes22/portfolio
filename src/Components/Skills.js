import React from "react";
import Container from "react-bootstrap/Container";
import htmlIcon from "../images/html-5.svg";
import cssIcon from "../images/css-3.svg";
import jsIcon from "../images/js.svg";
import jQuery from "../images/jquery.svg";
import phpIcon from "../images/php.svg";
import reactIcon from "../images/react.svg";
import adobeIllustrator from "../images/adobe-illustrator.svg";
import adobePhotoshop from "../images/adobe-photoshop.svg";
import adobeXD from "../images/adobe-xd.svg";
import adobePremiere from "../images/adobe-premiere.svg";
import adobeAfferEffects from "../images/after-effects.svg";
import nextJs from "../images/next-js.png";
function Skills({ skillsSection }) {
  return (
    <div id="skills">
      <Container>
        <div className="row">
          <div className="icons-1" ref={skillsSection}>
            <div className="icon-wrapper align-items-center">
              <img src={jsIcon} alt="JavaScript" className="icon-skill" />
              <p className="text-white roboto mt-2">JavaScript</p>
            </div>
            <div className="icon-wrapper align-items-center">
              <img src={jQuery} alt="jQuery" className="icon-skill" />
              <p className="text-white roboto mt-2">jQuery</p>
            </div>
            <div className="icon-wrapper align-items-center">
              <img src={phpIcon} alt="PHP" className="icon-skill" />
              <p className="text-white roboto mt-2">PHP</p>
            </div>
            <div className="icon-wrapper align-items-center">
              <img src={reactIcon} alt="REACT" className="icon-skill" />
              <p className="text-white roboto mt-2">React</p>
            </div>
            <div className="icon-wrapper align-items-center">
              <img src={nextJs} alt="NEXT" className="icon-skill" />
              <p className="text-white roboto mt-2">NEXT.JS</p>
            </div>
          </div>
          <div className="icons-2 mt-5">
            <div className="icon-wrapper align-items-center">
              <img
                src={adobeIllustrator}
                alt="Adobe Illustrator"
                className="icon-skill"
              />
              <p className="text-white roboto mt-2">Illustrator</p>
            </div>
            <div className="icon-wrapper align-items-center">
              <img
                src={adobePhotoshop}
                alt="Adobe Photoshop"
                className="icon-skill"
              />
              <p className="text-white roboto mt-2">Photoshop</p>
            </div>
            <div className="icon-wrapper align-items-center">
              <img src={adobeXD} alt="Adobe XD" className="icon-skill" />
              <p className="text-white roboto mt-2">Adobe XD</p>
            </div>
            <div className="icon-wrapper align-items-center">
              <img
                src={adobePremiere}
                alt="Adobe Premiere"
                className="icon-skill"
              />
              <p className="text-white roboto mt-2">Premiere</p>
            </div>
            <div className="icon-wrapper align-items-center">
              <img
                src={adobeAfferEffects}
                alt="Adobe After Effects"
                className="icon-skill"
              />
              <p className="text-white roboto mt-2">After Effects</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="overlay"></div>
    </div>
  );
}

export default Skills;
