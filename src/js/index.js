//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
<link rel="stylesheet" href="styles.css"></link>

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
<script src="https://kit.fontawesome.com/4cbc1884b1.js" crossorigin="anonymous"></script>




let segundos1 = 0; //numberone
let segundos2 = 0; //number two
let minutos1 = 0; //number three
let minutos2 = 0; //number four
let horas1 = 0; //number fice
let horas2 = 0; //number six

setInterval(() => {
    segundos1++;
    if (segundos1 > 9) {  //number 1
        segundos2++
        segundos1 = 0;
    }
    if(segundos2 > 5) {
        minutos1++;
        segundos2 = 0;
    }
    if(minutos1 > 9){
        minutos2++;
        minutos1 = 0; 
    }
    if(minutos2 > 5){
        horas1++
        minutos2 = 0;
    }
    if(horas1 > 9){
        horas2++;
        horas1 = 0;
    }
    if(horas2 > 5){
        horas2++;
    }


    //render your react application
ReactDOM.render(<Home segundos1={segundos1} segundos2={segundos2} minutos1={minutos1} minutos2={minutos2} horas1={horas1} horas2={horas2}/>, document.querySelector("#app"));

console.log(segundos1, segundos2, minutos1, minutos2, horas1, horas2)

}, 1000);