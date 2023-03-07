import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.jpeg";
import search from "./../../assets/search.png";
import shoppingBag from "./../../assets/shoppingBag.png";
import user from "./../../assets/user.png";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<img src={logo} alt="logo" />
			<ul className="navbar">
				<li className="nav-item">
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/gallery" className="nav-link">
						Gallery
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/catalogue" className="nav-link">
						Catalogue
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link">
						About Us
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link">
						Contact Us
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/book" className="nav-link">
						Book Us
					</Link>
				</li>
			</ul>
			<div className="searchPart">
				<img src={search} alt="search" />
				<img src={shoppingBag} alt="shoppingBag" />
				<img src={user} alt="user" />
			</div>
		</nav>
	);
};

export default Navbar;
