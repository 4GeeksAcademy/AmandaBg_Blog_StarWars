//Importar dependencias necesarias
import React, { useContext, useEffect } from 'react';
//Obtener los parámetros de la URL
import { Link, useParams } from 'react-router-dom';
import {PropTypes} from "prop-types"
import { Context } from '../store/appContext';

//Definir el componente como funcion react
export const VehiclesDescription = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    console.log(params)
    useEffect(() => {
        if (params.id) {
            actions.getVehiclesById(params.id)
        }
    }, [])

    //renderizado del componente
    return (
        <div className="container-description">
            <div className="row">
                <div className="col-md-6">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${store.vehiclesDetails.uid}.jpg`} className='img-fluid'
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h1 className="card-title">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.name}</h1>
                        <p className="card-text">{store.vehiclesDetails.description && store.vehiclesDetails.description}</p>
                        {/* <h4>Diameter:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.diameter}</p>
                        <h4>Rotation Period:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.rotation_period}</p>
                        <h4>Orbital Period:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.orbital_period}</p>
                        <h4>Gravity:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.gravity}</p>
                        <h4>Population:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.population}</p>
                        <h4>Climate:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.climate}</p>
                        <h4>Terrain:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.terrain}</p>
                        <h4>Surface Water:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.surface_water}</p> */}
                    </div>
                </div>
            </div>
        </div >
    );
};

VehiclesDescription.propTypes = { vehiclesDetails: PropTypes.object };
