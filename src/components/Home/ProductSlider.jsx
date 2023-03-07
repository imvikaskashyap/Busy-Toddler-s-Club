import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./Product";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productSlider.css";

class ProductSlider extends Component {
	constructor() {
		super();
		this.state = {
			slides: [
				{
					img: "https://images.pexels.com/photos/13725133/pexels-photo-13725133.jpeg?auto=compress&cs=tinysrgb&w=600",
				},
				{
					img: "https://images.pexels.com/photos/1183960/pexels-photo-1183960.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
				},
				{
					img: "https://images.pexels.com/photos/8429910/pexels-photo-8429910.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
				},

				{
					img: "https://images.pexels.com/photos/7142498/pexels-photo-7142498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
				},
				{
					img: "https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg?auto=compress&cs=tinysrgb&w=600",
				},
				{
					img: "https://images.pexels.com/photos/590750/pexels-photo-590750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
				},
			],
		};
	}
	render() {
		let settings = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
			],
		};
		return (
			<div>
				<h1 className="heading">Products</h1>
				<Slider {...settings}>
					{this.state.slides.map((slide, index) => {
						return (
							<div key={index}>
								<ProductCard imgSrc={slide.img} />
								{/* <img src={slide.img} alt={`slide${index}`} /> */}
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
}

export default ProductSlider;
