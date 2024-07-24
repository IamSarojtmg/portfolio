import React from "react";
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
const bio = (
  <>
  "I'm a Full Stack Developer specializing in <strong><em>JavaScript, React and Node.js</em></strong>,  for frontend development. On the backend, I work with <strong><em>Express, PostgreSQL, MongoDB, and Mongoose</em></strong>. I use <strong><em>Git and GitHub</em></strong> for seamless collaboration. My recent projects incorporate <strong><em> Test-Driven Development (TDD) with Jest,</em></strong> and I'm exploring <strong><em>TypeScript</em></strong> to enhance my skills."
  </>
)

export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <a className="anchor" id="home"></a>

        <div className="intro-cont">
          <div className="first-intro">
            <h1 className="full-name">Saroj Tamang</h1>
            <p>{bio}
            </p>
          </div>

          <div className="second-intro">
            <a href="https://github.com/IamSarojtmg">
              <img
                src={github}
                width={40}
                height={40}
                alt="an image of github Icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/sarojtamang-coder/">
              <img
                src={linkedin}
                width={40}
                height={40}
                alt="an image of linkedin icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
