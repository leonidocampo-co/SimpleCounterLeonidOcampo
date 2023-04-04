import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Simple Counter Project <i class="fa fa-globe"></i></h1>
			<p>
				<img src={rigoImage} />
			</p>
			
			<div className = "relojpadre d-flex flex-row  justify-content-center bg-dark text-white">
				<div className = "mx-2 p-2"><i class="fa fa-clock"></i></div>
				<div className = "mx-2 p-2"id = "hour2">{props.horas2}</div>
				<div className = "mx-2 p-2"id = "hour1">{props.horas1}</div>
				<div className = "mx-2 p-2"id = "minutes2">{props.minutos2}</div>
				<div className = "mx-2 p-2" id = "minutes1">{props.minutos1}</div>	
				<div className = "mx-2 p-2"  id="seconds2">{props.segundos2}</div>
				<div className = "mx-2 p-2" id="seconds1">{props.segundos1}</div>
			</div>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">Leonid Ocampo</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
