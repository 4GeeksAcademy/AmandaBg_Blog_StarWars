//Importar dependencias necesarias
import React, { useContext, useEffect } from 'react';
//Obtener los parámetros de la URL
import { Link, useParams } from 'react-router-dom';
import PropTypes from "prop-types"
import { Context } from '../store/appContext';

//Definir el componente como funcion react
export const PeopleDescription = () => {
  const { store, actions } = useContext(Context);
  const params = useParams()
  console.log(params)
  useEffect(() => {
    if (params.id) {
      actions.getPeopleById(params.id)
    }
  }, [])

  //renderizado del componente
  return (
      <div className="card-description">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${store.characterDetails.uid}.jpg`} className='img-fluid' />
          </div> 
            <div className="col-md-4">
              <div className="card-body">
                <h1 className="card-title" >{store.characterDetails.properties && store.characterDetails.properties.name}</h1>
                <p className="card-text">"{store.characterDetails.description && store.characterDetails.description}"</p>

                <h4>Gender:</h4>
                <p className="card-text">{store.characterDetails.properties && store.characterDetails.properties.gender}</p>
                <h4>Birth Year:</h4>
                <p className="card-text">{store.characterDetails.properties && store.characterDetails.properties.birth_year}</p> 
                <h4>Eye color:</h4>
                <p className="card-text">{store.characterDetails.properties && store.characterDetails.properties.eye_color}</p> 
                <h4>Hair Color:</h4>
                <p className="card-text">{store.characterDetails.properties && store.characterDetails.properties.hair_color}</p> 
                <h4>Height:</h4>
                <p className="card-text">{store.characterDetails.properties && store.characterDetails.properties.height}</p> 
                <h4>Skin Color:</h4>
                <p className="card-text">{store.characterDetails.properties && store.characterDetails.properties.skin_color}</p> 
              </div>
            </div>
        </div>
      </div>
  );
};

PeopleDescription.propTypes = { characterDetails: PropTypes.object };

{/* Utiliza characterDetails.uid en lugar de store.characterDetails.uid */ }



  // store.characterDetails.gender

