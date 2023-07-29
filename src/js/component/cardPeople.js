//Importar dependencias necesarias
import React, { useContext } from 'react';
//Obtener los parámetros de la URL
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"
import { Context } from '../store/appContext';

//Definir el componente como funcion react
export const CardPeople = ({character}) => {
    const { store, actions } = useContext(Context);

    //renderizado del componente, useParams se utilizará para obtener los parámetros de la URL.
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} ></img>
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <Link className='btn' to={`/character/${character.uid}`}>
                 See More
                </Link>
                <button className="btn float-end"><i className="fab fa-brands fa-old-republic"></i></button>
            </div>
       </div>
    )
}

CardPeople.propTypes = {character:PropTypes.object }

export default CardPeople


