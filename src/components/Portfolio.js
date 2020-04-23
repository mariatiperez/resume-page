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
    "images/coleados/coleados.png",
    "images/coleados/coleados2.png"
  ], [
    "images/sgr/sgr1.png",
    "images/sgr/sgr2.png"
  ]];
  const [chosenProject, setChosenProject] = useState(0);
  return (
    <PortfolioWrapper>
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