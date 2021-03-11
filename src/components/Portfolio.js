import React, { useState } from "react";
import styled from "styled-components";
import Slideshow from "./Slider.js";

const PortfolioWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  border-bottom: 1px solid #e8e8e8;
  padding: 5% 0;
  max-width: 1020px;
  & > i,
  h2 {
    margin: 10px 20px;
  }
  &.vertical > div > div > div > div > div > div > img {
    max-height: 650px;
    width: auto !important;
  }
`;

const ProjectsPreview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  & > img {
    cursor: pointer;
    max-height: 100px;
    max-width: 100px;
  }
`;

const Portfolio = () => {
  const projects = [
    {
      name: "coleados",
      images: [
        "/images/coleados/0.png",
        "/images/coleados/1.png",
        "/images/coleados/2.png",
        "/images/coleados/3.png",
        "/images/coleados/4.png",
        "/images/coleados/5.png",
        "/images/coleados/6.png",
      ],
      orientation: "horizontal",
    },
    {
      name: "service",
      images: [
        "/images/service/0.png",
        "/images/service/1.png",
        "/images/service/2.png",
        "/images/service/3.png",
      ],
      orientation: "horizontal",
    },
    {
      name: "sgr",
      images: [
        "/images/sgr/0.png",
        "/images/sgr/1.png",
        "/images/sgr/3.png",
        "/images/sgr/4.png",
        "/images/sgr/5.png",
        // ], [
        //   "/images/library/0.png",
        //   "/images/library/1.png",
        //   "/images/library/2.png"
      ],
      orientation: "horizontal",
    },
    {
      name: "cfive",
      images: [
        "/images/cfive/0.png",
        "/images/cfive/1.jpg",
        "/images/cfive/2.jpg",
        "/images/cfive/3.jpg",
        "/images/cfive/4.jpg",
        "/images/cfive/5.jpg",
        "/images/cfive/6.jpg",
        "/images/cfive/7.jpg",
        "/images/cfive/8.jpg",
        "/images/cfive/9.jpg",
        "/images/cfive/10.jpg",
        "/images/cfive/11.jpg",
        // "/images/cfive/12.jpg",
      ],
      orientation: "vertical",
    },
    {
      name: "nextline",
      images: [
        "/images/nextline/0.png",
        "/images/nextline/1.jpg",
        "/images/nextline/2.jpg",
        "/images/nextline/3.jpg",
        "/images/nextline/4.jpg",
        "/images/nextline/5.jpg",
        "/images/nextline/6.jpg",
        "/images/nextline/7.jpg",
        "/images/nextline/8.jpg",
      ],
      orientation: "vertical",
    },
  ];
  const [chosenProject, setChosenProject] = useState(0);
  return (
    <PortfolioWrapper
      id="portfolio"
      className={projects[chosenProject].orientation}
    >
      <h2>¡Aquí puedes ver algunas cosas que hemos hecho!</h2>
      <i>
        Haz click en alguno de los iconos y podrás ver las imágenes para cada
        proyecto :)
      </i>
      <ProjectsPreview>
        {projects.map((urls, index) => (
          <img
            src={urls.images[0]}
            alt="preview"
            key={"preview/" + urls.images[0]}
            onClick={() => setChosenProject(index)}
          />
        ))}
      </ProjectsPreview>
      <Slideshow slideImages={projects[chosenProject].images.slice(1)} />
    </PortfolioWrapper>
  );
};

export default Portfolio;
