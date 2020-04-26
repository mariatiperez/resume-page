import React from "react";
import styled from "styled-components";

const ResumeSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 95%;
  max-width: 1020px;
  margin: auto;  
  padding: 5% 0;  
  border-bottom: 1px solid #E8E8E8;
  
	@media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  & > h1 {
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
  margin-right: 20px;
  text-align: left;
  
	@media only screen and (max-width: 700px) {
    text-align: center;
    margin: 0 20px;
    & > h2 {
      font-size: 1.17em;
    }
    & > p {
      text-align: left;
    }
  }
`;

const Resume = () => {
  const EducationIcon = "/resume-page/images/education.png";
  const JobIcon = "/resume-page/images/job.png";
  return (
    <section id="resume">
      <ResumeSection>
        <SectionTitle>
          <img src={EducationIcon} />
          <h1>Education</h1>
        </SectionTitle>
        <SectionBody>
          <h2>Bachelor in Computer Science Engineering</h2>
          <i>Universidad Católica Andres Bello (UCAB) - Venezuela ∙ Septiembre 2015 - Octubre 2020</i>
          <p>
            During my studies I had the opportunity to live different points of view,
            which gave me very good experiences. All my life I have been a student of
            good grades, which was not lacking in college! I received recognition
            for belonging to the top 10 students with the best grades.
          </p><p>
            From my second year of studies
            I started working at the university to help pay for my studies and
            I was a student tutor for more than two years.
          </p><p>
            I actively participated in the activities organized by the management
            of my school and my colleagues elected me as representative of the students
            before the school council during 2018 - 2019 period.
          </p>
        </SectionBody>
      </ResumeSection>
      <ResumeSection>
        <SectionTitle>
          <img src={JobIcon} />
          <h1>Experience</h1>
        </SectionTitle>
        <SectionBody>
          <h2>Junior Frontend Developer</h2>
          <i>Telesero ∙ October 2019 - March 2020</i>
          <p>In this job I was in a Frontend Team in constantly communication with the Backend Team. I built products using ReactJS, RXJS and Redux. I had to design and develop styled components for some applications that I started from scratch, also I made some refactor to their previous apps.</p>
          <h2>Technology and Information Analyst</h2>
          <i>Universidad Católica Andres Bello (UCAB) ∙ November 2018 - September 2019</i>
          <p>In this job I worked for a technology coordination of the university. I made documentation of their previous applications, and made an application from scratch using Angular. Also, I collaborate at backend group with the desing and develop of the database and API using mySQL, typeORM, ExpressJS and nodeJS.</p>
        </SectionBody>
      </ResumeSection>
    </section>);
};

export default Resume;