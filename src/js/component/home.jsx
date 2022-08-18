import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<Cards/>MMM
		</div>
	);
};

export default Home;
