import React from "react";
import Carousel from "framer-motion-carousel";
import Gallery from "./Gallery";
import "./Home.css";

import img1 from "./../../assets/img1.jpg";
import img2 from "./../../assets/img2.jpg";
import img3 from "./../../assets/img3.jpg";
import calendar from "./../../assets/icons8-calendar-48.png";
import vehicle from "./../../assets/icons8-ecommerce-64.png";
import fairytale from "./../../assets/icons8-fairytale-48.png";
import video from "./../../assets/video.mp4";
import ProductSlider from "./ProductSlider";

const Home = () => {
	return (
		<div>
			<div className="carousel">
				<Carousel>
					<img className="img" src={img1} />
					<img className="img" src={img2} />
					<img className="img" src={img3} />
				</Carousel>
			</div>

			<div className="deliverySetup">
				<div className="deliverySetup_heading">
					<h2>How it Works!</h2>
					<p>It's easy as 1,2,3...</p>
				</div>
				<div className="stepsToShopping">
					<div className="steps">
						<img src={calendar} alt="calendar" />
						<h2>1.Book items</h2>
						<p>Lorem ipsum dolor sit adipisicing.</p>
					</div>
					<div className="steps">
						<img src={vehicle} alt="vehicle" />
						<h2>2.We Delivery Setup</h2>
						<p>Lorem ipsum dolor sit adipisicing.</p>
					</div>
					<div className="steps">
						<img src={fairytale} alt="fairytale" />
						<h2>3.Enjoy your party</h2>
						<p>Lorem ipsum dolor sitadipisicing.</p>
					</div>
				</div>
			</div>

			<div className="videoSection">
				<video muted loop autoPlay>
					<source src={video} type="video/mp4" />
				</video>
			</div>
			<ProductSlider />
			<h1 className="galleryHeading">Gallery</h1>
			<Gallery />
		</div>
	);
};

export default Home;
