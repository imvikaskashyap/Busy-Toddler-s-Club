import React from "react";
import "./footer.css";
import button from "./../../assets/rightArrow.png";
import insta from "./../../assets/Instagram_logo_2016.svg.png";
import linkedIn from "./../../assets/174857.png";
import facebook from "./../../assets/facebook.png";
const Footer = () => {
	return (
		<footer>
			<div className="sectionUpper">
				<div className="contact-us">
					<h4>Contact Us</h4>
					<input type="email" placeholder="Enter your email address" />
					<img className="inputBtn" src={button} alt="" />
				</div>
				<div className="about-us">
					<h4>About Us</h4>
					<p>Some information about our company.</p>
				</div>
				<div className="follow-us">
					<h4>Follow Us</h4>
					<div className="social-links">
						<img src={insta} alt="" />
						<img src={linkedIn} alt="" />
						<img src={facebook} alt="" />
					</div>
				</div>
			</div>
			<div className="seticonDown">
				<h5>@All rights reserved</h5>
				<p>©Copyright 2023</p>
			</div>
		</footer>
	);
};

export default Footer;
