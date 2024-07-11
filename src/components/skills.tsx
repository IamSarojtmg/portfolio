import React from "react";

interface skillsImgs {
  js: string;
  html: string;
  css: string;
  react: string;
  node: string;
  psql: string;
  mongodb: string;
  git: string;
  jest: string;
  express: string;
}

let imgOfSkills: skillsImgs = {
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
  psql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
  jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
};

export const SkillsPage = () => {
  return (
    <section className="skills">
      <a className="anchor"></a>
      <div className="skills-cont">
        <div className="skills-wrapper">
          <h1>Skills</h1>
          <hr />
          <div className="block-wrapper">
            <div className="first-skills-block">
              <img src={imgOfSkills.js} alt="javascript" /> 
              <img src={imgOfSkills.html} alt="html" />
              <img src={imgOfSkills.react} alt="react"/>
              <img src={imgOfSkills.css} alt="css"/>
              <img src={imgOfSkills.node}alt="node" />
            </div>

            <div className="second-skill-block">
            <img src={imgOfSkills.psql} alt="psql" />
              <img src={imgOfSkills.mongodb} alt="mongodb"/>
              <img src={imgOfSkills.jest}alt="jest" />
              <img src={imgOfSkills.express}alt="express" />
              <img src={imgOfSkills.git}alt="git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
