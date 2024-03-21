import React from "react";
import Container from "react-bootstrap/Container";
import Rodrigo from "../images/rodrigo.jpg";
import Button from "./Button";

function About({ aboutSection }) {
  return (
    <div id="about-me">
      <Container>
        <div className="row">
          <div className="col-xs-12 col-md-8 col-lg-6 offset-lg-1 text-start">
            <h2 className="xl-font bebas">ABOUT US</h2>
            <hr />
            <p className="roboto thin-text dark-gray">
              At Cleveland Web, we're passionate about crafting exceptional
              online experiences. With a team of dedicated professionals, we
              specialize in creating stunning websites tailored to meet your
              unique needs. From design to development, we're committed to
              delivering top-notch solutions that elevate your online presence.
              Let's build something extraordinary together.
            </p>

            <p className="roboto thin-text dark-gray">
              At Cleveland Web, our focus is on empowering small to medium-sized
              businesses with quick and affordable website solutions. With a
              dedicated team of professionals, we specialize in crafting
              stunning websites tailored to meet your unique needs. Elevate your
              online presence with our top-notch solutions designed to fit your
              budget and timeline. Let's build something extraordinary together.
            </p>
            <Button
              btnClass="btn btn-primary"
              nameBtn="Contact us!"
              linkBtn="#contact"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
