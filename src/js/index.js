//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let digitos = [0,0,0,0,0,0];


setInterval(function() {

    ReactDOM.render(<Home digitos={digitos} />, document.querySelector("#app")); 

    digitos[0]++;
    
    if (digitos[0] === 10) {
        digitos[0] = 0;
        digitos[1]++;
    }

    if (digitos[1] === 10) {
        digitos[1] = 0;
        digitos[2]++;
    }

    if (digitos[2] === 10) {
        digitos[2] = 0;
        digitos[3]++;
    }

    if (digitos[3] === 10) {
        digitos[3] = 0;
        digitos[4]++;
    }

    if (digitos[4] === 10) {
        digitos[4] = 0;
        digitos[5]++;
    }

    if (digitos[5] === 10) {
        digitos[0], digitos[1], digitos[2], digitos[3], digitos[4], digitos[5] = 0;
    }

}
, 500);

