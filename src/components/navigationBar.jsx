import React, { useRef } from "react";
import { Home } from "./home.jsx";
import { AboutMe } from "./aboutMe.jsx";
import {SkillsPage} from './skills.jsx'

export const NavigationBar = () => {
  const home = useRef(null)
  const aboutMe = useRef(null);
  const skills = useRef(null)

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <header className="nav-header">
        <ul>
          <li onClick={() => {
            scrollToSection(home)
          }} className="link">Home</li>
          <li onClick={() => {
            scrollToSection(aboutMe)
          }} className="link">About Me</li>
          <li onClick={() => {
            scrollToSection(skills)
          }} className="link">Skills</li>
          <li className="link">Projects</li>
          <li className="link">Contact me</li>
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
    </>
  );
};
