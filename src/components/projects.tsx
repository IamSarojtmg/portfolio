import React, { useState } from "react";
//@ts-ignore
import { CarouselItem } from "./carouselItems";
import ncBackground from "../images/ncBackground.png";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  interface projectsDetails {
    image: string;
    info: JSX.Element;
    link: string;
  }

  const ncBio = (
    <>
  A social content rating and discussion platform created using <strong><em>React,Node PostgreSQL, Jest</em></strong>
    </>
  )

  const ticketMasterBio = (
    <>
    Static website built using - <strong><em>React, Node, TypeScript, CSS</em></strong>
    </>
  )

  const bitBuildersBio = (
    <>
    Team project buit with <strong><em>React Native, MongoDB, Express, Bcrypt.js, Victory Native, WebGL, Express-Validator</em></strong>
    </>
  )

  const tikTakBio = (
    <>
    A game of TikTakToe. Created using <strong><em>HTML, CSS, and JavaScript</em></strong>
    </>
  )

  const projects: projectsDetails[] = [
    {
      image: ncBackground, //import instead of using require
      info: ncBio,
      link: "https://melodic-paletas-bceb06.netlify.app/",
    },
    {
      image: require("../images/Ticketmaster.png"),
      info: ticketMasterBio,
      link: "https://chic-bombolone-96a8bf.netlify.app/",
    },
    {
      image: require("../images/Screenshot 2024-04-26 154059.png"),
      info: bitBuildersBio,
      link: "https://northcoders.com/project-phase/neon-active",
    },
    {
      image: require("../images/tiktak.png"),
      info: tikTakBio,
      link: "https://iamsarojtmg.github.io/TikTakToe-JS/",
    },
    // {
    //   image: require("../images/calc.png"),
    //   info: "A page where users can do basic math. It was created using HTML, CSS, and JavaScript.",
    //   link: "https://iamsarojtmg.github.io/calculator/",
    // },
    // {
    //   image: require("../images/etch.png"),
    //   info: "It's a game that lets users draw. Created using HTML, CSS, and JavaScript.",
    //   link: "https://iamsarojtmg.github.io/Etch-a-Sketch/",
    // },
  ];

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= projects.length) {
      newIndex = projects.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <section className="projects">
      <a className="anchor"></a>
      <div className="projects-cont">
        <h1 className="project-heading">Projects</h1>
        <div className="projects-wrapper">
          <div className="carousel">
            <div
              className="inner"
              style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
              {projects.map((item, index) => {
                return <CarouselItem item={item} key={index} />;
              })}
            </div>

            <div className="carousel-buttons">
              <button
                className="button-arrow"
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
              >
                <span className="material-symbols-outlined">
                  arrow_back_ios
                </span>{" "}
              </button>
              <div className="indicators">
                {projects.map((item, index) => {
                  return (
                    <button
                      className="indicator-buttons"
                      onClick={() => {
                        updateIndex(index);
                      }}
                    >
                      <span
                        className={`material-symbols-outlined ${
                          index === activeIndex
                            ? "indicator-symbol-active"
                            : "indicator-symbol"
                        }`}
                      >
                        radio_button_checked
                      </span>
                    </button>
                  );
                })}
              </div>
              <button
                className="button-arrow"
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
              >
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
