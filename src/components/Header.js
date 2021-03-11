import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as GmailIcon } from "../icons/gmail.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as StackOverflowIcon } from "../icons/stack-overflow.svg";
// import { ReactComponent as GitHubIcon } from "../icons/github.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  overflow: hidden;
  background: white;
  display: flex;
  vertical-align: middle;
`;

const NavBar = styled.nav`
  background: white;
  width: 100%;
  font-weight: bold;
  position: fixed;
  & > ul {
    min-height: 48px;
    width: auto;
    padding: 0;
    margin: 0;
    & > li {
      display: inline-block;
      & > a {
        display: inline-block;
        padding: 8px 13px;
        line-height: 32px;
        text-decoration: none;
        color: #223843;
        text-transform: capitalize;
        cursor: pointer;
        &.active {
          color: #ce4257;
        }
      }
    }
  }
  & > button {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    background: transparent;
    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 48px;
      height: 48px;
      border: none;
      float: right;
      right: 30px;
      background: #223843;
      & > svg {
        width: 48px;
        height: 48px;
        fill: white;
      }
    }

    & > ul {
      float: right;
      background: #223843;
      margin: 48px -18px 0 0;
      & > li {
        width: 70%;
        border-bottom: 0.5px solid #e8e8e8;
        & > a {
          color: white;
          width: 70%;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    max-height: 200px;
  }
`;

// const About = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: center;
//   max-width: 1020px;
//   padding: 6% 0;
//   border-bottom: 1px solid #e8e8e8;
//   margin: auto;
//   width: 95%;
//   & > div {
//     width: 50%;
//   }
//   & > img {
//     width: 50%;
//     height: 50%;
//     max-width: 200px;
//     max-height: 200px;
//     border-radius: 100%;
//   }

//   @media only screen and (max-width: 700px) {
//     flex-direction: column;
//     & > img {
//       max-width: 150px;
//       max-height: 150px;
//     }
//     & > div {
//       width: 90%;
//     }
//   }
// `;

// const SocialMedia = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   & > a {
//     padding: 0 5px;
//   }
// `;

const Header = () => {
  // const ProfilePhoto = "/resume-page/images/profile-photo.jpg";
  const sections = [
    // { key: "about", text: "About Us" },
    // { key: "resume", text: "Resume" },
    { key: "portfolio", text: "Portafolio" },
  ];
  const [showMenu, setShowMenu] = useState(
    window.screen.width > 700 ? true : false
  );

  useEffect(
    () =>
      function handleResize() {
        if (window.screen.width > 700) {
          setShowMenu(true);
        }
        window.addEventListener("resize", handleResize);
      }
  );

  return (
    <HeaderWrapper id="about">
      <NavBar id="nav-wrap">
        <button onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon />
        </button>
        {showMenu && (
          <ul id="nav" className="nav">
            {sections.map(({ key, text }, index) => (
              <li key={key}>
                <Link
                  activeClass="active"
                  to={key}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </NavBar>
      {/* <About>
        <img src={ProfilePhoto} alt="Maria Tirado" />
        <div>
          <h1>Maria Tirado</h1>
          <p>
            I’m a frontend developer in continous improvement with passion about
            learning new things!
          </p>
          <SocialMedia>
            <a href="http://linkedin.com/in/maria-tirado-767657162/?locale=en_US">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/mariatiperez">
              <GitHubIcon />
            </a>
            <a href="https://stackoverflow.com/users/13274127/maria-tirado?tab=profile">
              <StackOverflowIcon />
            </a>
            <a href="mailto:maria.tiradope@gmail.com">
              <GmailIcon />
            </a>
          </SocialMedia>
        </div>
      </About> */}
    </HeaderWrapper>
  );
};

export default Header;
