//Importar dependencias necesarias
import React, { useContext } from 'react';
//Obtener los parámetros de la URL
import { Link } from 'react-router-dom';
import {PropTypes} from "prop-types"
import { Context } from '../store/appContext';

//Definir el componente como funcion react
export const CardPlanets = ({planets},...props) => {
    const { store, actions } = useContext(Context);
    
    //renderizado del componente, useParams se utilizará para obtener los parámetros de la URL.
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`} onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}/>
            <div className="card-body">
            <h5 className="card-title" >{planets.name}</h5>
                <Link className='btn' to={`/planets/${planets.uid}`}>
                 See More
                </Link>
                <button className="btn float-end"onClick={()=>{actions.addFavoriteItems(planets.name); }}><i className="fa fa-heart"></i></button>
            </div>
       </div>
    )
}


CardPlanets.propTypes = {planets:PropTypes.object }

