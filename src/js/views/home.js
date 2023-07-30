
import { Context } from "../store/appContext.js";
import React, { useContext } from "react";

import "../../styles/home.css";
import { Link } from 'react-router-dom';
import{ CardPeople} from "../component/cardPeople";
import { CardPlanets } from '../component/cardPlanets';
import {CardVehicles} from "../component/cardVehicles";

export const Home = (...props) => {

	const { store, actions } = useContext(Context);

	return (
		<div>
			<div>
			<div className="container">
				<h2>Characters</h2>
				<div className="card-group d-flex flex-wrap">
					<ul className="list-group list-group-horizontal">
						{
							!!store.people &&
							store.people.map((character, index) => {
								return (
									<CardPeople key={index} character={character} />
								)
							})
						}
					</ul>
				</div>
			</div>
			</div>
			<div className="container">
				<h2>Planets</h2>
				<div className="card-group d-flex flex-wrap">
					<ul className="list-group list-group-horizontal">
						{
							!!store.planets &&
							store.planets.map((planets, index) => {
								return (
									<CardPlanets key={index} planets={planets} />
								)
							})
						}
					</ul>

				</div>
			</div>
		</div>

	)

};

