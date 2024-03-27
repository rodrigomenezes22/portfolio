import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
function Hero({
  temperatureCelsius,
  city,
  determineValue,
  weatherMain,
  heroSection,
}) {
  return (
    <div>
      <div id="hero" className="hero">
        <div className="hero-content" ref={heroSection}>
          <motion.div
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 1.5 }}>
            <h1 className=" bebas xxl-font" style={{ marginBottom: "0px" }}>
              NEW YORK
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}>
            <p className="is-size-3 text-white">WEB DEVELOPMENT</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}>
            <Button
              btnClass="btn btn-primary"
              nameBtn="Contact US!"
              linkBtn="#contact"
            />
          </motion.div>
        </div>
        <motion.div
          style={{ zIndex: 100 }}
          initial={{ x: "-100px", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.25 }}>
          <div className="weather">
            <span className="material-symbols-sharp">
              {determineValue(weatherMain)}
            </span>{" "}
            <br />
            {city}, {temperatureCelsius}°
          </div>
        </motion.div>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Hero;
