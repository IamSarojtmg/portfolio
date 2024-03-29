import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <a className="anchor" id="home"></a>

        <div className="intro-cont">
          <div className="first-intro">
            <h1 className="full-name">Saroj Tamang</h1>
            <p>
              I am an ambitious, business-focused software developer and
              experienced Service Desk Analyst. Equipped with a robust amount of
              soft skills, eager to learn new languages on both the front and
              back end and contribute to cutting-edge projects - I am looking
              for a role as an entry-level software developer.
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
