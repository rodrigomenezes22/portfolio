import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../src/images/logo-cleveland-web-final.svg";

export default function Header({
  linkedin,
  github,
  scrollToTop,
  aboutIsVisible,
  skillsVisible,
  workVisible,
  heroVisible,
  languagesVisible,
  contactVisible,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClassActive, setIsClassActive] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 30) {
      setIsScrolled(true);
    } else if (position < 30) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileNav = (e) => {
    console.log(e.target);
    if (e.target.innerText === "menu") {
      setIsClassActive(false);
    } else if (e.target.innerText === "close") {
      setIsClassActive(true);
    }
  };

  const closeMenu = (e) => {
    let hamBurger = document.querySelector(".navbar-toggler");
    if (hamBurger.firstChild.innerText === "menu") {
      setIsClassActive(false);
    } else if (hamBurger.firstChild.innerText === "close") {
      setIsClassActive(true);
    }
  };

  return (
    <div>
      <header className={isScrolled ? "sticky scrolled" : "sticky"}>
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <a href="#hero">
                <img src={Logo} alt="Cleveland Web" width={120} height={80} />
              </a>

              <button
                aria-controls="basic-navbar-nav"
                onClick={handleMobileNav}
                type="button"
                aria-label="Toggle navigation"
                className="navbar-toggler collapsed">
                <span class="material-symbols-sharp">
                  {isClassActive ? "menu" : "close"}
                </span>
              </button>
            </div>

            <div
              id="navbarBasicExample"
              className={isClassActive ? "navbar-menu" : "navbar-menu open"}>
              <div className="navbar-start"></div>

              <div className="navbar-end">
                <a
                  className={heroVisible ? "navbar-item active" : "navbar-item"}
                  href="#hero"
                  onClick={closeMenu}>
                  Home
                </a>

                <a
                  className={
                    aboutIsVisible ? "navbar-item active" : "navbar-item"
                  }
                  href="#about-me"
                  onClick={closeMenu}>
                  About
                </a>

                <a
                  className={
                    skillsVisible ? "navbar-item active" : "navbar-item"
                  }
                  href="#skills"
                  onClick={closeMenu}>
                  Skills
                </a>

                <a
                  className={
                    languagesVisible ? "navbar-item active" : "navbar-item"
                  }
                  href="#languages"
                  onClick={closeMenu}>
                  Languages
                </a>
                <a
                  className={
                    contactVisible ? "navbar-item active" : "navbar-item"
                  }
                  href="#contact"
                  onClick={closeMenu}>
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
