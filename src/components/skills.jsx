import React from "react";

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
              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              />

              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
              />

              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
              />

              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              />

              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
              />
            </div>

            <div className="second-skill-block">
              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg"
              />

              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
              />

              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg"
              />

              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
              />

              <img
                width={100}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
