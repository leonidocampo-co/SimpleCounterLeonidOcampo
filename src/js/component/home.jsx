import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Counter</h1>
			<p>
				<img src={rigoImage} />
			</p>
			
				<div className = "reloj">reloj</div>
				<div id="seconds1">0</div>
				<div id="seconds2">0</div>
				<div id = "minutes1">0</div>
				<div id = "minutes2">0</div>
				<div id = "hour1">0</div>
				<div id = "hour1">0</div>	
			
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">Leonid Ocampo</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
