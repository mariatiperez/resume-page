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
        "/resume-page/images/coleados/0.png",
        "/resume-page/images/coleados/1.png",
        "/resume-page/images/coleados/2.png",
        "/resume-page/images/coleados/3.png",
        "/resume-page/images/coleados/4.png",
        "/resume-page/images/coleados/5.png",
        "/resume-page/images/coleados/6.png",
      ],
      orientation: "horizontal",
    },
    {
      name: "service",
      images: [
        "/resume-page/images/service/0.png",
        "/resume-page/images/service/1.png",
        "/resume-page/images/service/2.png",
        "/resume-page/images/service/3.png",
      ],
      orientation: "horizontal",
    },
    {
      name: "sgr",
      images: [
        "/resume-page/images/sgr/0.png",
        "/resume-page/images/sgr/1.png",
        "/resume-page/images/sgr/3.png",
        "/resume-page/images/sgr/4.png",
        "/resume-page/images/sgr/5.png",
        // ], [
        //   "/resume-page/images/library/0.png",
        //   "/resume-page/images/library/1.png",
        //   "/resume-page/images/library/2.png"
      ],
      orientation: "horizontal",
    },
    {
      name: "cfive",
      images: [
        "/resume-page/images/cfive/0.png",
        "/resume-page/images/cfive/1.jpg",
        "/resume-page/images/cfive/2.jpg",
        "/resume-page/images/cfive/3.jpg",
        "/resume-page/images/cfive/4.jpg",
        "/resume-page/images/cfive/5.jpg",
        "/resume-page/images/cfive/6.jpg",
        "/resume-page/images/cfive/7.jpg",
        "/resume-page/images/cfive/8.jpg",
        "/resume-page/images/cfive/9.jpg",
        "/resume-page/images/cfive/10.jpg",
        "/resume-page/images/cfive/11.jpg",
        // "/resume-page/images/cfive/12.jpg",
      ],
      orientation: "vertical",
    },
    {
      name: "nextline",
      images: [
        "/resume-page/images/nextline/0.png",
        "/resume-page/images/nextline/1.jpg",
        "/resume-page/images/nextline/2.jpg",
        "/resume-page/images/nextline/3.jpg",
        "/resume-page/images/nextline/4.jpg",
        "/resume-page/images/nextline/5.jpg",
        "/resume-page/images/nextline/6.jpg",
        "/resume-page/images/nextline/7.jpg",
        "/resume-page/images/nextline/8.jpg",
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
