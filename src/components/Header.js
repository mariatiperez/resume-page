import React from "react";
import styled from "styled-components";
import { ReactComponent as GmailIcon } from "../icons/gmail.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as StackOverflowIcon } from "../icons/stack-overflow.svg";
import { ReactComponent as GitHubIcon } from "../icons/github.svg";

const HeaderWrapper = styled.div`
	position: relative;
	height: 500px;
	width: 100%;
	text-align: center;
	overflow: hidden;
	background: white;
`;

const NavBar = styled.nav`
	width: 100%;
	font-weight: bold;
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
	padding: 25px 0;
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
					<li className="current"><a className="smoothscroll" href="#about">About</a></li>
					<li><a className="smoothscroll" href="#resume">Resume</a></li>
					<li><a className="smoothscroll" href="#portfolio">Works</a></li>
					<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
					<li><a className="smoothscroll" href="#contact">Contact</a></li>
				</ul>
			</NavBar>
			<About>
				<Photo src={ProfilePhoto} alt="Maria Tirado Photo" />
				<div>
					<h1>Maria Tirado</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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