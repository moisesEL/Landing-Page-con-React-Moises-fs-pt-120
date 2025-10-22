import React from "react";
import Navbar from "./Navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbtron from "./Jumbtron";
import Card from "./Card";
import Footer from "./Footer";

import {listDataCard} from "./DataUtils";

//create your first component
const Home = () => {
	console.log(listDataCard)


	return (
		<div className="body" >
			<Navbar />
			<div className="container">
				<Jumbtron />
				<div className="row">

				{
					listDataCard.map(dataCard => (
						<Card  {... dataCard}/>
					))
				}
					
				</div>
			</div>
			<Footer />

		</div>
	);
};

export default Home;
