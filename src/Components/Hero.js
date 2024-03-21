import React from "react";
import Button from "./Button";

function Hero({ temperatureCelsius, city, determineValue, weatherMain }) {
  return (
    <div>
      <div id="hero" className="hero">
        <div className="hero-content">
          <h1 className=" bebas xxl-font">WEB DEVELOPMENT</h1>
          <p className="subtitle">
            Tansform Your Ideas into Reality with My Full-Stack Development
            Solutions
          </p>
          <Button
            btnClass="btn btn-primary"
            nameBtn="Contact US!"
            linkBtn="#contact"
          />
        </div>

        <div className="weather">
          <span className="material-symbols-sharp">
            {determineValue(weatherMain)}
          </span>{" "}
          <br />
          {city}, {temperatureCelsius}°
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Hero;
