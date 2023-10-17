import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="trafficLight">
			<div 
			onClick={() => setSelectedColor("red")}
			className={
				"light_red" + (selectedColor === "red" ? "_glow" :"")}></div>
			<div 
			onClick={() => setSelectedColor("yellow")}
			className={
				"light_yellow" + (selectedColor === "yellow" ? "_glow" :"")}></div>
			<div 
			onClick={() => setSelectedColor("green")}
			className={
				"light_green" + (selectedColor === "green" ? "_glow" :"")}></div>			 
		</div>
	);
};

export default Home;
