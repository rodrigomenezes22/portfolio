import React from "react";
import Container from "react-bootstrap/Container";
import brazilFlag from "../images/brasil.svg";
import usaFlag from "../images/usa.svg";
import germanyFlag from "../images/germany.svg";
import italianFlag from "../images/italian.svg";
import spainFlag from "../images/spanish.svg";
import { motion } from "framer-motion";

const fadeInLeftToRight = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
};

function Languages({ languagesSection }) {
  return (
    <div id="languages">
      <Container>
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <h2
                className="bebas xl-font text-white text-start mb-5"
                ref={languagesSection}>
                Languages Spoken
              </h2>
            </motion.div>
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 0.25 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <img
                src={brazilFlag}
                className="flags"
                alt="Portugues - Native Speaker"
              />
            </motion.div>
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 0.5 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <img
                src={usaFlag}
                className="flags"
                alt="US English - Business Fluent"
              />
            </motion.div>
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 0.75 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <img src={germanyFlag} className="flags" alt="German - B1" />
            </motion.div>
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 1 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <img
                src={italianFlag}
                className="flags"
                alt="Italian - Good Conversational"
              />
            </motion.div>
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5, delay: 1.25 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <img
                src={spainFlag}
                className="flags"
                alt="Spanish - Very good understanding"
              />
            </motion.div>
          </div>
        </div>
      </Container>
      <div className="overlay"></div>
    </div>
  );
}

export default Languages;
