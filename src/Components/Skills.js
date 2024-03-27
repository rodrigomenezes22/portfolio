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
import nextJs from "../images/next-js.jpg";
import { motion } from "framer-motion";
const fadeInLeftToRight = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
};
function Skills({ skillsSection }) {
  return (
    <div id="skills">
      <Container>
        <div className="row">
          <motion.div
            variants={fadeInLeftToRight}
            transition={{ duration: 1.5 }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}>
            <h2
              className="xl-font bebas text-white"
              style={{ paddingBottom: "2rem", textAlign: "left" }}>
              TECH STACK{" "}
            </h2>
          </motion.div>
        </div>
        <div className="row">
          <div className="icons-1" ref={skillsSection}>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img src={jsIcon} alt="JavaScript" className="icon-skill" />
                <p className="text-white roboto mt-2">JavaScript</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 0.25 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img src={jQuery} alt="jQuery" className="icon-skill" />
                <p className="text-white roboto mt-2">jQuery</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 0.5 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img src={phpIcon} alt="PHP" className="icon-skill" />
                <p className="text-white roboto mt-2">PHP</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 0.75 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img src={reactIcon} alt="REACT" className="icon-skill" />
                <p className="text-white roboto mt-2">React</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 1 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img src={nextJs} alt="NEXT" className="icon-skill" />
                <p className="text-white roboto mt-2">NEXT.JS</p>
              </div>
            </motion.div>
          </div>

          <div className="icons-2 mt-5">
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 1.25 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img
                  src={adobeIllustrator}
                  alt="Adobe Illustrator"
                  className="icon-skill"
                />
                <p className="text-white roboto mt-2">Illustrator</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 1.5 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img
                  src={adobePhotoshop}
                  alt="Adobe Photoshop"
                  className="icon-skill"
                />
                <p className="text-white roboto mt-2">Photoshop</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 1.75 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img src={adobeXD} alt="Adobe XD" className="icon-skill" />
                <p className="text-white roboto mt-2">Adobe XD</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 2 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img
                  src={adobePremiere}
                  alt="Adobe Premiere"
                  className="icon-skill"
                />
                <p className="text-white roboto mt-2">Premiere</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 2.25 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <div className="icon-wrapper align-items-center">
                <img
                  src={adobeAfferEffects}
                  alt="Adobe After Effects"
                  className="icon-skill"
                />
                <p className="text-white roboto mt-2">After Effects</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
      <div className="overlay"></div>
    </div>
  );
}

export default Skills;
