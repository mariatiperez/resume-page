import React from "react";
import styled from "styled-components";
// import { ReactComponent as EducationIcon } from "../icons/education.png";

const ResumeWrapper = styled.section``;

const ResumeSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 1200px;
  margin: auto;
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  & > h2 {
    margin: 0 auto auto;
    border-bottom: 3px solid #ce4257;
    width: 120px;
    padding: 5px 0;
  }
  & > img {
    width: 96px;
    margin: 1em auto 0 auto;
  }
  `;

const SectionBody = styled.div`
  margin: 0 20px;
  text-align: left;
`;

const Resume = () => {
  const EducationIcon = "images/education.png";
  const JobIcon = "images/job.png";
  return (
    <ResumeWrapper id="resume">
      <ResumeSection>
        <SectionTitle>
          <img src={EducationIcon} />
          <h2>Education</h2>
        </SectionTitle>
        <SectionBody>
          <h1>Bachelor in Computer Science Engineering</h1>
          <i>Universidad Católica Andres Bello (UCAB) - Venezuela ∙ Septiembre 2015 - Octubre 2020</i>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </SectionBody>
      </ResumeSection>
      <ResumeSection>
        <SectionTitle>
          <img src={JobIcon} />
          <h2>Experience</h2>
        </SectionTitle>
        <SectionBody>
          <h1>Junior Frontend Developer</h1>
          <i>Telesero ∙ Octubre 2019 - Marzo 2020</i>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <h1>Technology and Information Analyst</h1>
          <i>Universidad Católica Andres Bello (UCAB) ∙ Noviembre 2018 - Septiembre 2019</i>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </SectionBody>
      </ResumeSection>
      {/* <Education> 
    <Experience></Experience>
    <Skills></Skills>
    <Languages></Languages>
    <Hobbies></Hobbies> */}
    </ResumeWrapper>);
};

export default Resume;