import React from "react";
import Container from "react-bootstrap/Container";
import Rodrigo from "../images/rodrigo.jpg";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
const fadeInLeftToRight = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
};
function About({ aboutSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div id="about-me">
      <Container>
        <div className="row" ref={aboutSection}>
          <div className="col-xs-12 col-md-8 col-lg-6 offset-lg-1 text-start">
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <h2 className="xl-font bebas">ABOUT US</h2>
            </motion.div>
            <hr />
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <p className="roboto lg-font">
                At Cleveland Web, we're passionate about crafting exceptional
                online experiences. With a team of dedicated professionals, we
                specialize in creating stunning websites tailored to meet your
                unique needs. From design to development, we're committed to
                delivering top-notch solutions that elevate your online
                presence. Let's build something extraordinary together.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <p className="roboto lg-font">
                At Cleveland Web, our focus is on empowering small to
                medium-sized businesses with quick and affordable website
                solutions. With a dedicated team of professionals, we specialize
                in crafting stunning websites tailored to meet your unique
                needs. Elevate your online presence with our top-notch solutions
                designed to fit your budget and timeline. Let's build something
                extraordinary together.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInLeftToRight}
              transition={{ duration: 1.5 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <Button
                btnClass="btn btn-primary"
                nameBtn="Contact us!"
                linkBtn="#contact"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
