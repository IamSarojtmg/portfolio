import React from "react";
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import profilePic from "../images/Screenshot from 2024-03-01 14-25-04.png";

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
        <section className="test">

        <img
            className="my-img"
            src={profilePic}
            alt="image of the owner of the portfolio"
            />
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
        <div className="phone-num">
        <p>Phone Number: 07387224983</p>
          <p>Email Address: saroj_tamang@aol.com</p>
          <a
            className="view-cv"
            href="https://docs.google.com/document/d/e/2PACX-1vTugeTsQ6xwSYN2FdBrtuwIesT5l7QNXu7rqPFDGPDv5oZBSoPzFm4wHrORuVwJc7ssrYk1_l7yM6uU/pub"
            >
            View CV
          </a>
              </div>
            </section>
      </div>
    </section>
  );
};
