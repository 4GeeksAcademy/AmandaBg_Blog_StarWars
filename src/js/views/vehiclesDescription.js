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
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${store.vehiclesDetails && store.vehiclesDetails.uid}.jpg`} className='img-fluid'
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h1 className="card-title">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.name}</h1>
                        <p className="card-text">{store.vehiclesDetails.description && store.vehiclesDetails.description}</p>
                        <h4>Model:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.vehicle_class}</p>
                        <h4>Vehicle Class:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.model}</p>
                        <h4>Manufacturer:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.manufacturer}</p>
                        <h4>Cost in Credits:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.cost_in_credits}</p>
                        <h4>Length:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.length}</p>
                        <h4>Crew:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.crew}</p>
                        <h4>Max atmosphering speed:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.max_atmosphering_speed}</p>
                        <h4>Passengers:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.passengers}</p>
                        <h4>Cargo Capacity:</h4>
                        <p className="card-text">{store.vehiclesDetails.properties && store.vehiclesDetails.properties.cargo_capacity}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

VehiclesDescription.propTypes = { vehiclesDetails: PropTypes.object };
