//Importar dependencias necesarias
import React, { useContext } from 'react';
//Obtener los parámetros de la URL
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import pngeggImage from "../../img/pngegg.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				<p>
					<img className="img-sw" src={pngeggImage} />
				</p>
				</span>
			</Link>
			{/* <div className="ml-auto">
				<Link to="/favorites">
					<button className="btn me-5 mb-4">Favorites</button>
				</Link>
			</div> */}
			<div className="dropdown-container ml-auto">
				<button className="btn m-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{ store.favoriteItems.map((value, index) => {
						return <li className='list-item'
							key={index}>
							<a className='dropdown-item' href="#">{value}
								<button onClick={() => { actions.deleteFavoriteItems(index) }}><i className="fas fa-trash"></i></button>
							</a>
						</li>
					})}
				</ul>
			</div>
		</nav>
	);
};
