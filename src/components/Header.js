import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as GmailIcon } from "../icons/gmail.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as StackOverflowIcon } from "../icons/stack-overflow.svg";
import { ReactComponent as GitHubIcon } from "../icons/github.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";

const HeaderWrapper = styled.div`
	position: relative;
	height: 350px;
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
				&.current > a {
					color: #CE4257;
				}
			& > a {
				display: inline-block;
				padding: 8px 13px;
				line-height: 32px;
				text-decoration: none;
				color: #223843;
				text-transform: capitalize;
			}
		}
	}
	& > button {
		display: none;
	}

	@media only screen and (max-width: 700px) {
		background: transparent;
		& > button {
			display: block;
		position: relative;
			width: 48px;
			height: 48px;
      border: none;
      float: right;
      right: 30px;
			background: #223843;
			& > svg {
				width: 30px;
				height: 30px;
				fill: white;
			}
		}

		& > ul {
      float: right;
			background: #223843;
			margin: 48px -18px 0 0;
			& > li {
				width: 70%;
				border-bottom: 0.5px solid #E8E8E8;
				& > a {
					color: white;
				}
			}

		}
	}
`;

const Photo = styled.img`
	width: 50%;
	height: 50%;
	max-width: 200px;
	max-height: 200px;
	border-radius: 100%;
`;

const About = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	max-width: 1020px;
	padding: 50px 0 0;
	margin: auto;
	& > div {
		width: 50%;
	}
`;

const SocialMedia = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	& > a {
		padding: 0 5px;
	}
`;

const Header = () => {
	const ProfilePhoto = "images/profile-photo.jpg";
	const sections = ["about", "resume", "portfolio"];
	const [chosenSection, setChosenSection] = useState(-1);
	const [showMenu, setShowMenu] = useState(window.screen.width > 700 ? true : false);

	useEffect(() =>
		function handleResize() {
			if (window.screen.width > 700) {
				setShowMenu(true);
			}
			window.addEventListener('resize', handleResize)
		}
	);

	return (
		<HeaderWrapper id="about">
			<NavBar id="nav-wrap">
				<button onClick={() => setShowMenu(!showMenu)}><MenuIcon /></button>
				{showMenu &&
					<ul id="nav" className="nav">
						{sections.map((section, index) => (
							<li key={section}
								className={chosenSection === index ? "current" : ""}><a
									href={"#" + section}
									onClick={() => setChosenSection(index)}
									className="smoothscroll">
									{section}
								</a>
							</li>))}
					</ul>
				}
			</NavBar>
			<About>
				<Photo src={ProfilePhoto} alt="Maria Tirado Photo" />
				<div>
					<h1>Maria Tirado</h1>
					<p>
						I’m a frontend developer in continous improvement with
						passion about learning new things!
					</p>
					<SocialMedia>
						<a href="https://www.linkedin.com/in/mar%C3%ADa-eugenia-tirado-p%C3%A9rez-767657162/?locale=en_US"><LinkedInIcon /></a>
						<a href="https://github.com/mariatiperez"><GitHubIcon /></a>
						<a href="https://stackoverflow.com/users/13274127/maria-tirado?tab=profile"><StackOverflowIcon /></a>
						<a href="mailto:mariatiperez@gmail.com"><GmailIcon /></a>
					</SocialMedia>
				</div>
			</About>
		</HeaderWrapper>
	);
};

export default Header;