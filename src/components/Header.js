import React from "react";
import styled from "styled-components";
import { ReactComponent as GmailIcon } from "../icons/gmail.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as StackOverflowIcon } from "../icons/stack-overflow.svg";
import { ReactComponent as GitHubIcon } from "../icons/github.svg";

const HeaderWrapper = styled.section`
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
			}
		}
	}
`;

const Photo = styled.img`
	width: 200px;
	height: 200px;
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
	return (
		<HeaderWrapper id="about">
			<NavBar id="nav-wrap">
				<ul id="nav" className="nav">
					<li className="current"><a href="#about">About</a></li>
					<li><a href="#resume">Resume</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
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