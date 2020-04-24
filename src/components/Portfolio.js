import React, { useState } from "react";
import styled from "styled-components";
import Slideshow from "./Slider.js";

const PortfolioWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 95%;
  margin: auto;  
  padding: 5% 0;  
  border-bottom: 1px solid #E8E8E8;
  max-width: 1500px;
`;

const ProjectsPreview = styled.div`
  display: flex;
  flex-direction: column;
  & > img {
    width: 100%;
    padding: 15px 0;
    cursor: pointer;
  }
`;

const Portfolio = () => {
  const projects = [[
    "images/coleados/1.png",
    "images/coleados/2.png",
    "images/coleados/3.png",
    "images/coleados/4.png",
    "images/coleados/5.png",
    "images/coleados/6.png"
  ], [
    "images/service/1.png",
    "images/service/2.png",
    "images/service/3.png"
  ], [
    "images/sgr/1.png",
    "images/sgr/2.png",
    "images/sgr/3.png",
    "images/sgr/4.png",
    "images/sgr/5.png"
  ], [
    "images/library/1.png",
    "images/library/2.png"
  ]
  ];
  const [chosenProject, setChosenProject] = useState(0);
  return (
    <PortfolioWrapper id="portfolio">
      <ProjectsPreview>
        {projects.map((urls, index) =>
          <img
            src={urls[0]}
            alt="preview"
            key={"preview/" + urls[0]}
            onClick={() => setChosenProject(index)}
          />
        )}
      </ProjectsPreview>
      <Slideshow slideImages={projects[chosenProject]} />
    </PortfolioWrapper>
  );
};

export default Portfolio;