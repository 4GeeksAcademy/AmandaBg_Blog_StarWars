import React from "react";
import { Link } from "react-router-dom";
import pngeggImage from "../../img/pngegg.png";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				<p>
					<img className="img-sw" src={pngeggImage} />
				</p>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/favorites">
					<button className="btn me-5 mb-4">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
