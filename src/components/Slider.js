import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";

const SlideContainer = styled.div`
  width: 75%;
  max-width: 750px;
  margin: auto;

  & > div > div > div > div > div {
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media only screen and (max-width: 375px) {
      max-height: 200px;
    }
  }
`;

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
};

const Slideshow = ({ slideImages, orientation }) => {
  return (
    <SlideContainer>
      <Slide {...properties}>
        {slideImages.map((url) => (
          <img
            src={url}
            alt="slide"
            key={"slider/" + url}
            style={
              orientation === "vertical"
                ? {
                    maxHeight: "650px",
                    width: "auto !important",
                  }
                : {
                    width: "100%",
                    margin: "auto",
                  }
            }
          />
        ))}
      </Slide>
    </SlideContainer>
  );
};

export default Slideshow;
