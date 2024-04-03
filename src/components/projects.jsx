import React, { useState } from "react";
import { CarouselItem } from "./carouselItems";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      image: require("../images/ncBackground.png"),
      info: "A social content rating and discussion platform created using React, Express, and PostgreSQL.",
      link: "https://melodic-paletas-bceb06.netlify.app/",
    },
    {
      image: require("../images/calc.png"),
      info: "A page where users can do basic math. It was created using HTML, CSS, and JavaScript.",
      link: "https://iamsarojtmg.github.io/calculator/",
    },
    {
      image: require("../images/etch.png"),
      info: "It's a game that lets users draw. Created using HTML, CSS, and JavaScript.",
      link: "https://iamsarojtmg.github.io/Etch-a-Sketch/",
    },
    {
      image: require("../images/tiktak.png"),
      info: "A game of TikTakToe. Created using HTML, CSS, and JavaScript.",
      link: "https://iamsarojtmg.github.io/TikTakToe-JS/",
    },
  ];

  const updateIndex = (newIndex) => {
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
                <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
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
                <span class="material-symbols-outlined">arrow_forward_ios</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
