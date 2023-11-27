import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import ClockIcon from "./ClockIcon.jsx";

//create your first component
const Home = ({digitos}) => {

	return (
		<div className="d-flex justify-content-center align-items-center">
			<ClockIcon />
			<SecondsCounter digito={digitos[5]} />
			<SecondsCounter digito={digitos[4]} />
			<SecondsCounter digito={digitos[3]} />
			<SecondsCounter digito={digitos[2]} />
			<SecondsCounter digito={digitos[1]} />
			<SecondsCounter digito={digitos[0]} />
		</div>
	);
};

export default Home;
