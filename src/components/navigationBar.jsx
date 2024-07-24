import React, { useRef } from "react";
import { Home } from "./home.tsx";
import { AboutMe } from "./aboutMe.jsx";
import { SkillsPage } from "./skills.tsx";
import { Projects } from "./projects.tsx";
import { ContactMe } from "./contactMe.jsx";
import { AiOutlineMenu } from "react-icons/ai";

export const NavigationBar = () => {
  const home = useRef(null);
  const aboutMe = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contactMe = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      <header className="nav-header">
        <ul ref={navRef}>
          <div className="nav-cont">
            <li
              onClick={() => {
                showNavbar();
                scrollToSection(home);
              }}
              className="link"
            >
              Home
            </li>
            <li
              onClick={() => {
                showNavbar();
                scrollToSection(aboutMe);
              }}
              className="link"
            >
              About Me
            </li>
            <li
              onClick={() => {
                showNavbar();
                scrollToSection(skills);
              }}
              className="link"
            >
              Skills
            </li>
            <li
              onClick={() => {
                showNavbar();
                scrollToSection(projects);
              }}
              className="link"
            >
              Projects
            </li>
            <li
              onClick={() => {
                showNavbar();
                scrollToSection(contactMe);
              }}
              className="link"
            >
              Contact me
            </li>
          </div>
          <button className="nav-close-btn" onClick={showNavbar}>
            x
          </button>
        </ul>
        <button className="nav-btn" onClick={showNavbar}>
          <AiOutlineMenu
          />
        </button>
      </header>

      <div ref={home}>
        <Home />
      </div>

      <div ref={aboutMe}>
        <AboutMe />
      </div>

      <div ref={skills}>
        <SkillsPage />
      </div>

      <div ref={projects}>
        <Projects />
      </div>

      <div ref={contactMe}>
        <ContactMe />
      </div>
    </>
  );
};
