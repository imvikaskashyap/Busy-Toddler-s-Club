import React from "react";
import toys from "./../../assets/toys.jfif";
import "./gallery.css";

const Gallery = () => {
	return (
		<div className="main">
			<div className="gallery_img">
				<img src={toys} alt="" />
			</div>
			<div className="text">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
					voluptates consequuntur sint doloribus, illum deleniti excepturi eius
					ea animi suscipit hic provident ut atque aut, quasi aspernatur
					accusamus voluptatem illo aliquam nobis, labore enim est omnis!
					Maiores rem rerum est blanditiis voluptatum. Minus obcaecati doloribus
					maxime ipsa velit porro quibusdam, mollitia tempora voluptatibus harum
					voluptatum doloremque labore dolores adipisci itaque quasi
					reprehenderit totam praesentium modi! Sit voluptate dolore eveniet
				</p>
				<h5>Click here to go Gallery</h5>
				<button>Click</button>
			</div>
		</div>
	);
};

export default Gallery;
