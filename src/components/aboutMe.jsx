import React from "react";
import profilePic from "../images/Screenshot from 2024-03-01 14-25-04.png";

export const AboutMe = () => {
  return (
    <section className="about-me">
      <a className="anchor" id="about-me"></a>
      <div className="about-me-cont">
        <div className="about-me-wrapper">
          <h1>About me</h1>
          <img
            width={200}
            className="my-img"
            src={profilePic}
            alt="image of the owner of the portfolio"
          />
          <p className="bio">
            I am a seasoned Service Desk Analyst with a passion for full-stack
            development. Currently, I am actively pursuing opportunities as a
            Junior Software Developer where I can leverage my innovative
            problem-solving skills to make a meaningful impact.
          </p>
          <h1>Contact Details</h1>
          <p>Phone Number: 07387224983</p>
          <p>Email Address: saroj_tamang@aol.com</p>
          <a
            className="view-cv"
            href="https://docs.google.com/document/d/1SmNN_ysF2mqTrQP67leWvXxMUijojsSDR_rG4Fyjw-U/edit?usp=sharing"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};
