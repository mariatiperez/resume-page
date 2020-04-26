import React, { useState } from "react";
import styled from "styled-components";
import Slideshow from "./Slider.js";

const PortfolioWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;  
  border-bottom: 1px solid #E8E8E8;
  padding: 5% 0;    
  max-width: 1020px;
  & > i, h2 {
    margin: 10px 20px;
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
    max-height: 20%;
    max-width: 20%;
  }
`;

const Portfolio = () => {
  const projects = [[
    "images/coleados/0.png",
    "images/coleados/1.png",
    "images/coleados/2.png",
    "images/coleados/3.png",
    "images/coleados/4.png",
    "images/coleados/5.png",
    "images/coleados/6.png"
  ], [
    "images/service/0.png",
    "images/service/1.png",
    "images/service/2.png",
    "images/service/3.png"
  ], [
    "images/sgr/0.png",
    "images/sgr/1.png",
    "images/sgr/3.png",
    "images/sgr/4.png",
    "images/sgr/5.png"
    // ], [
    //   "images/library/0.png",
    //   "images/library/1.png",
    //   "images/library/2.png"
  ]
  ];
  const [chosenProject, setChosenProject] = useState(0);
  return (
    <PortfolioWrapper id="portfolio">
      <h2>Check out some things I've done!</h2>
      <i>Click one of the icons and see the images of that project.</i>
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
      <Slideshow slideImages={projects[chosenProject].slice(1)} />
    </PortfolioWrapper>
  );
};

export default Portfolio;