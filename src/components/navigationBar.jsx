import React, { useRef } from "react";
import { Home } from "./home.jsx";
import { AboutMe } from "./aboutMe.jsx";
import { SkillsPage } from "./skills.jsx";
import { Projects } from "./projects.jsx";
import { ContactMe } from "./contactMe.jsx";

export const NavigationBar = () => {
  const home = useRef(null);
  const aboutMe = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contactMe = useRef(null)

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="nav-header">
        <ul>
          <li
            onClick={() => {
              scrollToSection(home);
            }}
            className="link"
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollToSection(aboutMe);
            }}
            className="link"
          >
            About Me
          </li>
          <li
            onClick={() => {
              scrollToSection(skills);
            }}
            className="link"
          >
            Skills
          </li>
          <li
            onClick={() => {
              scrollToSection(projects);
            }}
            className="link"
          >
            Projects
          </li>
          <li onClick={() => {
            scrollToSection(contactMe)
          }} className="link">Contact me</li>
        </ul>
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

      <div ref={contactMe}><ContactMe/></div>
    </>
  );
};
