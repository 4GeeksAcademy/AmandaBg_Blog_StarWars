// Importar dependencias necesarias
import React, { useContext } from 'react';
// Obtener los parámetros de la URL
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { Context } from '../store/appContext';

// Definir el componente como función react
export const CardPeople = ({ character }, ...props) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="card">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}/>
                <div className="card-body">
                <h5 className="card-title" >{character.name}</h5>
                    <Link className='btn' to={`/character/${character.uid}`}>
                    See More
                    </Link>
                    <button className="btn float-end"onClick={()=>{actions.addFavoriteItems(character.name); }}><i className="fa fa-heart"></i></button>
                </div>
            </div>
        </>
    );
};

CardPeople.propTypes = {
    character: PropTypes.object
};

export default CardPeople;



