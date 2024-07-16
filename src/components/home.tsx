import React from "react";
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
const bio:string = "I'm a Full Stack Developer specializing in JavaScript, React, and Node.js for frontend development. On the backend, I work with Express, PostgreSQL, MongoDB, and Mongoose. I use Git and GitHub for seamless collaboration. My recent projects incorporate Test-Driven Development (TDD) with Jest, and I'm exploring TypeScript to enhance my skills."

export const Home: React.FC = () => {
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
