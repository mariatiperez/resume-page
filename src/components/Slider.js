import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";

const SlideContainer = styled.div`
  width: 75%;
  max-width: 750px;
  margin: auto;
`;

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true
};

const Slideshow = ({ slideImages }) => {
  return (
    <SlideContainer>
      <Slide {...properties}>
        {slideImages.map(url => (
          <img
            src={url}
            alt="slide"
            key={"slider/" + url}
            style={{
              width: "100%",
              padding: "15px 0"
            }} />
        ))}
      </Slide>
    </SlideContainer>
  )
}

export default Slideshow;